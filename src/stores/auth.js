import { ref } from 'vue';
import { defineStore } from 'pinia';
import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import { useStorage } from '@vueuse/core';
import AuthService from '@/services/auth';
const authService = new AuthService();

export const useAuthStore = defineStore('auth', () => {
    const user = ref({});
    const loggedIn = useStorage("loggedIn" ,false)

    async function setToken(token) {
        user.value = await authService.postUserToken(token);
        loggedIn.value = true;
    }

    function unsetToken() {
        user.value = {};
        loggedIn.value = false;
    }

    async function getUserInfo() {
        try {
            const authToken = localStorage.getItem('psg_auth_token');
            const passageUser = new PassageUser(authToken);
            const user = await passageUser.userInfo(authToken);
            if (user) {
                await this.setToken(authToken);
            } else {
                this.unsetToken();
            }
        } catch (error) {
            this.unsetToken();
        }
    }

    return { user, loggedIn, setToken, unsetToken, getUserInfo };
});