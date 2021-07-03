import './config'
import { IWarrior } from './@types/IWarrior';
import { Container } from "./services/Container";

console.log(Container.resolve<IWarrior>('knight'));
console.log(Container.resolve<IWarrior>('barbarian'));
