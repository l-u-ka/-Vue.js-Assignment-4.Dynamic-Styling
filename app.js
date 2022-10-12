const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            userBackgoundColor: '',
            isVisible: true
        }
    },
    methods: {
        handleToggle() {
            this.isVisible = !this.isVisible;
        }
    }
});

app.mount('#assignment')