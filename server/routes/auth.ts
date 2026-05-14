import { Router } from 'express';
import rateLimit from 'express-rate-limit';
const r = Router();
const limiter = rateLimit({ windowMs: 60_000, max: 10 });
r.post('/login', limiter, (req,res,next)=>{ req.login(req.body, (err)=> err?next(err):res.json(req.user)); });
r.post('/logout',(req,res)=>req.logout(()=>res.json({ok:true})));
r.get('/user',(req,res)=>res.json(req.user ?? null));
export default r;
