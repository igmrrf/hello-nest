import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    private readonly logger;
    constructor(authService: AuthService);
    signIn(signInDto: Record<string, any>): Promise<any>;
    requestPhoneOTP(signInDto: Record<string, any>): Promise<any>;
    verifyPhoneOTP(signInDto: any): Promise<any>;
    sendSMS(signInDto: any): Promise<any>;
    getProfile(req: any): any;
}
