const mysql = require('mysql');
//local mysql db connection

const dbconfig = mysql.createConnection({
    host: '163.123.183.87',
    port: '28672',
    user: 'dipen',
    password: 'dipen1999',
    database: 'project'
});

dbconfig.connect(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('database connected');
    }
});

module.exports = dbconfig;