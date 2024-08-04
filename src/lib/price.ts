export default function formatPrice(price: number) {
  const roundedPrice = Math.floor(price / 10) * 10;
  return roundedPrice.toLocaleString();
}
