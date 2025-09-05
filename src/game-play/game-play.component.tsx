import { Game } from "../types/game.type";
import { Choice } from "../types/choice.type";
import { chooseChoice } from "./game-play.util";
import { useMemo, useState } from "react";
import { GameResult } from "../types/game-result.type";

function GameChoiceDimmedLayer(props: GameResult) {
  const { count, total } = props;
  return (
    <div
      className="BalanceGameChoiceDimmedLayer"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: 10,
      }}
    >
      <p className="BalanceGameResultText">
        {count} 표<br />({((count * 100) / total || 0).toFixed(2)} %)
      </p>
    </div>
  );
}

export function GameChoiceBox(
  props: Choice & {
    gameId: number;
    isGameFinished: boolean;
    setIsGameFinished: React.Dispatch<React.SetStateAction<boolean>>;
    gameResults: GameResult[];
    setGameResults: React.Dispatch<React.SetStateAction<GameResult[]>>;
  }
) {
  const {
    gameId,
    id,
    imageUrl,
    description,
    isGameFinished,
    setIsGameFinished,
    gameResults,
    setGameResults,
  } = props;

  const currentChoiceResult = useMemo(() => {
    return gameResults.find((result) => result.id === id);
  }, [gameResults]);

  return (
    <div
      className="BalanceGameChoiceBox"
      style={{
        position: "relative",
        cursor: isGameFinished ? "default" : "pointer",
      }}
    >
      <div
        onClick={async () => {
          if (!isGameFinished) {
            const results = await chooseChoice(gameId, id);
            setGameResults(results);
            setIsGameFinished(true);
          }
        }}
      >
        <img className="BalanceGameChoiceBoxImage" src={imageUrl} />
        <p className="BalanceGameChoiceBoxDescription">{description}</p>
        {isGameFinished && currentChoiceResult ? (
          <GameChoiceDimmedLayer {...currentChoiceResult} />
        ) : null}
      </div>
    </div>
  );
}

export function GamePlay(props: Game) {
  const { id, title, choices } = props;
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [gameResults, setGameResults] = useState<GameResult[]>([]);
  return (
    <div className="BalanceGamePlay">
      <h1 className="BalanceGameTitle">{title}</h1>
      <div className="BalanceGameChoiceBoxes">
        {choices.map((choice) => (
          <GameChoiceBox
            key={choice.id}
            gameId={id}
            isGameFinished={isGameFinished}
            setIsGameFinished={setIsGameFinished}
            gameResults={gameResults}
            setGameResults={setGameResults}
            {...choice}
          />
        ))}
      </div>
    </div>
  );
}
