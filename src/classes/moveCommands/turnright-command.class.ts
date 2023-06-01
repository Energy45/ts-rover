import { ICommand } from "../../interfaces/icommand.interface";
import { Point } from "../../types/point.type";
import { Entity } from "../entity.class";

export class TurnRightCommand implements ICommand {
    execute(entity: Entity): Point {
        const [position, direction] =  entity.turnRight();
        return position;
    }
    
}