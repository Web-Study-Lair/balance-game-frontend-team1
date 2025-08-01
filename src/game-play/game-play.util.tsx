import { Choice } from "../types/choice.type";
import { Game } from "../types/game.type";

export function getPlaceholdGameData(): Game {
  const choices = [
    new Choice({
      id: 1,
      description: "placeholder 1",
      imageUrl: "/no-image-placeholder.svg",
    }),
    new Choice({
      id: 2,
      description: "placeholder 2",
      imageUrl: "/no-image-placeholder.svg",
    }),
  ];
  return new Game({
    id: 0,
    title: `placeholder`,
    isActive: false,
    choices,
  });
}

function getMockUpGameData(gameId: string): Promise<Game> {
  const choices = [
    new Choice({
      id: 1,
      description: "예시 선택지 1",
      imageUrl: "/mockup-one.png",
    }),
    new Choice({
      id: 2,
      description: "예시 선택지 2",
      imageUrl: "/mockup-two.png",
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
  return getMockUpGameData(gameId);
}
