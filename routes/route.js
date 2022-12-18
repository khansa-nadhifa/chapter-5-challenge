const express = require('express')
const route = express.Router()
const postController = require('../controllers/postController')

route.get('/', postController.index)
route.get('/chapter3', postController.chapter3)
route.post('/chapter3', postController.signUp)
route.get('/chapter4', postController.chapter4)
route.get('/api/users', postController.getAll)
route.get('/api/users/:id', postController.show)



module.exports = route