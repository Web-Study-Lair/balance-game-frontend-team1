export class ConfigUtil {
  BACKEND_SERVER_URL: string =
    import.meta.env.VITE_BACKEND_SERVER_URL || "127.0.0.1:3000";
}
