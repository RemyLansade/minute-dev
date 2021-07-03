import { Warrior } from "./Warrior";

export class Knight extends Warrior {
  atk() {
    console.log('Pour le roi !');
  }
}