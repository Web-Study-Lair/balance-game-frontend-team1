export class ConfigUtil {
  SERVER_URL: string =
    import.meta.env.REACT_APP_BACKEND_SERVER_URL || "localhost:3000";
}
