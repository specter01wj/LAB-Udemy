var fs = require('fs');
var n = 4;

for(var i = 0; i < n; i++){
    fs.writeFileSync(i + '.txt', '');
}