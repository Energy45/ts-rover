import { Entity } from "../classes/entity.class";
import { Position } from "../classes/position.class";

export interface ICommand {
    execute(entity: Entity): Position;
}