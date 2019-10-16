
module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory()
        .then(dbResponse => res.status(200).send(dbResponse))
        .catch(err => {
            res.status(500).send({errormessage: 'Something went Wrong!'})
        })

    },



    createProduct: (req, res) => {
        const db = req.app.get('db')
        const {img, name, price} = req.body

        db.create_product([img, name, price])
        .then(product => res.status(200).send(product))
        .catch(err => {
            res.status(500).send({errormessage: 'Something went Wrong!'})
        })
        
    },






    
}