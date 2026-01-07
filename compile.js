const fs = require('fs');
const mustache = require('mustache');

// 1. Ler os dados da pasta 'dados'
const dadosRaw = fs.readFileSync('dados/dados.json', 'utf8');
const dados = JSON.parse(dadosRaw);

// 2. Ler os templates da pasta 'templates'
const templateIndex = fs.readFileSync('templates/template.mustache', 'utf8');
const templateHistoria = fs.readFileSync('templates/historia.mustache', 'utf8');

// 3. Gerar a Pagina Principal (index.html)
const htmlIndex = mustache.render(templateIndex, dados);
fs.writeFileSync('index.html', htmlIndex);

// 4. Gerar a Pagina de Historia (historia.html)
const htmlHistoria = mustache.render(templateHistoria, dados);
fs.writeFileSync('historia.html', htmlHistoria);

console.log("Feito! O ficheiro index.html e historia.html foram criados.");