import { IconButton } from '@mui/material'
import { FaTrashAlt } from 'react-icons/fa'
import { SkillButtonProps } from '../../../types'

export function DeleteButton({ color, size, onClickHandler, cssStyle }: SkillButtonProps) {
	return (
		<IconButton className={cssStyle} color={color} size={size} aria-label="Edit Skill" onClick={onClickHandler}>
			<FaTrashAlt />
		</IconButton>
	)
}