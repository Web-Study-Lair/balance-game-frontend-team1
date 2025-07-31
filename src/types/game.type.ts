import { Choice } from "./choice.type";

export interface Game {
  id: number;
  title: string;
  isActive: boolean;
  choices: Choice[];
}
