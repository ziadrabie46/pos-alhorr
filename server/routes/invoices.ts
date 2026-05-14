import { Router } from 'express'; const r=Router(); let invoices:any[]=[]; let id=1;
r.get('/',(_,res)=>res.json(invoices)); r.get('/:id',(req,res)=>res.json(invoices.find(i=>i.id===+req.params.id)));
r.post('/',(req,res)=>{const inv={id:id++,createdAt:new Date().toISOString(),...req.body};invoices.unshift(inv);res.status(201).json(inv);});
export default r;
