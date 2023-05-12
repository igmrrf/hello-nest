/* eslint-disable @typescript-eslint/no-var-requires */
import { Twilio } from 'twilio';

export default class SMS {
  private readonly verifySid = process.env.TWILIO_VERIFY_SID;
  private client;
  x;
  constructor() {
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    this.client = new Twilio(accountSid, authToken);
  }

  async sendSMS(to = '+2348137045484', channel = 'sms') {
    const verification = await this.client.verify.v2
      .services(this.verifySid)
      .verifications.create({ to, channel });

    return verification;
  }

  async sendCustomSMS(
    body: string,
    to: string,
    from: string,
    mediaUrl: string,
  ) {
    const response = this.client.messages.create({
      body,
      to,
      from,
      mediaUrl,
    });

    return response;
  }

  async verifyPhone(otp: string, to = '+2348137045484') {
    console.log({ otp, to });
    const verification = await this.client.verify.v2
      .services(this.verifySid)
      .verificationChecks.create({ to, code: otp });

    return verification;
  }
}
