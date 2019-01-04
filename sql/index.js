var mysql = require("mysql");
var create = require("./create");
var deletion = require("./delete");
var data_insertion = require("./data_insertion");
var read = require("./read");
var update = require("./update");
var connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});
connect.connect(function (err) {
  if (err)
    throw err;
  console.log("connected succefully");
  connect.database = "testing";
  create.create_database(connect).then(
    connect.query("use " + connect.database, function (err, result) {
      if (err)
        throw err;
      console.log("database " + connect.database + " selected");
    })).then(create.create_table(connect)).then(
    data_insertion(connect)).then(
    read.select(connect)).then(
    update.query(connect)).then(
    update.all(connect)).then(
    deletion.delete_row(connect)).then(
    deletion.drop_table(connect)).then(
    deletion.drop_database(connect));
});