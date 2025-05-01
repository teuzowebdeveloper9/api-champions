"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const routes_1 = __importDefault(require("./routes/routes"));
const app = (0, app_1.createApp)();
app.use('/api', routes_1.default);
app.listen(3000, () => {
    console.log('servidor hospedado na porta 3000');
});
