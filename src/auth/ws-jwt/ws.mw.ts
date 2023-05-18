import { Socket } from 'socket.io';
import { WsJwtGuard } from './ws-jwt.guard';

type SocketIoMiddleware = {
  (client: Socket, next: (err?: Error) => void);
};

export const SocketAuthMiddleware = (): SocketIoMiddleware => {
  return (client, next) => {
    try {
      WsJwtGuard.validateToken(client);
      next();
    } catch (error) {
      next(error);
    }
  };
};
