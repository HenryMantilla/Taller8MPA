const docuCtrl={}
const Documento = require('../models/documento_models')

docuCtrl.getDocumentos = async (req, res) => {
    const documentos = await Documento.findAll()
    res.json(documentos)
}

docuCtrl.getDocumento = async (req,res) => {
    const documento = await Documento.findByPk(req.params.id)
    res.send(documento)
}

docuCtrl.createDocumento = async (req,res) => {
    await Documento.create(req.body)
    res.send({message: 'Documento creado'})
}

docuCtrl.updateDocumento = async (req,res) => {
    await Documento.update(req.params.id, req.body)
    res.json({status: 'Documento actualizado'})
}

docuCtrl.deleteDocumento = async (req,res) => {
    Documento.destroy({where: {id: (req.params.id)}})
    res.json({status: 'Documento eliminado'})
}

module.exports = docuCtrl;
