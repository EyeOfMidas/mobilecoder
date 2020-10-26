import { MC } from "./MobileCoder.js";

export class VarCommand {
    constructor() {
    }
    click = event => {
        let varName = prompt("Please enter the var name");
        let textInput = "var " + varName + ";";

        MC.addTextAtCursor(textInput);
        MC.cursorToNewLine();
    }
}
