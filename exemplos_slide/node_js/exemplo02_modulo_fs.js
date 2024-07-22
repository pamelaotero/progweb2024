const fs = require("fs");
fs.rename("imagem1.png", "imagem2.png", function (err) {
  if (err) throw new Error(err);
});

// O método de importar bibiliotecas do noe é diferente de outras linguagens.
// No node, a função require retorna um objeto contendo um conjunto de métodos.
// No nosso exemplo, a função "rename" é um dos métodos do objeto retornado por require "fs"
