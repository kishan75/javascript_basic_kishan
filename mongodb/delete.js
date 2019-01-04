module.exports = {
    delete_data: function (db) {
        var query = {
            age: 19
        };
        db.deleteMany(query, function (err, result) {
            console.log("deleted successfully");
        });
    },
    delete_collection: function (db) {
        db.drop(function (err, result) {
            if (err)
                throw err;
            console.log("collection droped successfully ");
        });
    },
    delete_db: function (db) {
        db.dropDatabase(function (err, result) {
            if (err)
                throw err;
            console.log("db droped !");
        });

    }
};