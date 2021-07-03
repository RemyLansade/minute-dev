"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./config");
var Container_1 = require("./services/Container");
console.log(Container_1.Container.resolve('knight'));
console.log(Container_1.Container.resolve('barbarian'));
