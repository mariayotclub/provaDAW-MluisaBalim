
import Celular from '../models/Celular.js'

export default class CelularController{

    constructor(caminhoBase='celular/'){
        this.caminhoBase = caminhoBase
    
        this.openAdd = async(req, res)=>{
            res.render(caminhoBase + "add")
        }
        this.add = async(req, res)=>{
           
            await Celular.create({
                nome: req.body.nome,
                fabricante: req.body.fabricante,
                modelo: req.body.modelo,
                preco: req.body.preco,
                armazenamento: req.body.armazenamento,
                sistema: req.body.sistema
            });
            res.redirect('/'+caminhoBase + 'add');
        }
        this.list = async(req, res)=>{
            const resultado = await Celular.find({})
            res.render(caminhoBase + 'lst', {Celulares:resultado})
        }
        this.find = async(req, res)=>{
            const filtro = req.body.filtro;
            const resultado = await 
            Celular.find({ nome: { $regex: filtro,
                $options: "i" }})
            res.render(caminhoBase + 'lst', {Celulares:resultado})
        }

     

         this.openEdt = async(req, res)=>{
            const id = req.params.id
            console.log(id)
            const celular = await Celular.findById(id) 
            console.log(celular)
            res.render(caminhoBase + "edt", 
                {Celular:celular})
        }


        this.edt = async(req, res)=>{
        await Celular.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/'+caminhoBase + 'lst');
        
        }

         this.del = async(req, res)=>{
        await Celular.findByIdAndDelete(req.params.id)
        res.redirect('/'+caminhoBase + 'lst');
        
        }

    }
}