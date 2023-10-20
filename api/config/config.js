const dev = {
    app: {
        port: process.env.DEV_APP_PORT || 4000,
        clientDomain: process.env.DEV_CLIENT_DOMAIN || 'http://localhost:3000'
    },
    mongodb: {
        port: process.env.DEV_MONGODB_PORT || 27017,
        host: process.env.DEV_MONGODB_HOST || 'localhost',
        database: process.env.DEV_MONGODB_DATABASE || 'dev_database'
    }
};

const pro = {
    app: {
        port: process.env.PRO_APP_PORT || 4000,
        clientDomain: process.env.PRO_CLIENT_DOMAIN || 'http://localhost:3000'
    },
    mongodb: {
        port: process.env.PRO_MONGODB_PORT || 27017,
        host: process.env.PRO_MONGODB_HOST || 'localhost',
        database: process.env.PRO_MONGODB_DATABASE || 'pro_database'
    }
};

const config = { dev, pro };
const env = process.env.NODE_ENV || 'dev';

module.exports = config[env];
