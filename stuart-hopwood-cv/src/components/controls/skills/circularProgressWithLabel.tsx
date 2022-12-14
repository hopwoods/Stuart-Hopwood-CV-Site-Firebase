import { Box } from '@mui/material'
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'

// const Box = React.lazy(() => import('@mui/material/Box'))
// const CircularProgress = React.lazy(() => import('@mui/material/CircularProgress'))

export default function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
	return <Box position="relative" display="inline-flex">
		<CircularProgress variant="determinate" {...props} />
		<Box
			top={0}
			left={0}
			bottom={0}
			right={0}
			position="absolute"
			display="flex"
			alignItems="center"
			justifyContent="center"
			style={{
				width: '40px'
			}}
		>
			<Typography variant="caption" component="div" color="textSecondary">
				{`${Math.round(props.value)}%`}
			</Typography>
		</Box>
	</Box>
}
