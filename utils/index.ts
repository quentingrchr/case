export function formatPrice(price: number): string {
  const res = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  })
  return res.format(price)
}

export function formatSurface(surface: number): string {
  return `${surface} m²`
}

export function isInRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max
}
