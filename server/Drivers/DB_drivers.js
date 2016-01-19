/**
 * Created by Rajith Hasith on 19/01/2016.
 */
driver = new MongoInternals.RemoteCollectionDriver(
    "mongodb://40.84.225.144:28000/N_movies",
    {
        MONGO_OPLOG_URL: "mongodb://40.84.225.144:28000/local"
    });