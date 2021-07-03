import { Warrior } from "./Warrior";

export class Barbarian extends Warrior {
  atk() {
    console.log('Pour Crûm !');
  }
}