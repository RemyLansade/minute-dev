import { Container } from "./services/Container";
import { Knight } from "./core/Knight";
import { Barbarian } from "./core/Barbarian";

Container.register('knight', () => {
  return new Knight
})

Container.register('barbarian', () => {
  return new Barbarian
})
