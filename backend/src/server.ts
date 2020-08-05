import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ msg: 'backend' });
});

app.listen(3333, () => {
  console.log('🚦️ run service in port 3333');
});
