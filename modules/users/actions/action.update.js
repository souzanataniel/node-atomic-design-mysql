const Action = (Model) => {
    return (req, res, query, mod) => {
        Model.update(query, mod, (err, data) => {
            if (err) return console.log('Error:', err);

            console.log(data);
        });
    };
};
module.exports = Action;