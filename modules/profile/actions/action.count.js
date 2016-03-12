const handlerError = require('./../../../handlerError');
const handlerSuccess = require('./../../../handlerSuccess');

const Action = (Model) => {
    return (req, res) => {
        Model.count({}, (err, data) => {
            if (err) return handlerError(res, err);

            const countData = {
                count: data
            };

            return handlerSuccess(req, res, countData, Model);
        });
    };
};
module.exports = Action;