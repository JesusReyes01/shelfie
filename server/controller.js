module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')
        

        db
        .getInventory()
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err))
    },
    addProduct: (req, res) => {
        console.log(req.body)
        const{product} = req.body;
        const db = req.app.get('db')
        
        db
        .addProduct({lame: product.name, price: product.price, img: product.img })
        .then(product => res.status(200).send('fake string'))
        .catch(err => res.status(500).send(err))

    }
}