import conexao from '../config/conexao.js'

const Exposicao = conexao.Schema({
    artista:{type:String, required:true},
    tema: {type:String, required:true},
    nomeColecao:{type:String, required:true},
})

export default conexao.model('Exposicao',Exposicao)