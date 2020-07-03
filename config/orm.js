const connection = require("../config/connection.js");

const orm = {
    selectAll: function(table, cb) {
        const query = "SELECT * FROM ??";
        connection.query(query, [table], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(table, col, val, cb) {
        let query = "INSERT INTO" + table;
        query += " (";
        query += cols.toString();
        query += ") ";
        query += "VALUES (";
        query += printQuestionMarks(vals.length);
        query += ") ";
    
        connection.query(query, vals, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },

    updateOne: function(table, objColVals, condition, cb) {
        let query = "UPDATE " + table;
    
        query += " SET ";
        query += objToSql(objColVals);
        query += " WHERE ";
        query += condition;
    
        connection.query(query, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      }
};

module.exports = orm;
