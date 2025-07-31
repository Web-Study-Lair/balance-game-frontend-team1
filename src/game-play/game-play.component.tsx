import { Game } from "../types/game.type";
import { Choice } from "../types/choice.type";

export function GameChoiceBox(props: Choice) {
  const { imageUrl, description } = props;
  return (
    // TODO: onClick 이벤트 구현
    <div className="BalanceGameChoiceBox">
      <img className="BalanceGameChoiceBoxImage" src={imageUrl} />
      <p className="BalanceGameChoiceBoxDescription">{description}</p>
    </div>
  );
}

export function GamePlay(props: Game) {
  const { title, choices } = props;
  return (
    <div className="BalanceGamePlay">
      <h1 className="BalanceGameTitle">{title}</h1>
      <div>
        {choices.map((choice) => (
          <GameChoiceBox key={choice.id} {...choice} />
        ))}
      </div>
    </div>
  );
}
