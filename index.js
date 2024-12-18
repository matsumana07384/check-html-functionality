const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 静的ファイルの提供
app.use(express.static(path.join(__dirname, 'docs')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
