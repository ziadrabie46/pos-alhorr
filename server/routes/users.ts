import { Router } from 'express'; const r=Router(); let users:any[]=[]; let id=2;
r.get('/',(_,res)=>res.json(users));
r.post('/',(req,res)=>{const u={id:id++,isActive:true,...req.body};users.push(u);res.status(201).json(u);});
r.put('/:id',(req,res)=>{users=users.map(u=>u.id===+req.params.id?{...u,...req.body}:u);res.json(users.find(u=>u.id===+req.params.id));});
r.patch('/:id/toggle',(req,res)=>{users=users.map(u=>u.id===+req.params.id?{...u,isActive:!u.isActive}:u);res.json(users.find(u=>u.id===+req.params.id));});
export default r;
