const handlerError = require('./../../../handlerError');
const handlerSuccess = require('./../../../handlerSuccess');

const Action = (Model) => {
    return (req, res) => {
        const query = req.params.id;
        console.log(query);
        const mod = req.body;

        Model.find({where: {id: query}}).then(function (model) {
            model.update(mod).then(function (modelUpdated) {
                res.send(modelUpdated);
            });
        });
    };
};
module.exports = Action;