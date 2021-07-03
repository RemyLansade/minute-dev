"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Container_1 = require("./services/Container");
var Knight_1 = require("./core/Knight");
var Barbarian_1 = require("./core/Barbarian");
Container_1.Container.register('knight', function () {
    return new Knight_1.Knight;
});
Container_1.Container.register('barbarian', function () {
    return new Barbarian_1.Barbarian;
});
