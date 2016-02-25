const queryBuild = (req, res)=> {
    return {
        login: req.body.login
        , password: req.body.password
        , email: req.body.email
    };
};

const Action = (Model) => {
    return (req, res) => {
        const query = queryBuild(req, res);

        Model.create(query, (err, data) => {
            if (err) {
                res.status(400).json({
                    error: err.errmsg
                });
            }

            res.status(200).send(data);
        });
    };
};

module.exports = Action;