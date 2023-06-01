import { ICommand } from "../../interfaces/icommand.interface";
import { Point } from "../../types/point.type";
import { Entity } from "../entity.class";

export class BackwardCommand implements ICommand {
    execute(entity: Entity): Point {
        return entity.backward();
    }

}