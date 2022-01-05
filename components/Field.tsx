interface Props {
	title: string
}

export const Field: React.FunctionComponent<Props> = ({ title }) => {
	return (
		<div className='field-wrapper'>
			<div className='field-header'>
				<p>{title}</p>
				<div className='field-action-button'>
					<button>Generate</button>
				</div>
			</div>
			<div className='field-body'>
				<div>
					<input type='text' />
					<button>
						<img
							src='https://super.so/icon/dark/clipboard.svg'
							alt='Clipboard Icon'
							id='clipboard-icon'
						/>
					</button>
				</div>
			</div>
		</div>
	)
}
