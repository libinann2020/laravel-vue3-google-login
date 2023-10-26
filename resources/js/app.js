import { createApp } from "vue";
import App from "./App.vue";
import vue3GoogleLogin from "vue3-google-login";

const app = createApp(App);

app.use(vue3GoogleLogin, {
    clientId:
        "982153084174-vma1j7jtuu7gorognuv01ggvftj43sli.apps.googleusercontent.com",
});

app.mount("#app");
