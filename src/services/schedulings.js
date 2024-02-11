import axios from "axios";
import { serverBaseUrl } from "./config";

export async function getSchedulings() {
    const result = await axios.get(
        `${serverBaseUrl}/scheduling/`,
        {withCredentials: true}
    );

    return result.data;
}
