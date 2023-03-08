import { createApp } from "vue";
import App from "@/components/app/App.vue";
import router from "./router";

// import "@/assets/main.css";
import "./global.css";

import uiComponents from "./ui-components";
const app = createApp(App);

app.use(router);
uiComponents.map((item) => app.component(item.name, item));
app.mount("#app");
