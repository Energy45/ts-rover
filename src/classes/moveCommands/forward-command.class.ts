import { ICommand } from "../../interfaces/icommand.interface";
import { Entity } from "../entity.class";
import { Position } from "../position.class";

export class ForwardCommand implements ICommand {
    execute(entity: Entity): Position {
        return entity.forward();
    }
    
}