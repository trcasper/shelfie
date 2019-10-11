
module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory()
        .then(dbResponse => res.status(200).send(dbResponse))
        .catch(err => {
            res.status(500).send({errormessage: 'Something went Wrong!'})
        })

    
        

    },




    //     const db = req.app.get('db')

    //     db.get_product()
    //     .then(dbResponse => res.status(200).send(dbResponse))
    //     .catch(err => {
    //         res.status(500).send({errormessage: 'Something went Wrong!'})
    //     })

    // },
    
    // addProduct: (req, res) => {
    //     // const db = req.app.get('db')
    //     const {name, price, img} = req.body

    //     db.add_product([name, price, img])
    //     .then(data => res.status(200).send(data))
    //     .catch(err => {
    //         res.status(500).send({errormessage: 'Something went Wrong!'})
    //     })
        
    // },

    // updateProduct: (req, res) => {
    //     const db = req.app.get('db')
    //     const {id} = req.params
    //     const {topic, text} = req.body
    //     db.update_product([id, name, price, img]) 
    //         .then(data => res.status(200).send(data))
        

    // }
    
}