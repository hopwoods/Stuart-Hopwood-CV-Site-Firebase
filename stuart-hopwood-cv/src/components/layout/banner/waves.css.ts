import { keyframes, mergeStyleSets } from "@fluentui/merge-styles"


const moveForever = keyframes({
    '0%': {
        transform: 'translate3d(-90px,0,0)'
    },
    '100%': {
        transform: 'translate3d(85px,0,0)'
    }
})

export const classes = mergeStyleSets({
    waveContainer: {
        alignSelf: 'end',
        justifySelf: 'stretch',
        position: 'relative',
        top: '-6px'
    },
    waves: {
        position: 'relative',
        width: '100%',
        height: '15vh',
        marginBottom: '-7px',/*Fix for safari gap*/
        minHeight: '100px',
        maxHeight: '150px',
        alignSelf: 'end'
    },
    parallax: {
        '> use': {
            animation: moveForever,
            animationDuration: '25s',
            animationTimingFunction: 'cubic- bezier(.55, .5, .45, .5)',
            animationIterationCount: 'infinite',
        },
        '> use:nth-child(1)': {
            animationDelay: '-2s',
            animationDuration: '7s'
        },
        '> use:nth-child(2)': {
            animationDelay: '-3s',
            animationDuration: '10s'
        },
        '> use:nth-child(3)': {
            animationDelay: '-4s',
            animationDuration: '13s'
        },
        '> use:nth-child(4)': {
            animationDelay: '-5s',
            animationDuration: '20s'
        },

    }

})




//Shrinking for mobile
// @media(max-width: 768px) {
//   .waves {
//         height: 40px
//         min-height: 40px
//     }
//   .content {
//         height: 30vh
//     }
//   h1 {
//         font-size: 24px
//     }
// 