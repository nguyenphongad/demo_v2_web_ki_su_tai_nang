const Page = require('../models/page.model');

class PageService {
    static createPage = async (data) => {
        try {
            const { pageName, tableName, tableDescription, rowTitleList } = data;
            console.log({ pageName, tableName, tableDescription, rowTitleList });

            const createdPage = await Page.create({
                pageName,
                tables: [
                    {
                        tableName,
                        tableDescription,
                        rowTitleList
                    }
                ]
            });
            return createdPage;
        } catch (error) {
            throw error;
        }
    };

    static getAllPage = async () => {
        try {
            const pages = await Page.find();
            return pages;
        } catch (error) {
            throw error;
        }
    };

    static getPage = async ({ pageName, userId }) => {
        try {
            console.log(userId);
            const page = await Page.findOne({ pageName })
                .populate({
                    path: 'tables',
                    populate: {
                        path: 'rowValueList',
                        model: 'row',
                        select: 'content',
                        match: { user: userId }
                    }
                })
                .lean();
            return page;
        } catch (error) {
            throw error;
        }
    };
}

module.exports = PageService;
