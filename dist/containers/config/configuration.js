"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    mysql: {
        host: process.env.MYSQL_HOST,
        port: parseInt(process.env.MYSQL_PORT, 10) || 3306,
    },
    mongo: {
        host: process.env.MONGO_HOST,
        port: parseInt(process.env.MONGO_PORT, 10) || 27017,
    },
    redis: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT, 10) || 6379,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
    },
});
//# sourceMappingURL=configuration.js.map