import { Entity } from "../classes/entity.class";
import { Point } from "../types/point.type";

export interface ICommand {
    execute(entity: Entity): Point;
}