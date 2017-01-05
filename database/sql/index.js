'use strict';

var QueryFile = require('pg-promise').QueryFile;
var path = require('path');

// function to create QueryFiles to be exported;
function sql(file) {

  var fullPath = path.join(__dirname, file); // generating full path;

  var options = {
        
    minify: true,

        // could explicitly define static fomatting here. public is the same as default schema name;
    params: {
      schema: 'public' 
    }
  };

  return new QueryFile(fullPath, options);
}

//generate minified/formatted queryfiles from our raw sql files and export the results
module.exports = {
  possibleLocations: {
    create: sql('possibleLocations/create.sql'),
    empty: sql('possibleLocations/empty.sql'),
    drop: sql('possibleLocations/drop.sql')
  },
  possibles: {
    create: sql('possibles/create.sql'),
    empty: sql('possibles/empty.sql'),
    drop: sql('possibles/drop.sql')
  },
  responses: {
    create: sql('responses/create.sql'),
    empty: sql('responses/empty.sql'),
    drop: sql('responses/drop.sql')
  },
  scheduleds: {
    create: sql('scheduleds/create.sql'),
    empty: sql('scheduleds/empty.sql'),
    drop: sql('scheduleds/drop.sql')
  },
  users: {
    create: sql('users/create.sql'),
    empty: sql('users/empty.sql'),
    drop: sql('users/drop.sql')
  },
  users_scheduleds: {
    create: sql('users_scheduleds/create.sql'),
    empty: sql('users_scheduleds/empty.sql'),
    drop: sql('users_scheduleds/drop.sql')
  }
  

};
