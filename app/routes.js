//create a new express router
const express = require('express');
const router = express.Router();
const mainController = require('./controllers/main.controller');
const eventsController = require('./controllers/events.controller');
//export router

module.exports = router;

//define routers
//main routes
router.get('/', mainController.showHome);
//event routes
router.get('/events',       eventsController.showEvents);

// seed events
router.get('/events/seed', eventsController.seedEvents);

//create events
router.get('/events/create',  eventsController.showCreate);
router.post('/events/create', eventsController.processCreate);

//edit events
router.get('/events/:slug/edit', eventsController.showEdit);
router.post('/events/:slug',     eventsController.processEdit)
//delete events
router.get('/events/:slug/delete', eventsController.deleteEvent);




//single event route slug cant be before seed
router.get('/events/:slug', eventsController.showSingle);
