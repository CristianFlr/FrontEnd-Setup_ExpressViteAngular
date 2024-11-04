const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve the static files from the dist folder
app.use(express.static(path.join(__dirname, 'client/dist/front-shop/browser')));

// Catch all routes and return the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/front-shop/browser', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
