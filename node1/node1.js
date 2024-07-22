const http = require("http");
require("dotenv").config();
console.log("process.env.PORT", process.env.PORT);

const PORT = process.env.PORT || 8080;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  const fs = require("fs");

  const diretory = "C:/Users/pamel/UFAM2024/progweb2024";

  fs.readdir(diretory, (err, arquivos) => {
    if (err) throw err;

    console.log("Arquivos e subdiretorios em");

    let fileList = "<ul>";
    arquivos.forEach((arquivo) => {
      fileList += `<li>${arquivo}</li>`;
    });
    fileList += "</ul>";

    res.write(`
      <html>
        <head>
          <title>Lista de Arquivos</title>
        </head>
       <body>
          <h1>Arquivos e subdiretórios em</h1>
          ${fileList}
        </body>
      </html>
    `);
    res.end();
  });

  // res.send(`
  //   <html>
  //     <head>
  //       <title>Lista de Arquivos</title>
  //     </head>
  //     <body>
  //       <h1>Arquivos e subdiretórios em ${directoryPath}</h1>
  //       ${fileList}
  //     </body>
  //   </html>
  // `);
});
server.listen(PORT);
