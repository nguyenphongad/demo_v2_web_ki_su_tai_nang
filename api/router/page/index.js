const router = require('express').Router();
const fetch = require('node-fetch');
const pageControllers = require('../../controllers/page.controllers');

router.post('/page', pageControllers.createPage);

router.get('/page', pageControllers.getAllPage);

router.get('/page/:page', pageControllers.getPage);

router.get('/get_captcha', async (req, res, next) => {
    try {
        const response = await fetch(
            `https://sv.iuh.edu.vn/WebCommon/GetCaptcha?r=${Math.random()}`,
            {
                headers: {
                    accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
                    'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5'
                },
                body: null,
                method: 'GET',
                mode: 'cors',
                credentials: 'include'
            }
        );

        let blob = await response.blob();
        let buffer = Buffer.from(await blob.arrayBuffer());
        const base64 = 'data:' + blob.type + ';base64,' + buffer.toString('base64');

        res.status(200).json({
            data: base64
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
});

module.exports = router;
