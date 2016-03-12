'use strict';

const url = require('url');

const handleResponse = (req, res, data, Model)=> {
    const fullUrl = url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: req.originalUrl
    });

    const response = {
        links: {
            self: fullUrl
        },
        data: []
    };

    if (Array.isArray(data)) {
        data.forEach((item)=> {
            let _data = {
                id: item._id
                , type: Model.collection.collectionName
                , attributes: item
                , links: {
                    self: fullUrl + '/' + item._id
                }
            };
            response.data.push(_data);
        });
    }
    else {
        if (data !== null && typeof  data !== 'undefined') {
            let _data = {
                id: data._id
                , type: Model.collection.collectionName
                , attributes: data
                , links: {
                    self: fullUrl.indexOf(data._id) > -1 || typeof  data._id === 'undefined' ? fullUrl : fullUrl + '/' + data._id
                }
            };
            response.data.push(_data);
        }
    }
    res.status(200).json(response);
};

module.exports = handleResponse;