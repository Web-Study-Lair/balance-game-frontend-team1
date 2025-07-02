import { Link } from "react-router-dom";

export function EntrancePage() {
  // TODO: 메인 페이지 구현하기
  return (
    <>
      <h1>메인 페이지</h1>
      <Link to="/game-play/random">
        <li>게임 시작하기</li>
      </Link>
    </>
  );
}
