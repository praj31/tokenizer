import { useEffect, useState } from 'react'
import { FieldInputType } from '../types'

export const Field: React.FunctionComponent<FieldInputType> = ({
	title,
	generate,
}) => {
	const [copied, setCopied] = useState<boolean>(false)
	const [key, setKey] = useState<string>('')

	useEffect(() => {
		if (copied) {
			navigator.clipboard.writeText(key)
			setTimeout(() => {
				setCopied(false)
			}, 5000)
		}
	}, [copied])

	const handleGenerate = () => {
		setCopied(false)
		const keyValue = generate()
		setKey(keyValue)
	}

	return (
		<div className='field-wrapper'>
			<div className='field-header'>
				<p>{title}</p>
				<div className='field-action-button'>
					<button onClick={handleGenerate}>Generate</button>
				</div>
			</div>
			<div className='field-body'>
				<div>
					<input readOnly id='field-input' type='text' value={key} />
					<button
						className={
							copied ? 'field-button-active' : 'field-button'
						}
						disabled={!key}
						id='field-button'
						onClick={() => setCopied(true)}
					>
						{!copied && (
							<img
								src='https://super.so/icon/dark/clipboard.svg'
								alt='Clipboard Icon'
								id='clipboard-icon'
							/>
						)}
						{copied && <p className='copied-message'>Copied!</p>}
					</button>
				</div>
			</div>
		</div>
	)
}
