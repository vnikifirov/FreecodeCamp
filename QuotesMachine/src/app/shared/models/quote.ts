
export class Quote {
  title: string;
  content: string;

  constructor({
    title,
    content
  }:
  {
    title ?: string,
    content?: string
  }) {
    this.title = title || '';
    this.content = content || '';
  }
}
