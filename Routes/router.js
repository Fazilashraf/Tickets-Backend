const express = require('express')

const userController = require('../Controllers/userController')
const movieController = require('../Controllers/movieController')
const eventController = require('../Controllers/eventController')
const sportController = require('../Controllers/sportController')
const testimonyController = require('../Controllers/testimonyController')
const mBookingController = require('../Controllers/mBookingController')
const eBookingController = require('../Controllers/eBookingController')
const sBookingController = require('../Controllers/sBookingController')
const organiserController = require('../Controllers/organiserController')

const router = express.Router()

router.post('/api/register',userController.registerAPI)

router.post('/api/login',userController.loginAPI)

router.post('/api/addMovie',movieController.addMovieAPI)

router.get('/api/getAllMovies',movieController.getMoviesAPI)

router.get('/api/getAMovie/:id',movieController.getAMovieAPI)

router.post('/api/addReviews/:id',movieController.addReviewAPI)

router.post('/api/addEvent',eventController.addEventAPI)

router.get('/api/getAllEvents',eventController.getEventsAPI)

router.get('/api/getAEvent/:id',eventController.getAEventAPI)

router.post('/api/addSport',sportController.addSportAPI)

router.get('/api/getAllSports',sportController.getSportsAPI)

router.get('/api/getASport/:id',sportController.getASportAPI)

router.post('/api/addTestimony',testimonyController.addTestimony)

router.post('/api/addMBookings',mBookingController.addMovieBookings)

router.post('/api/addEBookings',eBookingController.addEventBookings)

router.post('/api/addSBookings',sBookingController.addSportBookings)

router.get('/api/getAllMovieBookings',mBookingController.getMovieBookingsAPI)

router.get('/api/getAllEventBookings',eBookingController.getEventBookingsAPI)

router.get('/api/getAllSportBookings',sBookingController.getSportBookingsAPI)

router.get('/api/getHomeMovies',movieController.getHomeMovieAPI)

router.get('/api/getHomeEvents',eventController.getHomeEventsAPI)

router.get('/api/getHomeSports',sportController.getHomeSportsAPI)

router.post('/api/organiser/register',organiserController.organiserRegisterAPI)

router.post('/api/organiser/login',organiserController.organiserLoginAPI)

router.put('/api/editMovie/:id',movieController.editMovieAPI)

router.delete('/api/deleteMovie/:id',movieController.DeleteMovieAPI)

router.put('/api/editEvent/:id',eventController.editEventAPI)

router.delete('/api/deleteEvent/:id',eventController.DeleteEventAPI)

router.put('/api/editSport/:id',sportController.editSportAPI)

router.delete('/api/deleteSport/:id',sportController.DeleteSportAPI)

router.get('/api/reviews',movieController.getAllReviewsAPI)

router.delete('/api/deleteReview/:movieId/:reviewId', movieController.deleteReviewAPI);

router.get('/api/getAllUsers',userController.getAllUsersAPI)

router.get('/api/getAllOrganisers',organiserController.getAllOrganisersAPI)

router.get('/api/getAllTestimonies',testimonyController.getAllTestimoniesAPI)

router.delete('/api/deleteUser/:id',userController.deleteUserAPI)

router.delete('/api/deleteOrganiser/:id',organiserController.deleteOrganiserAPI)

module.exports = router