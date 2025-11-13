import conexao from '../config/conexao.js'

const Evento = conexao.Schema({
    data:{type:String, required:true},
    tipo: {type:String, required:true},
    nomeEvento:{type:String, required:true},
})

export default conexao.model('Evento',Evento)