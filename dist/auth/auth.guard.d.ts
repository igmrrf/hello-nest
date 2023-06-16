import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
export declare class AuthGuard implements CanActivate {
    private jwtService;
    private readonly configService;
    private reflector;
    private readonly logger;
    constructor(jwtService: JwtService, configService: ConfigService, reflector: Reflector);
    private extractTokenFromHeader;
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export declare const IS_PUBLIC_KEY = "isPublic";
export declare const SkipAuth: () => import("@nestjs/common").CustomDecorator<string>;
