const http = require('node:http');
const pageData = require('./data.js');

const server = http.createServer((req, res) => {
  console.log('request recibida');

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  const html = `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>${pageData.title}</title>
      </head>
      <body>
        <h1>${pageData.title}</h1>
        <h2>${pageData.subtitle}</h2>
        <p>${pageData.description}</p>
      </body>
    </html>
  `;

  res.end(html);
});

server.listen(0, () => {
  console.log(`server listening on port http://localhost:${server.address().port}`);

});
