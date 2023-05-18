import { Injectable, OnModuleInit } from '@nestjs/common';
import { Socket, io } from 'socket.io-client';
import WebSocket from 'websocket';
import WebSocketWS from 'ws';

@Injectable()
export class SocketClient implements OnModuleInit {
  public socketClient: Socket;
  public client: any;
  public ws: any;

  constructor() {
    this.socketClient = io('wss://ws-sandbox.coinapi.io/v1/');
    // this.socketClient = io('http://localhost:4001');
    this.ws = new WebSocketWS('wss://ws-sandbox.coinapi.io/v1/');
    const WebSocketClient = WebSocket.client;
    this.client = new WebSocketClient();
  }
  onModuleInit() {
    this.registerConsumerEvents();
    // this.connectWSS();
    // this.connectWithWS();
  }

  private async registerConsumerEvents() {
    this.socketClient.on('connect', () => {
      console.log('Connected to Gateway');
    });
    this.socketClient.on('onCreateQuote', (payload: any) => {
      console.log(payload);
    });
    // this.socketClient.emit('createQuote', { msg: "I'm surely not fine" });
    await this.socketClient.connect();
    this.socketClient.connected;
  }

  private connectWithWS() {
    // !WORKING
    this.ws.on('error', console.error);

    this.ws.on('open', () => {
      console.log('Connection Opened');
      this.ws.send(
        '{"type": "hello", "apikey": "A38D9B49-A2EA-49D5-A5C2-FDF007C180A4","heartbeat": false,"subscribe_data_type": ["quote"],"subscribe_filter_asset_id": ["BTC", "ETH"]}',
      );
    });

    this.ws.on('message', function message(data) {
      console.log('received: %s', data);
    });
  }

  private connectWSS() {
    // !WORKING
    this.client.on('connectFailed', function (error) {
      console.log('Connect Error: ' + error.toString());
    });

    this.client.on('connect', (connection) => {
      console.log('WebSocket Client Connected');
      connection.on('error', function (error) {
        console.log('Connection Error: ' + error.toString());
      });
      connection.on('close', function () {
        console.log('echo-protocol Connection Closed');
      });
      connection.on('message', function (message) {
        if (message.type === 'utf8') {
          console.log("Received: '" + message.utf8Data + "'");
        }
      });
      console.log({ emit: this.client.emit });

      connection.send(
        '{"type": "hello", "apikey": "A38D9B49-A2EA-49D5-A5C2-FDF007C180A4","heartbeat": false,"subscribe_data_type": ["quote"],"subscribe_filter_asset_id": ["BTC", "ETH"]}',
      );
    });

    this.client.connect('wss://ws-sandbox.coinapi.io/v1/');
  }
}
