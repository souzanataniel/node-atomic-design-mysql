const Action = (Model) => {
    return (req, res) => {
        const query = req.params.id;
        const mod = req.body;

        Model.update({_id: query}, {$set: mod}, (err, data) => {
            if (err) res.status(400).json(err);

            res.status(200).json(data);
        });
    };
};
module.exports = Action;