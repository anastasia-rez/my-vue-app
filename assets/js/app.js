
import{ createApp, ref } from '../../node_modules/vue/dist/vue.esm-browser.prod.js';

createApp({
    setup(){

        const title = ref('Vue + NPM App');
        const description = ref('Some text here...');
        const clicker = ref(0);

    


        return {
            title,
            description,
            clicker
        }
    }

}).mount('#app');