const Action = (Model) => {
    return (req, res) => {
        const query = req.body;

        Model.find(query, (err, data) => {
            if (err) res.status(400).json(err);

            res.status(200).json(data);
        });
    };
};

module.exports = Action;