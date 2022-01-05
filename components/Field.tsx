import { useEffect, useState } from 'react'

interface Props {
	title: string
}

export const Field: React.FunctionComponent<Props> = ({ title }) => {
	const [copied, setCopied] = useState<boolean>(false)

	useEffect(() => {
		if (copied) {
			setTimeout(() => {
				setCopied(false)
			}, 5000)
		}
	}, [copied])

	const generate = () => {
		setCopied(false)
	}

	return (
		<div className='field-wrapper'>
			<div className='field-header'>
				<p>{title}</p>
				<div className='field-action-button'>
					<button onClick={generate}>Generate</button>
				</div>
			</div>
			<div className='field-body'>
				<div>
					<input id='field-input' type='text' />
					<button
						className={
							copied ? 'field-button-active' : 'field-button'
						}
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
