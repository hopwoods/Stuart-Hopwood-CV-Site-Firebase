import { Button as MuiButton, ButtonProps } from '@mui/material'
import { classes } from './button.css'


export const Button = <C extends React.ElementType>(props: ButtonProps<C, { component?: C }>) => {
	const classNames = `${classes.button} ${props.className}`
	return <MuiButton  {...props} className={classNames}>
		{props.children}
	</MuiButton>
}