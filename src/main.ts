import { registerPlugins } from "@/plugins";
import { createApp } from "vue";
import App from "./App.vue";
import "./styles/globals.scss";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
