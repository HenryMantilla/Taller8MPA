const resideCtrl={}
const Residencia = require('../models/residencia_models')

resideCtrl.getResidencias = async (req, res) => {
    const residencias = await Residencia.findAll()
    res.json(residencias)
}

resideCtrl.getResidencia = async (req, res) => {
    const residencia = await Residencia.findByPk(req.param.id)
    res.send(residencia)
}

resideCtrl.createResidencia = async (req, res) => {
    await Residencia.create(req.body)
    res.send({message: 'Residencia creada'})
}

resideCtrl.updateResidencia = async (req, res) => {
    await Residencia.update(req.params.id, req.body)
    res.json({status: 'Residencia actualizada'})
}

resideCtrl.deleteResidencia = async (req, res) => {
    Residencia.destroy({where: {id: (req.params.id)}})
    res.json({status: 'Residencia eliminada'})
}

module.exports = resideCtrl;