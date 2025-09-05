import { Choice } from "../types/choice.type";
import { GameResult } from "../types/game-result.type";
import { Game } from "../types/game.type";
import { ConfigUtil } from "../utils/config.util";
import { HttpUtil } from "../utils/http.util";

const MOCKUP_GAME_ID = 0;
const mockUpChoiceResult = new Map();
const configUtil = new ConfigUtil();
const httpUtil = new HttpUtil();

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

export async function getGameData(gameId: string): Promise<Game> {
  if (gameId === "random") {
    const gameData = await httpUtil.get(
      `${configUtil.BACKEND_SERVER_URL}/balance-game/random`
    );
    return new Game(gameData.data);
  }
  // 테스트용으로 목업 데이터 불러올 수 있게 함
  const gameIdNum = Number(gameId) ?? 0;
  if (gameIdNum === MOCKUP_GAME_ID) return getMockUpGameData(gameIdNum);
  throw new Error("Not Implemented");
}

function fetchVoteChoice(gameId: number, choiceId: number) {
  if (gameId === MOCKUP_GAME_ID)
    return Promise.resolve(getMockUpGameResult(choiceId));
  // TODO: 추후 API와 연결되도록 구현할 것
  throw new Error("Not Implemented");
}

export async function chooseChoice(
  gameId: number,
  choiceId: number
): Promise<GameResult[]> {
  const result = await fetchVoteChoice(gameId, choiceId);
  const countTotal = result.results.reduce((sum, { count }) => sum + count, 0);
  return result.results.map((choice) => ({
    id: choice.id,
    count: choice.count,
    total: countTotal,
  }));
}
