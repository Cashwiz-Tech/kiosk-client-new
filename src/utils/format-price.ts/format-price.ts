export const formatPriceDot = (v: number) => {
	return (Math.round(v * 100) / 100).toFixed(2)
}

export const formatPriceComma = (v: number) => {
	return v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
