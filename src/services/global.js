import axios from "axios";

export default class GlobalService {
    async getGlobal(url) {
        const { data } = await axios.get(`/api/${url}/`);
        return data;
    }

    async getGlobalById(url, id) {
        const { data } = await axios.get(`/api/${url}/${id}/`);
        return data;
    }

    async postGlobal(url, data) {
        const response = await axios.post(`/api/${url}/`, data);
        return response;
    }

    async editGlobal(url, id, data) {
        const response = await axios.patch(`/api/${url}/${id}/`, data);
        return response;
    }

    async deleteGlobal(url, id) {
        const response = await axios.delete(`/api/${url}/${id}/`);
        return response;
    }
}