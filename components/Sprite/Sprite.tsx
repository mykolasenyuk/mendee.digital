import { FC } from 'react'

interface Props {
	id: string
	width: number
	height: number
	onClick?: any
}

const Sprite: FC<Props> = ({ id, width, height, onClick = () => {} }) => {
	return (
		<svg width={`${width}px`} height={`${height}px`} onClick={onClick}>
			<use href={`/sprite.svg#${id}`} />
		</svg>
	)
}

export default Sprite
