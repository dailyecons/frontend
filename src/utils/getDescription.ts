export default function getDescription(content: string) {
  return content.split(' ').slice(0, 20).join(' ') + '...';
}
