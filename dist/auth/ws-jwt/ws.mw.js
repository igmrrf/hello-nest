"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketAuthMiddleware = void 0;
const ws_jwt_guard_1 = require("./ws-jwt.guard");
const SocketAuthMiddleware = () => {
    return (client, next) => {
        try {
            ws_jwt_guard_1.WsJwtGuard.validateToken(client);
            next();
        }
        catch (error) {
            next(error);
        }
    };
};
exports.SocketAuthMiddleware = SocketAuthMiddleware;
//# sourceMappingURL=ws.mw.js.map