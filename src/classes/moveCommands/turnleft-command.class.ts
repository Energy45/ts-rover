import { ICommand } from "../../interfaces/icommand.interface";
import { Point } from "../../types/point.type";
import { Entity } from "../entity.class";

export class TurnLeftCommand implements ICommand {
    execute(entity: Entity): Point {
        const [position, direction] = entity.turnLeft();
        return position;
    }
    
}