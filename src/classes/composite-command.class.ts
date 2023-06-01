import { ICommand } from '../interfaces/icommand.interface';
import { Point } from '../types/point.type';
import { Entity } from './entity.class';
export class CompositeCommand implements ICommand {
    private _children: Array<ICommand> = new Array<ICommand>;
    
    constructor(...children: Array<ICommand>) {
        this._children = children;
    }

    execute(entity: Entity): Point {
        let finalPosition: Point = {
            x: 0,
            y: 0,
        };
        this._children.forEach((child) => {
            finalPosition = child.execute(entity);
        });

        return finalPosition;
    }
}