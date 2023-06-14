//? Define function responsible for copying to the clipboard
export function copyToClickboard(value: string) {
  navigator.clipboard.writeText(value);
}
