export default function ErrorFallback({ error }: { error: Error }): JSX.Element {
	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre style={{ color: 'red' }}>{error.message}</pre>
		</div>
	)
}