var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias');
const { routes, head } = require('./config/server');
rotaNoticias(app);

var rotaHome = require('./app/routes/home');
rotaHome(app);

var rotaFormInclusaoNoticia = require('./app/routes/form_inclusao_noticias');
rotaFormInclusaoNoticia(app);

app.listen(3000, function(){
    console.log("Server em execução!");

});


