const Action = (Model) => {
    return (req, res, query) => {
        Model.remove(query, (err, data) => {
            if (err) return console.log('Error:', err);

            res.status(200).send('METHOD DELETE');
        });
    };
};
module.exports = Action;
