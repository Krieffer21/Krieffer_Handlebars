
const orm = require("./config/orm.js");

  
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
          cb(res);
        });
      },
        insertOne: function(col, val, cb) {
        orm.insertOne("burgers", col, val, function(res) {
          cb(res);
        });
      },
    updateOne: function(vals, cond, cb) {
        orm.updateOne("burgers", vals, cond, function(res) {
          cb(res);
        });
      }
};

module.exports = burger;

