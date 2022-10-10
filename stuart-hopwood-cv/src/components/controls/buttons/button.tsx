import { classes } from './button.css'

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
	children?: React.ReactNode
	size?: 'sm' | 'md'
}

export function Button({ size = 'md', children, className, ...props }: ButtonProps) {
	const sizeClass = size === 'sm' ? classes.buttonSmall : undefined
	const classNames = `${classes.button} ${className} ${sizeClass}`
	return <button className={classNames} {...props}>
		{children}
	</button>
}

export default Button