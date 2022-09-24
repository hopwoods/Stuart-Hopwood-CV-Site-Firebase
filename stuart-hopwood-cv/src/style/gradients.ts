type Gradients = {
	Gradient1: string
	Gradient2: string
}

export const gradients: Gradients = {
	Gradient1: `background: rgb(56,58,61);
  background: linear-gradient(
    45deg,
    rgba(37, 41, 52, 1) 0%,
    rgba(92, 17, 73, 1) 11%,
    rgba(221, 0, 63, 1) 40%,
    rgba(221, 0, 63, 1) 46%,
    rgba(167, 24, 104, 1) 65%,
    rgba(108, 15, 89, 1) 86%,
    rgba(37, 41, 52, 1) 100%
  );`,

	Gradient2: `background: rgb(40,40,44);
  background: linear-gradient(165deg, rgba(40,40,44,1) 65%, rgba(88,18,0,1) 86%, rgba(156,32,0,1) 100%);`,
}
