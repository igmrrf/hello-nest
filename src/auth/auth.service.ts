import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import SMS from 'src/containers/twillio/twillio';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  private readonly twilio = new SMS();
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findUser(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.username, sub: user.userId };

    return { access_token: await this.jwtService.signAsync(payload) };
  }

  async requestOTP(): Promise<any> {
    const response = await this.twilio.sendSMS();
    return response;
  }

  async sendCustomSMS(): Promise<any> {
    const response = await this.twilio.sendCustomSMS(
      'Hello There',
      '+2348164156256',
      '+2348137045484',
      'https://picsum.photos/200',
    );
    return response;
  }

  async verifyOTP(otp: string): Promise<any> {
    const response = await this.twilio.verifyPhone(otp);
    return response;
  }
}
