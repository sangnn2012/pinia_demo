import { defineStore } from 'pinia';

export const useUserStore = defineStore('UserStore', {
    state() {
        return {
            user: 'Sang Nguyen',
        }
    },
    getters: {
        firstName() {
            return this.user.split(' ')[0];
        }
    }
})