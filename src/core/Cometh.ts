// Loading internal modules
import { MEGAVERSE_OBJECT_ICON, MEGAVERSE_OBJECT_TYPE, MegaverseObject, ObjectLocation } from "./MegaverseObject";

// Use ENUM as the Cometh's direction set is clearly defined
export enum COMETH_DIRECTION{
    UP = "up",
    DOWN = "down",
    RIGHT = "right",
    LEFT = "left",
}

// Megaverse's God loves abstraction that it created Cometh using God's existing template, which is MegaverseObject
export class Cometh extends MegaverseObject{
    // Cometh has direction property
    direction: COMETH_DIRECTION;

    constructor(direction: COMETH_DIRECTION, objectLocation?: ObjectLocation){
        switch (direction) {
            case COMETH_DIRECTION.UP:
                super(MEGAVERSE_OBJECT_TYPE.COMETH, MEGAVERSE_OBJECT_ICON.UP_COMETH, objectLocation);
                break;
            case COMETH_DIRECTION.DOWN:
                super(MEGAVERSE_OBJECT_TYPE.COMETH, MEGAVERSE_OBJECT_ICON.DOWN_COMETH, objectLocation);
                break;
            case COMETH_DIRECTION.RIGHT:
                super(MEGAVERSE_OBJECT_TYPE.COMETH, MEGAVERSE_OBJECT_ICON.RIGHT_COMETH, objectLocation);
                break;
            case COMETH_DIRECTION.LEFT:
                super(MEGAVERSE_OBJECT_TYPE.COMETH, MEGAVERSE_OBJECT_ICON.LEFT_COMETH, objectLocation);
                break;
            
            default:
                super(MEGAVERSE_OBJECT_TYPE.COMETH, MEGAVERSE_OBJECT_ICON.COMETH, objectLocation);
                break;
        }

        this.direction = direction;
    }

    mapPostRequestPayload() {
        return {
            row: this.objectLocation.row,
            column: this.objectLocation.column,
            direction: this.direction,
        }
    }
}