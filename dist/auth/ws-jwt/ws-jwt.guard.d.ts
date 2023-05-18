import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Socket } from 'socket.io';
export declare class WsJwtGuard implements CanActivate {
    private static jwtService;
    private static configService;
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    static validateToken(client: Socket): Promise<any>;
}
