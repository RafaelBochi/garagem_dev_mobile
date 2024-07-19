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

    async addVehicle(vehicle) {
        const { data } = await axios.post("/api/veiculos/", vehicle);
        return data;
    }

    async editVehicle(id, vehicle) {
        const { data } = await axios.patch(`/api/veiculos/${id}/`, vehicle);
        return data;
    }

    async deleteVehicle(id) {
        const { data } = await axios.delete(`/api/veiculos/${id}/`);
        return data;
    }

    async uploadImageVehicle(image) {
        const formData = new FormData();
        formData.append("image", image);
        const { data } = await axios.post("/api/imagem_veiculos/", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return data;
    }
}