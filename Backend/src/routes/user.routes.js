const {Router} = require('express')
const router = Router ()

const userCtrl = require('../controllers/usuario_controller.js')

router.get('/', userCtrl.getUsuarios)
router.get('/:id', userCtrl.getUsuario)
router.post('/', userCtrl.createUsuario)
router.put('/:id', userCtrl.updateUsuario)
router.delete('/:id', userCtrl.deleteUsuario)

module.exports = router