import conexao from '../config/conexao.js'

const Celular = conexao.Schema({
    nome: {type:String, required:true},
    modelo:{type:String, required:true},
    sistema: {type:String, required:true},
    armazenamento:{type:String, required:true},
    preco: {type:String, required:true},
    fabricante:{type:String, required:true},
})

export default conexao.model('Celular',Celular)