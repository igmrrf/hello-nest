import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { Socket } from 'socket.io';

@Injectable()
export class WsJwtGuard implements CanActivate {
  private static jwtService = new JwtService();
  private static configService = new ConfigService();

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    if (context.getType() !== 'ws') {
      return true;
    }
    const client: Socket = context.switchToWs().getClient();
    WsJwtGuard.validateToken(client);

    return true;
  }

  static async validateToken(client: Socket) {
    const { authorization } = client.handshake.headers;

    if (!authorization) {
      return client._error('unauthorized');
    }

    const token: string = authorization.split(' ')[1];

    const payload = await WsJwtGuard.jwtService.verifyAsync(token, {
      secret: WsJwtGuard.configService.get('JWT_SECRET'),
    });
    return payload;
  }
}
