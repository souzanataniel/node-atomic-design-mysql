const handlerError = require('./../../../handlerError');
const handlerSuccess = require('./../../../handlerSuccess');

const Action = (Model) => {
    return (req, res) => {
        const query = req.params.id;

        Model.findAll().then((data) => {
            res.status(200).json(data);
        });
    };
};
module.exports = Action;