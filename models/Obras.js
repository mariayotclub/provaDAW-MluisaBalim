import conexao from '../config/conexao.js'

const Obras = conexao.Schema({
    nomeColecao: {type:String, required:true},
    artista: {type: String, required: true},
    tipo: {type: String, required: true},
    descricao: {type:String, required: true},
    imagem: {type: Buffer, required: false,
    get:(valor) => {
        if (!valor) return null;
            return `data:image/jpeg;base64,${valor.toString('base64')}`;
    }
    }

})



export default conexao.model('Obras', Obras)