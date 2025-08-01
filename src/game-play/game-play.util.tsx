import { Choice } from "../types/choice.type";
import { Game } from "../types/game.type";

const MOCKUP_GAME_ID = 0;
const mockUpChoiceResult = new Map();

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
    id: -1,
    title: `placeholder`,
    isActive: false,
    choices,
  });
}

function getMockUpGameData(gameId: number): Promise<Game> {
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
    id: MOCKUP_GAME_ID,
    title: `${gameId} 예시`,
    isActive: true,
    choices,
  });
  return Promise.resolve(game);
}

function getMockUpGameResult(choiceId: number) {
  // 백엔드 서버와 연결되지 않으므로 임시 변수 내에서 결과를 쌓도록 처리
  const cachedResult = mockUpChoiceResult.get(choiceId);
  if (cachedResult) mockUpChoiceResult.set(choiceId, cachedResult + 1);
  else mockUpChoiceResult.set(choiceId, 1);
  return {
    gameId: MOCKUP_GAME_ID,
    results: [
      {
        id: 1,
        description: "예시 선택지 1",
        count: mockUpChoiceResult.get(1) ?? 0,
      },
      {
        id: 2,
        description: "예시 선택지 2",
        count: mockUpChoiceResult.get(2) ?? 0,
      },
    ],
  };
}

export function getGameData(gameId: number): Promise<Game> {
  return getMockUpGameData(gameId);
}

function fetchVoteChoice(gameId: number, choiceId: number) {
  if (gameId === MOCKUP_GAME_ID)
    return Promise.resolve(getMockUpGameResult(choiceId));
  // TODO: 추후 API와 연결되도록 구현할 것
  throw new Error("Not Implemented");
}

export async function chooseChoice(gameId: number, choiceId: number) {
  const result = await fetchVoteChoice(gameId, choiceId);
  // TODO: 추후 결과를 UI 상으로 노출하도록 구현
  console.log(`밸런스 게임 ${gameId} 결과`);
  result.results.forEach((choice) => {
    console.log(`- ${choice.id}: ${choice.count} 회`);
  });
}
