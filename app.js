const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            userBackgoundColor: '',
            visibility: 'visible'
        }
    },
    computed: {
        userClass() {
            if (this.userInput === 'user1') return 'user1';
            else if (this.userInput === 'user2') return 'user2';
        }
    }
    ,
    methods: {
        handleToggle() {
            if (this.visibility === 'visible') this.visibility = 'hidden';
            else if (this.visibility === 'hidden') this.visibility = 'visible';
        }
    }
});

app.mount('#assignment')