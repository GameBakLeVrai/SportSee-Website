import axios from "axios";

const config = {
    headers: {
        "Content-Type": "application/json"
    }
}

export const getUser = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/${id}`, config);
    return res.data.data;
}

export const getActivity = async (id, daily) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/${id}/activity`, config);
    return res.data.data;
}

export const getSessions = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/${id}/average-sessions`, config);
    return res.data.data;
}

export const getPerformance = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/${id}/performance`, config);
    return res.data.data;
}