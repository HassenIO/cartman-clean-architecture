import app from './app';

const { SERVER_PORT } = process.env;
const port = SERVER_PORT || 8080;

const server = app.listen(port, () => {
  console.log(`🚀  Server started at http://localhost:${port}`);
});
