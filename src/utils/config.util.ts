export class ConfigUtil {
  SERVER_URL: string =
    import.meta.env.REACT_APP_BACKEND_SERVER_URL || "127.0.0.1:3000";
}
