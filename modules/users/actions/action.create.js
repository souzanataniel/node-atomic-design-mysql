const Action = (Model) => {
    return (req, res) => {
        var query = {};

        Model.create(query, (err, data) => {
            if (err) return console.log('Error:', err);

            res.status(200).send('METHOD CREATE');
        });
    };
};

module.exports = Action;