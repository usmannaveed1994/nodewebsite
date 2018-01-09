var express = require('express');
const hbs = require('hbs');
var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('index.hbs', {
        
    });
});

// app.get('/help', (req, res) => {
//     res.render('help.hbs');
// });



app.listen(port, () => {
    console.log('express app started on port: ' + port);  
});