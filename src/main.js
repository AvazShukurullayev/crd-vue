import { createApp } from "vue";
import App from "@/components/app/App.vue";
import router from "./router";

// import "@/assets/main.css"; 
import "./global.css";
const app = createApp(App);

app.use(router);

app.mount("#app");
