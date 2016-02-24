module.exports = {
    validator: (email) => {
        const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(email);
    }, message: 'Insert a Valid E-mail'
};