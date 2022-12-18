let users = require('../db/users.json')

exports.index = (req, res) => {
    res.render('index')
}

exports.chapter3 = (req, res) => {
    res.render('chapter3')
}

exports.chapter4 = (req, res) => {
    res.render('chapter4')
}

exports.signup = (req, res) => {
    res.render('signup')
}

exports.getAll = (req, res) => {
    res.json(users)
}

exports.show = (req, res) => {
    const { id } = req.params

    const user = users.find(i => i.id == id)
    res.json(user)
}

exports.signUp = (req, res) => {
    const {username, password} = req.body

    const user = {
        id: users[users.length - 1].id + 1,
        username,
        password
    }

    users.push(user)

    res.redirect('/chapter4')
}

