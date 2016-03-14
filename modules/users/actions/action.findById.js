const handlerError = require('./../../../handlerError');
const handlerSuccess = require('./../../../handlerSuccess');

const Action = (Model) => {
    return (req, res) => {
        const query = req.params.id;

        res.send('Find By Id');
    };
};
module.exports = Action;