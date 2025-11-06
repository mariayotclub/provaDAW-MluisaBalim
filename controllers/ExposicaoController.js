
import Exposicao from '../models/Exposicao.js'

export default class ExposicaoController{

    constructor(caminhoBase='exposicao/'){
        this.caminhoBase = caminhoBase
    
        this.openAdd = async(req, res)=>{
            res.render(caminhoBase + "add")
        }
        this.add = async(req, res)=>{
           
            await Exposicao.create({
                tipo: req.body.tipo,
                artista: req.body.artista,
                tema: req.body.tema,
                nomeColecao: req.body.nomeColecao,
            });
            res.redirect('/'+caminhoBase + 'add');
        }
        this.list = async(req, res)=>{
            const resultado = await Exposicao.find({})
            res.render(caminhoBase + 'lst', {Exposicoes:resultado})
        }
        this.find = async(req, res)=>{
            const filtro = req.body.filtro;
            const resultado = await 
            Exposicao.find({ nome: { $regex: filtro,
                $options: "i" }})
            res.render(caminhoBase + 'lst', {Exposicoes:resultado})
        }

     

         this.openEdt = async(req, res)=>{
            const id = req.params.id
            console.log(id)
            const exposicao = await Exposicao.findById(id) 
            console.log(exposicao)
            res.render(caminhoBase + "edt", 
                {Exposicao:exposicao})
        }


        this.edt = async(req, res)=>{
        await Exposicao.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/'+caminhoBase + 'lst');
        
        }

         this.del = async(req, res)=>{
        await Exposicao.findByIdAndDelete(req.params.id)
        res.redirect('/'+caminhoBase + 'lst');
        
        }

    }
}