const fs = require('fs');
const path = require('path');

const slideshow = fs.readFileSync(path.join(__dirname, 'slideshow.html'));

const server = require('http')
  .createServer((req, res) => {
    if (req.url === '/favicon.ico') {
      res.writeHead(404);
      res.end();
      return;
    }
    
    if (req.url.startsWith('/img/')) {
      const imgPath = path.join(__dirname, req.url);
      if (fs.existsSync(imgPath)) {
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        fs.createReadStream(imgPath).pipe(res);
        return;
      }
    }
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(slideshow);
  })
  .listen(process.env.PORT);