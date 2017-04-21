var marked = require('marked');
let fs = require('fs');
let path = require('path');

var readme = fs.readFileSync(path.join(__dirname, '../README.md'), 'utf-8');

let codeList = [];

marked.setOptions({
    highlight: function (code, lang) {
        lang = lang || '';
        if(lang.toLowerCase() === 'javascript'){
            codeList.push(code);
        }
    }
});

marked(readme);


var template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="app">
        {{content}}
    </div>
    <script src="http://cdn.bootcss.com/vue/2.0.5/vue.js"></script>
    <script src="../dist/vue-filter.js"></script>
    <script>
        new Vue({
            el: '#app'
        });
    </script>
</body>
</html>
`;


codeList = codeList.map(code => {
    return '<p>\n' + code + '\n</p>\n';
});

template = template.replace('{{content}}', codeList.join('<br/>'));

fs.writeFileSync(path.join(__dirname, './readme-test.html'), template, 'utf-8');
