import { NullCommand } from './NullCommand.js';
import { VarCommand } from './VarCommand.js';
import { LogCommand } from './LogCommand.js';
import { FunctionCommand } from './FunctionCommand.js';
export class CommandFactory {
    constructor() {
    }

    create(id) {
        switch (id) {
            case 'var':
                return new VarCommand();
            case 'log':
                return new LogCommand();
            case 'function':
                return new FunctionCommand();
            default:
                return new NullCommand();
        }
    }
}
