var ExpressCassandra = require('express-cassandra');
var models = ExpressCassandra.createClient({
    clientOptions: {
        contactPoints: ['127.0.0.1'],
        protocolOptions: { port: 9042 },
        keyspace: 'allReviews',
        queryOptions: {consistency: ExpressCassandra.consistencies.one}
    },
    ormOptions: {
        defaultReplicationStrategy : {
            class: 'SimpleStrategy',
            replication_factor: 1
        },
        migration: 'drop',
    }
});

var MyModel = models.loadSchema('reviews', {
    fields: {
        id: "int",
        home_id: "int",
        user_name: "text",
        user_photo: "text",
        review_text: "text",
        accuracy: "int",
        communication: "int",
        cleanliness: "int",
        location: "int",
        check_in: "int",
        value: "int",
        review_date: "text"
    },
    key:["home_id", "id"]
});

// MyModel or models.instance.Person can now be used as the model instance
console.log(models.instance.reviews === MyModel);

// sync the schema definition with the cassandra database table
// if the schema has not changed, the callback will fire immediately
// otherwise express-cassandra will try to migrate the schema and fire the callback afterwards
MyModel.syncDB(function(err, result) {
    if (err) {
        throw err;
    }    
    // result == true if any database schema was updated
    console.log("schema change = ", result);
    // result == false if no schema change was detected in your models
})

// ("home_id","user_name","user_photo","review_text","accuracy","communication","cleanliness","location","check_in","value","review_date")

// copy "allReviews"."reviews" ("home_id","user_name","user_photo","review_text","accuracy","communication","cleanliness","location","check_in","value","review_date") from '/home/bradley/Desktop/Hackreactor/reviews_module/cassandra.csv' with delimiter = "|" and header = true;
// copy "allReviews"."reviews" ("home_id","user_name","user_photo","review_text","accuracy","communication","cleanliness","location","check_in","value","review_date") from "/home/bradley/Desktop/Hackreactor/reviews_module/cassandra.csv" with delimiter = "|" and header = true;
module.exports = MyModel;
