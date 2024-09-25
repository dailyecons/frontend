export default function getDescription(content: string, title: string) {
  return content.slice(0, title.length < 38 ? 160 : 135) + '...';
}
