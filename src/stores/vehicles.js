import { defineStore } from "pinia";
import VehicleService from "@/services/vehicle";
const vehicleService = new VehicleService();

export const useVehicleStore = defineStore('vehicle', () => {
    const vehicles = ref([]);
    const vehicle = ref({})

    async function getVehicles() {
        const data = await vehicleService.getVehicles();
        vehicles.value = data.results;
    }

    async function getVehicle(id) {
        const data = await vehicleService.getVehicle(id);
        vehicle.value = data;
    }

    async function editVehicle(id, vehicle) {
        try {
            await vehicleService.editVehicle(id, vehicle);
            await getVehicles();
        } catch(e) {
            console.log(e)
        }
    }

    async function deleteVehicle(id) {
        try {
            await vehicleService.removeVehicle(id);
            await getVehicles();
        } catch(e) {
            console.log(e)
        }
    }

    return {
        vehicles, vehicle, getVehicles, getVehicle, editVehicle, deleteVehicle
    }
})