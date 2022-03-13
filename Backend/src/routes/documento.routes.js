const {Router} = require('express')
const router2 = Router ()

const documentoCtrl = require('../controllers/documento_controller.js')

router2.get('/', documentoCtrl.getDocumentos)
router2.get('/:id', documentoCtrl.getDocumento)
router2.post('/', documentoCtrl.createDocumento)
router2.put('/:id', documentoCtrl.updateDocumento)
router2.delete('/:id', documentoCtrl.deleteDocumento)

module.exports = router2