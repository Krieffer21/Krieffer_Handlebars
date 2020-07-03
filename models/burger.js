
const orm = require("../config/orm.js");
  
const burger = {
    all: function(cb) {
        orm.all("burger_name", function(res) {
          cb(res);
        });
      },
        create: function(col, val, cb) {
        orm.create("burger_name", col, val, function(res) {
          cb(res);
        });
      },
    update: function(vals, cond, cb) {
        orm.update("burger_name", vals, cond, function(res) {
          cb(res);
        });
      }
};

module.exports = burger;

