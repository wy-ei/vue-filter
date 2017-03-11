var marked = require('marked');
let fs = require('fs');

var readme = fs.readFileSync('../README.md', 'utf-8');

let codeList = [];

marked.setOptions({
    highlight: function (code, lang) {
        if(lang === 'js' || lang.toLowerCase() === 'javascript'){
            codeList.push(code);
        }
    }
});

marked(readme);


var template = fs.readFileSync('./index.html', 'utf-8');


codeList = codeList.map(code => {
    return '<p>' + code + '</p>';
});

template = template.replace('${content}', codeList.join('\n'));

fs.writeFileSync('./test-readme.html', template, 'utf-8');
