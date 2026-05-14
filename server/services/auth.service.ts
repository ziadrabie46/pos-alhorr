import { randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';
export const hashPassword = (password: string) => { const salt = randomBytes(16).toString('hex'); return `${salt}:${scryptSync(password, salt, 64).toString('hex')}`; };
export const verifyPassword = (password: string, stored: string) => { const [salt, hash] = stored.split(':'); const computed = scryptSync(password, salt, 64); return timingSafeEqual(Buffer.from(hash, 'hex'), computed); };
