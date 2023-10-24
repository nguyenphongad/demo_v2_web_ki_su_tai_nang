const pageService = require('../services/page.service');

class PageControllers {
    createPage = async (req, res, next) => {
        try {
            const createdPage = await pageService.createPage(req.body);

            res.status(201).json({
                status: 'Tạo Page Mới Thành Công',
                data: createdPage
            });
        } catch (error) {
            next(error);
        }
    };

    getAllPage = async (req, res, next) => {
        try {
            const pages = await pageService.getAllPage();
            res.status(200).json({
                status: 'Lấy Toàn Bộ Page Thành Công',
                data: pages || []
            });
        } catch (error) {
            console.log(error);
            next(error);
        }
    };

    getPage = async (req, res, next) => {
        const page = await pageService.getPage({ pageName: req.params.page });
        try {
            res.status(200).json({
                status: 'Lấy Dữ Liệu Page Thành Công',
                data: page
            });
        } catch (error) {
            next(error);
        }
    };
}

module.exports = new PageControllers();
