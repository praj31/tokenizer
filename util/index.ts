import { randomBytes } from 'crypto'

export const generateShortID = () => randomBytes(4).toString('hex')
export const generateLongID = () => randomBytes(16).toString('hex')
export const generateTokenSecret = () => randomBytes(64).toString('hex')
