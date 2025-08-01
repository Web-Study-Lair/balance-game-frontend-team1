export class Choice {
  id!: number;
  imageUrl!: string;
  description!: string;

  constructor(params: Choice) {
    const { id, imageUrl, description } = params;
    this.id = id;
    this.imageUrl = imageUrl;
    this.description = description;
  }
}
