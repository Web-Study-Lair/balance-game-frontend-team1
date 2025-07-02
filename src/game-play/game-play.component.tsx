import { BalanceGameBalance } from "../type/balance-game-balance.type";
import { BalanceGameChoice } from "../type/balance-game-choice.type";

export function GameChoiceBox(props: BalanceGameChoice) {
  const { imageUrl, description } = props;
  return (
    // TODO: onClick 이벤트 구현
    <div className="BalanceGameChoiceBox">
      <img className="BalanceGameChoiceBoxImage" src={imageUrl} />
      <p className="BalanceGameChoiceBoxDescription">{description}</p>
    </div>
  );
}

export function GamePlay(props: BalanceGameBalance) {
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
