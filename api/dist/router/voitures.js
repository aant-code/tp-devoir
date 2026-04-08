"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.voitureRouter = void 0;
const express_1 = require("express");
const __1 = require("..");
exports.voitureRouter = (0, express_1.Router)();
exports.voitureRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const voiture = yield __1.Voiture.create({
        name: req.body.data.name,
        immatriculation_date: req.body.data.immatriculation_date
    });
    res.status(201).json(voiture);
}));
exports.voitureRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myCar = yield __1.Voiture.findByPk(parseInt(req.params.id));
    if (!myCar) {
        res.status(404).json({ message: "Voiture not found" });
        return;
    }
    else {
        res.json(myCar);
    }
}));
exports.voitureRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myCar = yield __1.Voiture.findByPk(parseInt(req.params.id));
    if (!myCar) {
        res.status(404).json({ message: "Voiture not found" });
        return;
    }
    else {
        myCar.name = req.body.data.name;
        myCar.immatriculation_date = req.body.data.immatriculation_date;
        yield myCar.save();
        res.json(myCar);
    }
}));
exports.voitureRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const voitures = yield __1.Voiture.findAll();
    res.json(voitures);
}));
exports.voitureRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myCar = yield __1.Voiture.findByPk(parseInt(req.params.id));
    if (!myCar) {
        res.status(404).json({ message: "Voiture not found" });
        return;
    }
    else {
        yield myCar.destroy();
        res.json({ message: "Voiture deleted" });
    }
}));
