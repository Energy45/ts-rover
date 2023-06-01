import { ICommand } from "../interfaces/icommand.interface";
import { CompositeCommand } from "./composite-command.class";
import { Entity } from "./entity.class";
import { ForwardCommand } from "./moveCommands/forward-command.class";
import { BackwardCommand } from "./moveCommands/backward-command.class";
import { TurnLeftCommand } from "./moveCommands/turnleft-command.class";
import { TurnRightCommand } from "./moveCommands/turnright-command.class";
import { Point } from "../types/point.type";

export class CommandInterpretor {
    handleCommand(entity: Entity, command: string): Point {
        const commandSeparate = command.split('');

        let childs: Array<ICommand> = new Array<ICommand>();

        commandSeparate.forEach((cmd) => {
            switch (cmd) {
                case 'A':
                    childs = new Array<ICommand>(...childs, new ForwardCommand());
                    break;
                case 'R':
                    childs = new Array<ICommand>(...childs, new BackwardCommand());
                    break;
                case 'D':
                    childs = new Array<ICommand>(...childs, new TurnRightCommand());
                    break;
                case 'G':
                    childs = new Array<ICommand>(...childs, new TurnLeftCommand());
                    break;
                default:
                    break;
            }
        });

        const commandComposite = new CompositeCommand(...childs);
        return commandComposite.execute(entity);
    }
}