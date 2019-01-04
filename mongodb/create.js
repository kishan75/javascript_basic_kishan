module.exports = {
    table_create: function (db) {
        db.createCollection("employees", function (err, res) {
            if (err) throw err;
            console.log("Collection is created!");
        });
    },
    data_create_single: function (db) {
        var single_data = {
            name: "rohan",
            age: 19,
            add: "saket nagar"
        };
        db.insertOne(single_data, function (err, result) {
            if (err)
                throw err;
            console.log("data inserted");
        });
    },
    data_create_multi: function (db) {
        var multi_data = [{
                name: "riya",
                age: 19,
                add: "indore"
            },
            {
                name: "brijesh",
                age: 22,
                add: "california",
                sex: "male"
            }

        ];
        db.insertMany(multi_data, function (err, result) {
            if (err)
                throw err;
            console.log("data inserted");
        });
    }
};