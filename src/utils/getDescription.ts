export default function getDescription(content: string, title: string) {
  return content.split(' ').slice(0, title.length < 38 ? 30 : 20).join(' ') + '...';
}
