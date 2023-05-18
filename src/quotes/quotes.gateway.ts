import { OnModuleInit, UseFilters, UseGuards } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsException,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { WebsocketExceptionsFilter } from 'src/auth/ws-jwt/exception.filter';
import { WsJwtGuard } from 'src/auth/ws-jwt/ws-jwt.guard';
import { SocketAuthMiddleware } from 'src/auth/ws-jwt/ws.mw';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { QuotesService } from './quotes.service';
import { ServerToClientMessages } from './types/quotes.types';

@WebSocketGateway(4001)
// @UseFilters(WebsocketExceptionsFilter)
@UseGuards(WsJwtGuard)
export class QuotesGateway implements OnModuleInit {
  constructor(private readonly quotesService: QuotesService) {}

  @WebSocketServer()
  server: Server<any, ServerToClientMessages>;

  //   handleConnection(client:Socket){
  // client.handshake.headers.authorization()
  //   }

  afterInit(client) {
    client.use(SocketAuthMiddleware());
  }

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id);
    });
    console.log('connected');
  }

  @SubscribeMessage('sendMessage')
  sendMessage(data: any) {
    // this.server.on('sendMessage',(payload))
    const message = {
      id: 1,
      quote: 'new quote created',
      message: 'New Message from',
    };

    console.log({ message });
    this.server.emit('onCreateQuote', message);
  }

  @SubscribeMessage('message')
  message() {
    throw new WsException('Invalid Data');
    this.server.close()
    // return { msg: 'hello World' };
    // return this.quotesService.create({
    //   id: 1,
    //   message: 'message',
    //   quote: 'quote',
    // });
  }

  @SubscribeMessage('createQuote')
  create(@MessageBody() createQuoteDto: CreateQuoteDto) {
    let current = 0;
    this.server.emit('onRandom', {
      quote: 'new quote created',
      message: 'New Message from',
    });
    const interval = setInterval(() => {
      this.server.emit('onCreateQuote', {
        id: 1,
        quote: 'new quote created',
        message: 'New Message from',
      });

      if (current >= 2) {
        clearInterval(interval);
      }
      current += 1;
    }, 1000);

    return this.quotesService.create(createQuoteDto);
  }

  @SubscribeMessage('findAllQuotes')
  findAll() {
    return this.quotesService.findAll();
  }

  @SubscribeMessage('findOneQuote')
  findOne(@MessageBody() id: number) {
    return this.quotesService.findOne(id);
  }

  @SubscribeMessage('updateQuote')
  update(@MessageBody() updateQuoteDto: UpdateQuoteDto) {
    return this.quotesService.update(updateQuoteDto.id, updateQuoteDto);
  }

  @SubscribeMessage('removeQuote')
  remove(@MessageBody() id: number) {
    return this.quotesService.remove(id);
  }
}
