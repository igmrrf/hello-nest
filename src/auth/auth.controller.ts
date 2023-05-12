import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Logger,
  Post,
  Request,
} from '@nestjs/common';
import { SkipAuth } from './auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @SkipAuth()
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    this.logger.log({ signInDto });
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @SkipAuth()
  @Post('otp')
  requestPhoneOTP(@Body() signInDto: Record<string, any>) {
    this.logger.log({ signInDto });
    return this.authService.requestOTP();
  }

  @HttpCode(HttpStatus.OK)
  @SkipAuth()
  @Post('verify')
  verifyPhoneOTP(@Body() signInDto: any) {
    console.log({ signInDto });

    return this.authService.verifyOTP(signInDto.otp);
  }

  @HttpCode(HttpStatus.OK)
  @SkipAuth()
  @Post('send-sms')
  sendSMS(@Body() signInDto: any) {
    console.log({ signInDto });

    return this.authService.sendCustomSMS();
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
