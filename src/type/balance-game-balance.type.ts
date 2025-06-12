import { BalanceGameChoice } from "./balance-game-choice.type";

export interface BalanceGameBalance {
  id: number;
  title: string;
  isActive: boolean;
  choices: BalanceGameChoice[];
}
