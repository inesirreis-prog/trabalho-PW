const fs = require('fs');
const mustache = require('mustache');

// 1. Ler o ficheiro de DADOS (a informacao)
const dadosRaw = fs.readFileSync('dados.json', 'utf8');
const dados = JSON.parse(dadosRaw);

// 2. Ler o ficheiro de TEMPLATE (o visual)
const template = fs.readFileSync('template.mustache', 'utf8');

// 3. Juntar os dois com o Mustache
const output = mustache.render(template, dados);

// 4. Escrever o resultado no ficheiro final
fs.writeFileSync('index.html', output);

console.log("Sucesso: O site foi gerado a partir dos ficheiros separados.");