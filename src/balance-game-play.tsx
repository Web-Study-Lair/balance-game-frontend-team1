import { BalanceGameBalance } from "./type/balance-game-balance.type";
import { BalanceGameChoice } from "./type/balance-game-choice.type";

export function BalanceGameChoiceBox(props: BalanceGameChoice) {
  const { imageUrl, description } = props;
  return (
    // TODO: onClick 이벤트 구현
    <div className="BalanceGameChoiceBox">
      <img className="BalanceGameChoiceBoxImage" src={imageUrl} />
      <p className="BalanceGameChoiceBoxDescription">{description}</p>
    </div>
  );
}

export function BalanceGame(props: BalanceGameBalance) {
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
