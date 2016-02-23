const Connection = (db) => {
    return {
        callbacks: {
            error: (err) => {
                return console.log('Connection Error.', err);
            }
            , connected: (err)  => {
                return console.log('MongoDB Connected.');
            }
            , disconnected: (err) => {
                return console.log('MongoDB Disconnected.');
            }
        }
        , on: (event, callback)  => {
            db.on(event, callback);
            return db;
        }
    };
};

module.exports = Connection;