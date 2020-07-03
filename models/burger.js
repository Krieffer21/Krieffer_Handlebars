
const orm = require("../config/orm.js");
  
const burger = {
  selectAll: function(cb) {
        orm.all("burgers", function(res) {
          cb(res);
        });
      },
  insertOne: function(col, val, cb) {
        orm.create("burgers", col, val, function(res) {
          cb(res);
        });
      },
  updateOne: function(val, cond, cb) {
        orm.update("burgers", val, cond, function(res) {
          cb(res);
        });
      }
};

module.exports = burger;

