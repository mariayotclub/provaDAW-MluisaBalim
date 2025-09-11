
import Fabricante from '../models/Fabricante.js'

export default class FabricanteController{

    constructor(caminhoBase='fabricante/'){
        this.caminhoBase = caminhoBase
    
        this.openAdd = async(req, res)=>{
            res.render(caminhoBase + "add")
        }
        this.add = async(req, res)=>{
           
            await Fabricante.create({
                nome: req.body.nome,
                anofundacao:req.body.anofundacao
            });
            res.redirect('/'+caminhoBase + 'add');
        }
        this.list = async(req, res)=>{
            const resultado = await Fabricante.find({})
            res.render(caminhoBase + 'lst', {Fabricantes:resultado})
        }
        this.find = async(req, res)=>{
            const filtro = req.body.filtro;
            const resultado = await 
            Fabricante.find({ nome: { $regex: filtro,
                $options: "i" }})
            res.render(caminhoBase + 'lst', {Fabricantes:resultado})
        }

     

         this.openEdt = async(req, res)=>{
            const id = req.params.id
            console.log(id)
            const fabricante = await Fabricante.findById(id) 
            console.log(fabricante)
            res.render(caminhoBase + "edt", 
                {Fabricante:fabricante})
        }


        this.edt = async(req, res)=>{
        await Fabricante.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/'+caminhoBase + 'lst');
        
        }

         this.del = async(req, res)=>{
        await Fabricante.findByIdAndDelete(req.params.id)
        res.redirect('/'+caminhoBase + 'lst');
        
        }

    }
}