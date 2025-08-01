import { Game } from "../types/game.type";
import { Choice } from "../types/choice.type";
import { chooseChoice } from "./game-play.util";

export function GameChoiceBox(props: Choice & { gameId: number }) {
  const { gameId, id, imageUrl, description } = props;
  return (
    // TODO: onClick 이벤트 이후 결과 출력 UI 구현
    <div
      className="BalanceGameChoiceBox"
      onClick={() => chooseChoice(gameId, id)}
    >
      <img className="BalanceGameChoiceBoxImage" src={imageUrl} />
      <p className="BalanceGameChoiceBoxDescription">{description}</p>
    </div>
  );
}

export function GamePlay(props: Game) {
  const { id, title, choices } = props;
  return (
    <div className="BalanceGamePlay">
      <h1 className="BalanceGameTitle">{title}</h1>
      <div className="BalanceGameChoiceBoxes">
        {choices.map((choice) => (
          <GameChoiceBox key={choice.id} gameId={id} {...choice} />
        ))}
      </div>
    </div>
  );
}
