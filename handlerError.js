const handleError = (res, err)=> {
    console.log(err);

    const error = {
        errors: [{
            status: 400
            , source: {
                pointer: {
                    err
                }
            }
            , title: err.name
            , detail: err.message
        }]
    };
    res.status(400).json(error);
};

module.exports = handleError;