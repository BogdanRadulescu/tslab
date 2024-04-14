import { GameEngine } from "./gameEngine";
import { emitKeypressEvents } from "readline"

emitKeypressEvents(process.stdin);
const gameEngine = new GameEngine();

gameEngine.registerUserInputs();
gameEngine.runGame()