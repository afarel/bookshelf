const hapi = require('@hapi/hapi');

// kriteria 1
const init = async () => {
    const server = hapi.Server({
        port: 9000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    await server.start();
    // eslint-disable-next-line no-console
    console.log(`server is running on   ${server.info.uri}`);
};

init();
