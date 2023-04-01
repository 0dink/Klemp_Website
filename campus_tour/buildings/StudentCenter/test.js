var mysql = require('mysql');

var con = mysql.createConnection({
    host: "128.153.6.129",
    user: "lapelljr",
    password: "Klemp123!",
    database: "lapelljr_KLEMP"
});

var RoomName = "R1107";

con.connect(function (err) {
    if (err) throw err;
    con.query(`SELECT XCoord, YCoord FROM Camp_1 WHERE RoomName = '${RoomName}'`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        var coords = result[0]; // Assign the result to a variable
        console.log(coords.XCoord, coords.YCoord); // Use the variable to access the values
        con.end(function (err) {
            if (err) throw err;
            console.log('Connection closed');
        });
    });
})
