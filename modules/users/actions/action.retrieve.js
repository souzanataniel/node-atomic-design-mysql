const Action = (Model) => {
    return (req, res) => {
        var query = {};

        Model.find(query, (err, data) => {
            if (err) return console.log('Error:', err);

            res.status(200).send('METHOD RETRIEVE');
        });
    };
};
module.exports = Action;