const handlerError = require('./../../../handlerError');
const handlerSuccess = require('./../../../handlerSuccess');

const Action = (Model) => {
    return (req, res) => {
        const query = req.body;

        Model.create(query).then((model)=> {
            res.send(model);
        }, (error) => {
            res.send(error);
        });
    };
};
module.exports = Action;