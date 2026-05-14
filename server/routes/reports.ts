import { Router } from 'express'; const r=Router();
r.get('/summary',(_,res)=>res.json({revenue:0,totalSales:0,topProducts:[],busiestCashier:'-'}));
r.get('/revenue',(_,res)=>res.json([]));
export default r;
