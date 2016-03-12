const handlerError = require('./../../../handlerError');
const handlerSuccess = require('./../../../handlerSuccess');

const Action = (Model) => {
    return (req, res) => {
        const query = req.params.id;
        Model.findById({_id: query}, (err, data) => {
            if (err) return handlerError(res, err);

            return handlerSuccess(req, res, data, Model);
        });
    };
};
module.exports = Action;