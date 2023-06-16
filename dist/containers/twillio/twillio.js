"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const twilio_1 = require("twilio");
class SMS {
    constructor() {
        this.verifySid = process.env.TWILIO_VERIFY_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        this.client = new twilio_1.Twilio(accountSid, authToken);
    }
    async sendSMS(to = '+2348137045484', channel = 'sms') {
        const verification = await this.client.verify.v2
            .services(this.verifySid)
            .verifications.create({ to, channel });
        return verification;
    }
    async sendCustomSMS(body, to, from, mediaUrl) {
        const response = this.client.messages.create({
            body,
            to,
            from,
            mediaUrl,
        });
        return response;
    }
    async verifyPhone(otp, to = '+2348137045484') {
        console.log({ otp, to });
        const verification = await this.client.verify.v2
            .services(this.verifySid)
            .verificationChecks.create({ to, code: otp });
        return verification;
    }
}
exports.default = SMS;
//# sourceMappingURL=twillio.js.map