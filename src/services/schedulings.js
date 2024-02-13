import axios from "axios";
import { serverBaseUrl } from "./config";

export async function getSchedulings() {
    const result = await axios.get(
        `${serverBaseUrl}/scheduling/`,
        {withCredentials: true}
    );

    return result.data;
}

export async function postScheduling(data) {
    const result = await axios.post(
        `${serverBaseUrl}/scheduling/`,
        data,
        {withCredentials: true}
    );

    return result.data;
}

export async function updateScheduling(id, data) {
    const result = await axios.patch(
        `${serverBaseUrl}/scheduling/${id}`,
        data,
        {withCredentials: true}
    );

    return result.data;
}

export async function deleteScheduling(id) {
    const result = await axios.delete(
        `${serverBaseUrl}/scheduling/${id}`,
        {withCredentials: true}
    );

    return result.data;
}

export async function getSchedulingById(id) {
    const result = await axios.get(
        `${serverBaseUrl}/scheduling/${id}`,
        {withCredentials: true}
    );

    return result.data;
}
