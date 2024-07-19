import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
    const links = [{
        name: "Inicio",
        path: "/"
    }, {
        name: "Gerenciar",
        path: "/manager"
    }]

    return {
        links
    }
})