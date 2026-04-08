"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voiture = exports.sequelize = void 0;
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const sequelize_1 = require("sequelize");
const Voiture_1 = require("./model/Voiture");
const voitures_1 = require("./router/voitures");
exports.sequelize = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: 'db/database.sqlite'
});
exports.Voiture = (0, Voiture_1.VoitureModel)(exports.sequelize);
// sequelize.sync({ force: true });
exports.sequelize.sync();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const apiRouter = express_1.default.Router();
apiRouter.use("/voitures", voitures_1.voitureRouter);
app.use("/api", apiRouter);
app.get("/", (req, res) => {
    res.send("Bravo les champions !");
});
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`);
});
