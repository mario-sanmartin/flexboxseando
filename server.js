const express = require('express');
const app = express();


app.use(express.static(__dirname + '/kk'));

app.listen('3000',function(){
    console.log('Buenas dias princesa desde el puerto 3000');;
})