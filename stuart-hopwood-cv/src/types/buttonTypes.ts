import { ButtonProps } from '../components/controls/buttons/button'

export type SkillButtonProps = ButtonProps & {
	onClickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

