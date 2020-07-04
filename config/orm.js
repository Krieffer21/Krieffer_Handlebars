const connection = require("../config/connection.js");

// Helper function for SQL syntax.
// In order to write the query, we need question marks.
// The helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string => "?,?,?";

function printQuestionMarks(num) {
    const arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax

  function objToSql(ob) {
    const arr = [];
      // loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
      const value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
          // if string with spaces, add quotations 
          if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
          }
        arr.push(key + "=" + value);
      }
    }
      return arr.toString();
  }

// Object for all our SQL statement functions.
const orm = {
    all: function(table, cb) {
        const query = "SELECT * FROM ??";
        connection.query(query, [table], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    create: function(table, cols, val, cb) {
      if (val[1] === "false") {
        val[1] = false;
      } else {
        val[1] = true;
      }
      
        let queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(val.length);
        queryString += ") ";
    
        console.log(val);

        connection.query(queryString, val, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },

    update: function(table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      }
};

module.exports = orm;
