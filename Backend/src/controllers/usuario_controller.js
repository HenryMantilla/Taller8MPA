const userCtrl= {}
const Usuario = require('../models/usuario_models')

userCtrl.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.findAll()
    res.json(usuarios)
}

userCtrl.getUsuario = async (req,res) => {
    const usuario= await Usuario.findByPk(req.params.id)
    res.send(usuario)
}

userCtrl.createUsuario = async (req,res) => {
    await Usuario.create(req.body)
    res.send({message: 'Usuario creado'})
}

userCtrl.updateUsuario = async (req,res) => {
    await Usuario.update(req.params.id, req.body)
    res.json({status: 'Usuario actualizado'})
}
userCtrl.deleteUsuario = async (req,res) => {
    Usuario.destroy({where: {id: (req.params.id)}})
    res.json({status: 'Usuario eliminado'})
}

module.exports = userCtrl;

