import { useParams } from "react-router-dom";

export function GamePlayPage() {
  const { gameId } = useParams();
  return (
    <>
      <h1>밸런스 게임 페이지</h1>
      <div>게임 ID: {gameId}</div>
    </>
  );
}
