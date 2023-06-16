import { OnModuleInit } from '@nestjs/common';
import { Server } from 'socket.io';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { QuotesService } from './quotes.service';
import { ServerToClientMessages } from './types/quotes.types';
export declare class QuotesGateway implements OnModuleInit {
    private readonly quotesService;
    constructor(quotesService: QuotesService);
    server: Server<any, ServerToClientMessages>;
    afterInit(client: any): void;
    onModuleInit(): void;
    sendMessage(data: any): void;
    message(): void;
    create(createQuoteDto: CreateQuoteDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateQuoteDto: UpdateQuoteDto): string;
    remove(id: number): string;
}
