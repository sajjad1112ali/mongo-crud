const Student = require('../models/student.model');

//Simple version, without validation or sanitation
publicRoutes = {
    test: function (req, res) {
        res.render('index');
    },
    login: function (req, res) {
        res.send('LOGIN VIEW!');
    },
}
module.exports = publicRoutes;
