import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    private readonly twilio;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(username: string, pass: string): Promise<any>;
    requestOTP(): Promise<any>;
    sendCustomSMS(): Promise<any>;
    verifyOTP(otp: string): Promise<any>;
}
