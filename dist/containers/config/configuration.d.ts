declare const _default: () => {
    port: number;
    mysql: {
        host: string;
        port: number;
    };
    mongo: {
        host: string;
        port: number;
    };
    redis: {
        host: string;
        port: number;
    };
    jwt: {
        secret: string;
    };
};
export default _default;
