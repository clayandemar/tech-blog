
const router = require('express').Router();

const apiRoutes= require('./api');
const homeRoute = require('./homeRoute.js');
const dashboard = require('./comments-routes.js')

router.use('/', homeRoute);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboard);

module.exports = router;