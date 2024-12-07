/**
 * Converts a number to a readable currency format.
 * @param value - The numeric value to format.
 * @param locale - The locale string for formatting (e.g., 'en-US').
 * @param currency - The currency code (e.g., 'USD', 'EUR').
 * @returns A formatted currency string.
 */

export function formatMoney(
  value: number,
  locale: string = "en-US",
  currency: string = "USD"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(value);
}
