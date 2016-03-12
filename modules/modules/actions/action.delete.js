const handlerError = require('./../../../handlerError');
const handlerSuccess = require('./../../../handlerSuccess');

const mongoose = require('mongoose');
const profileSchema = mongoose.model('profile');

const Action = (Model) => {
    return (req, res) => {
        const query = req.params.id;

        Model.findOne({_id: query}, (err, model) => {
            if (err) return handlerError(res, err);

            if (model) {
                model.remove((err, data)=> {
                    if (err) return handlerError(res, err);

                    return handlerSuccess(req, res, data, Model);
                });
            }
            return handlerSuccess(req, res, model, Model);
        });
    };
};
module.exports = Action;
