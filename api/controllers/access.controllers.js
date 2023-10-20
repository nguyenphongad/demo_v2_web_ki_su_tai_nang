const accessService = require('../services/access.service');

class AccessControllers {
    login = async (req, res, next) => {
        try {
            const checkLogin = await accessService.login(req.body);

            res.status(200).json({
                isExists: checkLogin,
                msg: checkLogin ? 'Login successful' : 'Login failed'
            });
        } catch (error) {
            console.log(error);
            next(error);
        }
    };
}

module.exports = new AccessControllers();
