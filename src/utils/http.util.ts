import axios from "axios";

export class HttpUtil {
  async get(url: string) {
    const result = await axios.get(url);
    return result;
  }

  async post(url: string, data: object) {
    const result = await axios.post(url, data);
    return result;
  }
}
