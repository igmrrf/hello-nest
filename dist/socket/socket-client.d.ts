import { OnModuleInit } from '@nestjs/common';
import { Socket } from 'socket.io-client';
export declare class SocketClient implements OnModuleInit {
    socketClient: Socket;
    client: any;
    ws: any;
    constructor();
    onModuleInit(): void;
    private registerConsumerEvents;
    private connectWithWS;
    private connectWSS;
}
