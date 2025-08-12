import { Game } from "../types/game.type";
import { Choice } from "../types/choice.type";
import { chooseChoice } from "./game-play.util";
import { useState } from "react";

export function GameChoiceBox(
  props: Choice & {
    gameId: number;
    isGameFinished: boolean;
    setIsGameFinished: React.Dispatch<React.SetStateAction<boolean>>;
  }
) {
  const {
    gameId,
    id,
    imageUrl,
    description,
    isGameFinished,
    setIsGameFinished,
  } = props;

  const dimmedLayer = (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: 10,
      }}
    />
  );

  return (
    <div
      className="BalanceGameChoiceBox"
      style={{
        position: "relative",
        cursor: isGameFinished ? "default" : "pointer",
      }}
    >
      <div
        onClick={() => {
          if (!isGameFinished) {
            chooseChoice(gameId, id);
            setIsGameFinished(true);
          }
        }}
      >
        <img className="BalanceGameChoiceBoxImage" src={imageUrl} />
        <p className="BalanceGameChoiceBoxDescription">{description}</p>
        {isGameFinished ? dimmedLayer : null}
      </div>
    </div>
  );
}

export function GamePlay(props: Game) {
  const { id, title, choices } = props;
  const [isGameFinished, setIsGameFinished] = useState(false);
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
            {...choice}
          />
        ))}
      </div>
    </div>
  );
}
