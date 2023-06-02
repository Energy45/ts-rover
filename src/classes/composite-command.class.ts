import { Orientation } from '../enums/orientation.enum';
import { ICommand } from '../interfaces/icommand.interface';
import { Entity } from './entity.class';
import { Point } from './point.class';
import { Position } from './position.class';
export class CompositeCommand implements ICommand {
    private _children: Array<ICommand> = new Array<ICommand>;
    
    constructor(...children: Array<ICommand>) {
        this._children = children;
    }

    execute(entity: Entity): Position {
        let finalPosition: Position = new Position(0, 0, Orientation.East);
        this._children.forEach((child) => {
            finalPosition = child.execute(entity);
        });

        return finalPosition;
    }
}
