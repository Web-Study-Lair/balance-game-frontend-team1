import axios from "axios";

export class HttpUtil {
  async get(url: string) {
    const result = await axios.request({
      method: "get",
      url,
      headers: {},
    });
    return result;
  }

  async post(url: string, data: object) {
    const result = await axios.request({
      method: "post",
      url,
      data,
      headers: {},
    });
    return result;
  }
}
