module.exports = {
    create: (req, res) => {
        const {name, description, price, image_url} = req.body,
            db = req.app.get('db');

        db.create_product([name, description, price, image_url])
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send(err))
    },
    getOne: (req, res) => {
        const {id} = req.params,
            db = req.app.get('db');
        
        db.read_product(+id)
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err))        
    },
    getAll: (req, res) => {
        const db = req.app.get('db');
        
        db.read_products()
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send(err))        
    },
    update: (req, res) => {
        const {id} = req.params,
            {desc} = req.query,
            db = req.app.get('db'); 

        db.update_product({id, description: desc})
        .then(res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },
    delete: (req, res) => {
        const {id} = req.params,
            db = req.app.get('db');

        db.delete_product(id)
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send(err))
    }
}