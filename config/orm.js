const connection = require("./connection.js");

const orm = {
    selectAll function(name, cb) {
        const query = "SELECT * FROM" + name + ";";
        connection.query(query, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne function(table, col, val, cb) {
        let query = "INSERT INTO" + table;
        

    },

    updateOne function() {

    }

};


module.exports = orm;
