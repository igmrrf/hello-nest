import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception?.getStatus();
        let message = exception?.message;

        const except = exception.getResponse();
        if (typeof except === 'object' && 'message' in except) {
            const exceptionMessage = except.message;

            if (
                message === 'Bad Request Exception' &&
                typeof exceptionMessage !== 'string'
            ) {
                message = exceptionMessage[0];
            }
        }

        response.status(status).json({
            success: false,
            status_code: status,
            message,
            data: null,
            timestamp: new Date().toISOString(),
            links: [request.url],
        });
    }
}

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: unknown, host: ArgumentsHost): void {
        const { httpAdapter } = this.httpAdapterHost;
        const ctx = host.switchToHttp();
        const httpStatus =
            exception instanceof HttpException
                ? exception.getStatus()
                : HttpStatus.INTERNAL_SERVER_ERROR;
        const instanceOfHttpException = exception instanceof HttpException;
        let message = instanceOfHttpException
            ? exception.message
            : 'A break on the bridge';

        // message = exception instance ExecutionExecption
        const except = instanceOfHttpException && exception.getResponse();
        if (typeof except === 'object' && 'message' in except) {
            const exceptionMessage = except.message;
            if (
                message === 'Bad Request Exception' &&
                typeof exceptionMessage !== 'string'
            ) {
                message = exceptionMessage[0];
            }
        }

        const responseBody = {
            success: false,
            status_code: httpStatus,
            message,
            data: null,
            timestamp: new Date().toISOString(),
            links: [],
            path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };

        httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
    }
}
