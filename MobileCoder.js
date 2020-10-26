import { CommandFactory } from './CommandFactory.js';
export class MobileCoder {
    constructor() {
        this.cursor = { line: 0, character: 0 };
        this.commandFactory = new CommandFactory();
        this.codeWindow = document.getElementById('code-window').getElementsByTagName("textarea")[0];
        this.variables = [];
        this.functions = [];
        this.currentScope = "window";
    }
    init() {
        let commandElements = document.getElementsByClassName("command");
        for (let i = 0; i < commandElements.length; i++) {
            let commandElement = commandElements[i];
            let id = commandElement.getAttribute('data-command');
            let command = this.commandFactory.create(id);
            commandElement.addEventListener("click", command.click);
        }
    }

    addNewFunction(functionName) {
        this.functions.push({ name: functionName, topScope: this.cursor.line + 1, length: 0 });
        this.addTextAtCursor("function " + functionName + "() {");
        this.cursorToNewLine();
        this.addTextAtCursor("}");
        this.cursorToNewLine();
        this.currentScope = functionName;
    }

    addTextAtCursor(textInput) {
        let fullText = this.codeWindow.value;
        let lines = fullText.split("\n");
        if (lines.length <= this.cursor.line) {
            //TODO: need to add new line

        }

        if (this.currentScope != "window") {
            let curFunc = this.functions.find(f => f.name == this.currentScope);
            if (!curFunc) {
                this.currentScope = "window";
                this.cursor.line = lines.length;
                this.cursor.character = lines[lines.length - 1].length;
            } else {
                lines.splice(curFunc.topScope + curFunc.length + 1, 0, "\t" + textInput);
                curFunc.length++;
            }
        } else {
            lines.push(textInput);
        }

        this.codeWindow.value = lines.join("\n");
    }
    cursorToNewLine() {
        this.cursor.line++;
        this.cursor.character = 0;
    }
}
export const MC = new MobileCoder();
MC.init();
