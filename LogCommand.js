import { MC } from "./MobileCoder.js";

export class LogCommand {
    constructor() {
    }
    click = event => {
        let logText = prompt("What would you like to output");
        let textInput = "console.log(\"" + logText + "\");";

        MC.addTextAtCursor(textInput);
        MC.cursorToNewLine();
    }
}
