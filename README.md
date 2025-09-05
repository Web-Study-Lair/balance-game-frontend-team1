# 환경 세팅 방법

## 백엔드 서버 설정

백엔드 서버는 별도의 레포로 분리되어 있으니, 이 쪽을 확인해주세요.

## 환경변수 설정 및 추가

환경변수 파일은 루트 디렉토리에 아래와 같은 형식의 `.env` 파일을 정의하여 사용합니다.

```
VITE_BACKEND_SERVER_URL = localhost:3000
```

여기서 변수에 따옴표를 붙이지 않고 정의하며, 변수의 접두사로 `VITE_`를 붙여야 한다.

코드 상에서 환경변수를 사용하고자 하면 아래와 같이 먼저 `ConfigUtil` 인터페이스를 거친다.

```typescript
export class ConfigUtil {
  SERVER_URL: string =
    import.meta.env.REACT_APP_BACKEND_SERVER_URL || "localhost:3000";
}
```

그 뒤, 환경변수를 다른 곳에서 `ConfigUtil.SERVER_URL`과 같은 방식으로 불러와서 사용한다.
