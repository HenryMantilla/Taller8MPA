const {Router} = require('express')
const router3 = Router ()

const residenciaCtrl = require('../controllers/residencia_controller.js')

router3.get('/', residenciaCtrl.getResidencia)
router3.get('/:id', residenciaCtrl.getResidencia)
router3.post('/', residenciaCtrl.createResidencia)
router3.put('/:id', residenciaCtrl.updateResidencia)
router3.delete('/:id', residenciaCtrl.deleteResidencia)

module.exports = router3