const hapi = require('@hapi/hapi');

const init = async () =>{
    const server = hapi.Server({
      port: 9000,
      host: 'localhost',
      routes: {
          cors: {
              origin: ['*'],
          }
      }
    });

    await server.start();
    console.log(`server is running on   ${server.info.uri}`);

}

init();