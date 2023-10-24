const rowService = require('../services/row.service');

class RowControllers {
    addRow = async (req, res, next) => {
        try {
            const rowList = await rowService.addRow(req.body);
            console.log(res.locals.userId);

            res.status(200).json({
                status: 'Thêm Thông Tin Thành Công',
                data: rowList
            });
        } catch (error) {
            console.log(error);
            next(error);
        }
    };
}

module.exports = new RowControllers();
