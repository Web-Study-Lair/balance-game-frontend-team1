import { Game } from "./types/game.type";
import { Choice } from "./types/choice.type";

export function BalanceGameChoiceBox(props: Choice) {
  const { imageUrl, description } = props;
  return (
    // TODO: onClick 이벤트 구현
    <div className="BalanceGameChoiceBox">
      <img className="BalanceGameChoiceBoxImage" src={imageUrl} />
      <p className="BalanceGameChoiceBoxDescription">{description}</p>
    </div>
  );
}

export function BalanceGame(props: Game) {
  const { title, choices } = props;
  return (
    <div className="BalanceGame">
      <h1 className="BalanceGameTitle">{title}</h1>
      <div>
        {choices.map((choice) => (
          <BalanceGameChoiceBox key={choice.id} {...choice} />
        ))}
      </div>
    </div>
  );
}
