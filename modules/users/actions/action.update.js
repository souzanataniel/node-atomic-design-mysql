const Action = (Model) => {
    return (req, res) => {
        const query = {};
        const mod = {};
        Model.update(query, mod, (err, data) => {
            if (err) return console.log('Error:', err);

            res.status(200).send('METHOD UPDATE');
        });
    };
};
module.exports = Action;