module.exports = function(app){

    app.get('/noticias', function(req, res){
    
        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host: 'localhost',
            User: 'root',
            password: '0311',
            database:'portal_noticias',
            insecureAuth: true
        });

    connection.query('select * from noticias', function (err, result) {
        console.log(result);
        console.log(err);
        res.send(result);

    });


    //res.render("noticias/noticias");
});

};