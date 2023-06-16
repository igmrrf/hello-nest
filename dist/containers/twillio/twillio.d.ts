export default class SMS {
    private readonly verifySid;
    private client;
    x: any;
    constructor();
    sendSMS(to?: string, channel?: string): Promise<any>;
    sendCustomSMS(body: string, to: string, from: string, mediaUrl: string): Promise<any>;
    verifyPhone(otp: string, to?: string): Promise<any>;
}
