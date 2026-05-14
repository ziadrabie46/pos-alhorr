import { Request, Response, NextFunction } from 'express';
export const isAuthenticated = (req: Request,res: Response,next: NextFunction)=> req.isAuthenticated() ? next() : res.status(401).json({message:'غير مصرح'});
export const isAdmin = (req: Request,res: Response,next: NextFunction)=> (req.user as any)?.role==='admin' ? next() : res.status(403).json({message:'للادمن فقط'});
