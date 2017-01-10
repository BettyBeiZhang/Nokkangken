var express = require('express');
var app = express();
var pg = require('pg');

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));



app.get('/db', function (request, response) {
  pg.connect(process.env.postgresql-encircled-34031, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
});



// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});