import { IWarrior } from "../@types/IWarrior";

export abstract class Warrior implements IWarrior {
  public atk(): void {}
}