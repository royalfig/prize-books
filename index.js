const fs = require('fs');
const hbs = require('handlebars');

const data = fs.readFileSync('data.json');
const context = JSON.parse(data);
context.awards.map(x => {
    x.author.replace(/\w+$/g, m => x.last = m)
});


fs.readFile('award.handlebars', 'utf-8', (err, source) => {
    const template = hbs.compile(source);
    const html = template(context);
    fs.writeFileSync('index.html', html)
});