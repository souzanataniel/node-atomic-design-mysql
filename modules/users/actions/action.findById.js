const Action = (Model) => {
    return (req, res) => {
        const query = req.params.id;

        Model.findById(query, (err, data) => {
            if (err) res.status(400).json(err);

            res.status(200).json(data);
        });
    };
};
module.exports = Action;