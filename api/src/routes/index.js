const { Router } = require('express');
const {Cervezas} = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', async(req, res, next) => {
    try {
        const cervezas = await Cervezas.findAll()
        res.send(cervezas);
    }
    
    catch(error) {
        next(error)
        }
    
})

router.post('/',  (req, res, next) => {
    const { 
        nombre, 
        descripcion, 
        estilo, 
        cerveceria,
        precio,
        happy
        
              } = req.body;

     const cerveza =  Cervezas.create({
        nombre, 
        descripcion, 
        estilo, 
        cerveceria, 
        precio,
        happy
     })
     return res.send(cerveza)
})
router.put('/', async (req, res, next) =>{
   const { 
    nombre, 
    descripcion, 
    estilo, 
    cerveceria,
    precio,
    happy,
    id
            } = req.body
            try{
                Cervezas.update({
                    nombre, 
                    descripcion, 
                    estilo, 
                    cerveceria,
                    precio,
                    happy 
                }, 
                    {where:{
                        id:id
                }})
                res.send("Cerveza Modificada")
            }
         catch(error){
            next(error)
        }
});

router.delete('/:id', async(req, res, next) => {
    try{
        const {id} = req.params;
        const cerveza = await Cervezas.destroy({
        where:{
            id:id,
        }
        }) 
        res.send('se ha eliminado con exito')
    }catch(error){
        next(error)
    }
})


module.exports = router;
