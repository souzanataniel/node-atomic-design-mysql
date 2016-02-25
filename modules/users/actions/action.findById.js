const queryBuild = (req, res)=> {
    return {};
};

const Action = (Model) => {
    return (req, res) => {
        const query = queryBuild(req, res);

        Model.find(query, (err, data) => {
            if (err) return console.log('Error:', err);

            res.status(200).send('METHOD FIND BY ID');
        });
    };
};
module.exports = Action;