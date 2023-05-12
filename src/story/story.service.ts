import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';

@Injectable()
export class StoryService {
  private readonly logger = new Logger(StoryService.name);
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {}
  create(createStoryDto: CreateStoryDto) {
    this.logger.log(createStoryDto);
    return 'This action adds a new story';
  }

  async findAll() {
    const dbUser = this.configService.get<string>('MYSQL_USERNAME');
    const mongoHost = this.configService.get<string>('mongo.host');

    // use 6379 when "redis.port" is not defined
    const redisPort = this.configService.get<number>('redis.port', 6379);

    this.logger.log(dbUser);
    this.logger.log(redisPort);
    this.logger.log(mongoHost);
    // const { data } = await firstValueFrom(
    //   this.httpService
    //     .get('https://nftprintpro-75mp.onrender.com/v1/order?type=print')
    //     .pipe(
    //       catchError((error: AxiosError) => {
    //         this.logger.error(error.response.data);
    //         throw 'An error happened!';
    //       }),
    //     ),
    // );

    return 'data';
  }

  findOne(id: number) {
    return `This action returns a #${id} story`;
  }

  update(id: number, updateStoryDto: UpdateStoryDto) {
    this.logger.log(updateStoryDto);
    return `This action updates a #${id} story`;
  }

  remove(id: number) {
    return `This action removes a #${id} story`;
  }
}
