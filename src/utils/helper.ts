export default function truncateText(text: string, length: number): string {
  if (text.length > length) {
    return text.substring(0, length) + "...";
  } else {
    return text;
  }
}
