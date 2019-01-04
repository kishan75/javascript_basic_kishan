module.exports = {
    update_one: function (db) {
        var old_data = {
            name: "rajeseh"
        };
        var new_data = {
            $set: {
                name: "romy",
                age: 18
            }
        };
        db.updateOne(old_data, new_data, function (err, result) {
            if (err)
                throw err;
            console.log(result);
        });
    },
    update_all: function (db) {
        var new_data = {
            $set: {
                name: "romy",
                age: 18
            }
        };
        db.updateMany({}, new_data, function (err, result) {
         console.log(result);
        });
    }
};