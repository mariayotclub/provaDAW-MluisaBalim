import conexao from '../config/conexao.js'

const Obras = conexao.Schema({
    nomeColecao: {type:String, required:true},
    artista: {type: String, required: true},
    tipo: {type: String, required: true},
    descricao: {type:String, required: true}

})

export default conexao.model('Obras', Obras)