module.exports = {
    read_all: function (db) {
        db.find({}).toArray(function (err, result) {
            if (err)
                throw err;
                console.log("all data");
            console.log(result);
        });
    },
    read_query: function (db) {
        var query = {
            name: "rajesh"
        };
        db.find(query, function (err, result) {
            if (err)
                throw err;
            console.log(result);
        });
    },
    read_all_few_property: function (db) {
        db.find({}, {
            projectio: {
                name: 0
            }
        }, function (err, result) {
            if (err)
                throw err;
            console.log(result);
        });
    },
    read_one_row: function (db) {
        db.findone({}, function (err, result) {
            console.log(result);
        });
    }
};