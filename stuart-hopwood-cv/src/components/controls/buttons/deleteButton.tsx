import IconButton from '@mui/material/IconButton'
import { FaTrashAlt } from 'react-icons/fa'
import { SkillButtonProps } from '../../../types'

//const IconButton = React.lazy(() => import('@mui/material/IconButton'))

export default function DeleteButton({ color, size, onClickHandler, cssStyle }: SkillButtonProps) {
	return <IconButton className={cssStyle} color={color} size={size} aria-label="Edit Skill" onClick={onClickHandler}>
		<FaTrashAlt />
	</IconButton>
}