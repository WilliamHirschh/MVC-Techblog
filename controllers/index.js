//Whole page is just routes and connections for the website to work
//and know where to send and recieve
const router = require('express').Router();


const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');



router.use('/', homeRoutes);
router.use('/api', apiRoutes);



module.exports = router;