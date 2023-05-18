import { Socket } from 'socket.io';
type SocketIoMiddleware = {
    (client: Socket, next: (err?: Error) => void): any;
};
export declare const SocketAuthMiddleware: () => SocketIoMiddleware;
export {};
