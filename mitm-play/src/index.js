import express from 'express';

const app = express();
const start = ({ port = 3333, onListen = () => console.log('listening') }) => app.listen(port, onListen);

app.all('/', (req, res) => {
  res.json({ data: 'hey' });
});

export { start };