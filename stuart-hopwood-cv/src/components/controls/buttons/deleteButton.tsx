import { FaTrashAlt } from 'react-icons/fa'
import { SkillButtonProps } from '../../../types'
import Button from './button'


export default function DeleteButton({ size, onClickHandler }: SkillButtonProps) {
	return <Button size={size} aria-label="Edit Skill" onClick={onClickHandler}>
		<FaTrashAlt />
	</Button>
}