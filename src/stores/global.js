import { defineStore } from "pinia";
import GlobalService from "@/services/global";
import { ref } from "vue";
const globalService = new GlobalService();

export const useGlobalStore = defineStore("global", () => {
    const models = ref([]);
    const colors = ref([])
    const accessories = ref([])

    async function getGlobal(url) {
        const data = await globalService.getGlobal(url);
        if (url == "modelos") {
            models.value = data.results;
        }
        else if (url == "cores") {
            colors.value = data.results;
        }
        else if (url == "acessorios") {
            accessories.value = data.results;
        }
    }

    return {
        models,
        colors,
        accessories,
        getGlobal
    }
})