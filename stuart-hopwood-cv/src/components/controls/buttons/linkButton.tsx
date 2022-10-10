import { classes } from './linkButton.css'

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
	children: React.ReactNode
}

export function LinkButton({ children, href, target, className, ...props }: ButtonProps) {
	const classNames = `${classes.link} ${className}`
	return <a className={classNames} href={href} target={target} {...props}>
		{children}
	</a>
}

export default LinkButton