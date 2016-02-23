const Action = (Model) => {
    return (req, res, query) => {
        Model.remove(query, (err, data) => {
            if (err) return console.log('Error:', err);

            console.log(data);
        });
    };
};
module.exports = Action;
