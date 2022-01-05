import { FieldInputType } from '../types'
import { generateLongID, generateShortID, generateTokenSecret } from '../util'

export const fieldsDataArray: FieldInputType[] = [
	{
		title: 'Short ID',
		generate: generateShortID,
	},
	{
		title: 'Long ID',
		generate: generateLongID,
	},
	{
		title: 'Token Secret',
		generate: generateTokenSecret,
	},
]
