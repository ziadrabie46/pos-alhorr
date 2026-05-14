import { Router } from 'express'; const r=Router();
let products:any[]=[]; let id=1;
r.get('/',(_,res)=>res.json(products.filter(p=>p.isActive)));
r.post('/',(req,res)=>{const p={id:id++,isActive:true,...req.body};products.push(p);res.status(201).json(p);});
r.put('/:id',(req,res)=>{products=products.map(p=>p.id===+req.params.id?{...p,...req.body}:p);res.json(products.find(p=>p.id===+req.params.id));});
r.delete('/:id',(req,res)=>{products=products.map(p=>p.id===+req.params.id?{...p,isActive:false}:p);res.json({ok:true});});
export default r;
