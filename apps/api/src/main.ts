import { Server } from 'http';
import exitHook from 'async-exit-hook';

// import { delay } from '@badges/library/delay';

import { startServer, stopServer } from './server';

let server: Server;

const start = async (): Promise<void> => {
  server = await startServer();
};

start();

exitHook.uncaughtExceptionHandler((e) => {
  console.error(e);
});

exitHook.unhandledRejectionHandler((e) => {
  console.error(e);
});

exitHook(async (callback: () => void) => {
  await stopServer(server);
  // await delay(10);
  callback();
});

exitHook.uncaughtExceptionHandler(async () => {
  // await delay(10);
  process.exit(-1);
});
