const handlerError = require('./../../../handlerError');
const handlerSuccess = require('./../../../handlerSuccess');

const customerModel = require('./../../customers/index').model;

const Action = (Model) => {
    return (req, res) => {
        const query = req.params.id;
        console.log(query);

        const array = [query];

        const children = [];

        customerModel.findOne({_id: query}, (err, data) => {
            if (err) return handlerError(res, err);

            for (var i = 0, len = data.customers.length; i < len; i++) {
                array.push(data.customers[i]);

                children.push(data.customers[i]);
            }
        });

        Model.find({owner: {$in: children}}, (err, data) => {
            if (err) return handlerError(res, err);

            return handlerSuccess(req, res, data, Model);
        });
    };
};
module.exports = Action;