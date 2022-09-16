import { keyframes, mergeStyleSets } from "@fluentui/merge-styles"

type ScrollDownIconProps = {
    color: string
}

export function ScrollDownIcon({ color }: ScrollDownIconProps) {

    const scroll = keyframes({
        '0%': {
            opacity: 1
        },
        '100%': {
            opacity: 0,
            transform: 'translateY(30px)'
        }
    })

    const classes = mergeStyleSets({
        icon: {
            width: '40px',
            height: '70px',
            marginLeft: '-20px',
            top: '50%',
            marginTop: '-35px',
            boxShadow: `inset 0 0 0 2px ${color}`,
            borderRadius: '25px',
            position: 'absolute',
            left: '50%',
            ':before': {
                content: "",
                width: '8px',
                height: '12px',
                background: color,
                marginLeft: '-4px',
                top: '8px',
                borderRadius: '4px',
                animationDuration: '1.5s',
                animationTterationCount: 'infinite',
                animationName: scroll,
                position: 'absolute',
                left: '50%'
            }
        }
    })

    return <div className={`icon-scroll ${classes.icon}`}></div>
}
