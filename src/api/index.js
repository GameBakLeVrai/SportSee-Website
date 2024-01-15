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

export const getActivity = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/${id}/activity`, config);
    return res.data.data;
}

export const getSessions = async (id, namebyday) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/${id}/average-sessions`, config);

    if(namebyday) {
        const days = ["L", "M", "M", "J", "V", "S", "D"];

        if(res.data.data.sessions) res.data.data.sessions.forEach((d, index) => {
            const { day } = d;
            res.data.data.sessions[index].day = days[day-1];
        });
    }

    return res.data.data;
}

export const getPerformance = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/${id}/performance`, config);

    const sort = (name) => {
        switch(name) {
            case "cardio":
                return "Cardio";

            case "energy":
                return "Energie";

            case "endurance":
                return "Endurance";

            case "strength":
                return "Force";

            case "speed":
                return "Vitesse";

            case "intensity":
                return "Intensité";

            default:
                return name.charAt(0).toUpperCase() + name.slice(1);
        }
    }

    // Replace Kind Number by Name
    Object.values(res.data.data.kind).map((name, index) => res.data.data.data[index].kind = sort(name));

    return res.data.data;
}