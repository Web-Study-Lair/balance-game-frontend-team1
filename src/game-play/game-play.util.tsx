import { Choice } from "../types/choice.type";
import { Game } from "../types/game.type";
import viteImg from "/public/vite.svg";

function getExampleGameData(gameId: string): Promise<Game> {
  const choices = [
    new Choice({
      id: 1,
      description: "예시 선택지 1",
      imageUrl: viteImg,
    }),
    new Choice({
      id: 2,
      description: "예시 선택지 2",
      imageUrl: viteImg,
    }),
  ];
  const game = new Game({
    id: 0,
    title: `${gameId} 예시`,
    isActive: true,
    choices,
  });
  return Promise.resolve(game);
}

export function getGameData(gameId: string): Promise<Game> {
  return getExampleGameData(gameId);
}
