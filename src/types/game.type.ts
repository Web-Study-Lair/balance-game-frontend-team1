import { Choice } from "./choice.type";

export class Game {
  id!: number;
  title!: string;
  isActive!: boolean;
  choices!: Choice[];

  constructor(params: Game) {
    const { id, title, isActive, choices } = params;
    this.id = id;
    this.title = title;
    this.isActive = isActive;
    this.choices = choices;
  }
}
