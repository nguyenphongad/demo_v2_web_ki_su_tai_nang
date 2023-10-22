const Page = require('../models/page.model');
const Row = require('../models/row.model');

class rowService {
    static addRow = async (data) => {
        try {
            const { user, table, page, content } = data;

            let rowList = await Row.findOne({ user, table, page });

            if (!rowList) {
                rowList = await Row.create({
                    user,
                    table,
                    page,
                    content: [content]
                });

                await Page.findOneAndUpdate(
                    { _id: page, 'tables._id': table },
                    {
                        $set: {
                            'tables.$.rowValueList': rowList._id
                        }
                    }
                );
            } else {
                rowList = await Row.findOneAndUpdate(
                    {
                        user,
                        table,
                        page
                    },
                    {
                        $push: { content: content }
                    },
                    { new: true }
                ).lean();
            }
            return rowList;
        } catch (error) {
            throw error;
        }
    };
}

module.exports = rowService;
