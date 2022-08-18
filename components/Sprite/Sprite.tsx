interface Props {
	id: string
	width: number
	height: number
	onClick?: any
}

export function Sprite({ id, width, height, onClick = () => {} }: Props) {
	return (
		<svg width={`${width}px`} height={`${height}px`} onClick={onClick}>
			<use href={`/sprite.svg#${id}`} />
		</svg>
	)
}
