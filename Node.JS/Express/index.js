let express = require('express');
let app = express();

app.get('/', function(req, res) {
    res.send('Rota com Express');
});

app.listen(3000, function() {
    console.log("Aplicação está funcionando na porta 3000");
})