const Action = (Model) => {
    return (req, res, query) => {
        Model.create(query, (err, data) => {
            if (err) return console.log('Error:', err);

            console.log(data);
        });
    };
};

module.exports = Action;