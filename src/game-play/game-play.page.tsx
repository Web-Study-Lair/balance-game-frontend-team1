import { useParams } from "react-router-dom";
import { getGameData, getPlaceholdGameData } from "./game-play.util";
import { useEffect, useState } from "react";
import { Game } from "../types/game.type";
import { GamePlay } from "./game-play.component";

export function GamePlayPage() {
  const { gameId } = useParams();
  const [game, setGame] = useState<Game>(getPlaceholdGameData());
  useEffect(() => {
    const fetchData = async () => {
      const game = await getGameData(gameId ?? "example");
      setGame(game);
    };
    fetchData();
  }, [gameId]);
  return (
    <>
      <h1>밸런스 게임 페이지</h1>
      <div>
        <GamePlay key={gameId} {...game} />
      </div>
    </>
  );
}
