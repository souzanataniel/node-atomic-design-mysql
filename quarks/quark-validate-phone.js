module.exports = {
    validator: function (v) {
        return /^[1-9]{2}\-[2-9][0-9]{7,8}$/.test(v);
    },
    message: 'Value {VALUE} is not permitted!'
};