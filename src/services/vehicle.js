import axios from "axios";

export default class VehicleService {
    async getVehicles() {
        const { data } = await axios.get("/api/veiculos/");
        return data;
    }

    async getVehicle(id) {
        const { data } = await axios.get(`/api/veiculos/${id}/`);
        return data;
    }

    async editVehicle(id, vehicle) {
        const { data } = await axios.patch(`/api/veiculos/${id}/`, vehicle);
        return data;
    }

    async removeVehicle(id) {
        const { data } = await axios.delete(`/api/veiculos/${id}/`);
        return data;
    }
}