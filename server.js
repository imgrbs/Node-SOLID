import dotenv from 'dotenv';
import express from 'express';
import routes from './routes';

dotenv.config();

const PORT = process.env.PORT || 3001;

const server = express();

server.use('/', routes);

server.listen(PORT, (err) => {
  if (err) throw err
  console.log(`Server Ready on http://localhost:${PORT}`);
});