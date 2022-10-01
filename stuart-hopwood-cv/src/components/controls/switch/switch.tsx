import * as SwitchPrimitive from '@radix-ui/react-switch'

export function Switch({ ...props }: SwitchPrimitive.SwitchProps) {
	return <SwitchPrimitive.Root {...props}>
		<SwitchPrimitive.Thumb />
	</SwitchPrimitive.Root>
}

