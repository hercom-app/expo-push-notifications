import { defineApp } from "convex/server";
import pushNotifications from "../../src/component/convex.config";

const app = defineApp();
app.use(pushNotifications);

export default app;
