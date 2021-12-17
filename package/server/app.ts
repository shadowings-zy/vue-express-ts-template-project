import express from 'express';
import { getRouter } from './router';
import { config } from './config';

const main = async () => {
  const app = express();
  const port = 8081;

  app.use('/static', express.static(config.staticFilePath));
  app.use('/api', getRouter());
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
};

main();
