const pageService = require('../services/page.service');

class PageControllers {
    createPage = async (req, res, next) => {
        try {
            const createdPage = await pageService.createPage(req.body);

            res.status(201).json({
                status: 'create page successful',
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
                status: 'get pages successful',
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
                data: page
            });
        } catch (error) {
            next(error);
        }
    };
}

module.exports = new PageControllers();
