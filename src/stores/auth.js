import { ref } from 'vue';
import { defineStore } from 'pinia';
import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import AuthService from '@/services/auth';
const authService = new AuthService();

export const useAuthStore = defineStore('auth', () => {
    const user = ref({});

    async function setToken(token) {
        user.value = await authService.postUserToken(token);
    }

    function unsetToken() {
        user.value = {};
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

    return { user, setToken, unsetToken, getUserInfo };
});