//? Define function responsible for copying to the clipboard
export function copyToClipboard(value: string) {
  navigator.clipboard.writeText(value);
}
