import { MC } from "./MobileCoder.js";

export class FunctionCommand {
    constructor() {
    }
    click = event => {
        let functionName = prompt("Name of function");
        MC.addNewFunction(functionName);
    }
}
