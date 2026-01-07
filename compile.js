const fs = require('fs');
const mustache = require('mustache');

const view = {
  nome: "Inês",
  data: new Date().toLocaleDateString()
};

const template = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Site da {{nome}}</title>
</head>
<body>
  <h1>Olá! Eu sou a {{nome}}.</h1>
  <p>Este site foi gerado automaticamente em: {{data}}</p>
  <p>O Mustache funcionou!</p>
</body>
</html>
`;

const output = mustache.render(template, view);
fs.writeFileSync('index.html', output);
console.log("Feito! O ficheiro index.html foi criado.");