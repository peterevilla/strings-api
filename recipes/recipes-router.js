const express = require('express')
const Recipes = require('./recipes-model')
const router = express.Router()

//GET ALL RECIPES
router.get('/', (req, res) => {
    Recipes.find()
    .then(recipes => {
        res.json(recipes)
    })
    .catch(err => {
        res.status(500).json({message: 'Error retrieving data'})
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    Recipes.findById(id)
    .then(recipe => {
        res.status(201).json(recipe)
    })
    .catch(err => {
        res.status(500).json({message: 'error'})
    })
})

router.post('/', (req, res) => {
    Recipes.add(req.body)
    .then(recipes => {
        res.status(201).json({message: 'New recipe Added!'})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'Error posting data'})
    })
})

router.delete('/:id', (req, res) => {
    Recipes.remove(req.params.id)
    .then(recipe => {
        res.status(201).json({message: 'Recipe was deleted'})
    })
    .catch(err => {
        res.status(500).json({message: 'Error deleting'})
    })
})


router.put('/:id', (req, res) => {
    Recipes.update(req.params.id, req.body)
    .where(recipe => {
        res.status(201).json({message: 'Recipe was updated'})
    })
    .catch(error => {
        res.status(500).json({message: 'error'})
    })
})






module.exports = router;