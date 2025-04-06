import { MEGAVERSE_OBJECT_ICON, MEGAVERSE_OBJECT_TYPE, MegaverseObject, ObjectLocation } from "./MegaverseObject";

// Use ENUM as the Soloon's color set is clearly defined
export enum SOLOON_COLOR{
    BLUE = "blue",
    RED = "red",
    PURPLE = "purple",
    WHITE = "white",
}

// Megaverse's God created Soloon using God's existing template, which is MegaverseObject
export class Soloon extends MegaverseObject{
    // Soloon has color property
    color: SOLOON_COLOR;

    constructor(color: SOLOON_COLOR, objectLocation?: ObjectLocation, ){
        switch (color) {
            case SOLOON_COLOR.BLUE:
                super(MEGAVERSE_OBJECT_TYPE.SOLOON, MEGAVERSE_OBJECT_ICON.BLUE_SOLOON, objectLocation);
                break;
            case SOLOON_COLOR.RED:
                super(MEGAVERSE_OBJECT_TYPE.SOLOON, MEGAVERSE_OBJECT_ICON.RED_SOLOON, objectLocation);
                break;
            case SOLOON_COLOR.PURPLE:
                super(MEGAVERSE_OBJECT_TYPE.SOLOON, MEGAVERSE_OBJECT_ICON.PURPLE_SOLOON, objectLocation);
                break;
            case SOLOON_COLOR.WHITE:
                super(MEGAVERSE_OBJECT_TYPE.SOLOON, MEGAVERSE_OBJECT_ICON.WHITE_SOLOON, objectLocation);
                break;
            
            default:
                super(MEGAVERSE_OBJECT_TYPE.SOLOON, MEGAVERSE_OBJECT_ICON.SOLOON, objectLocation);
                break;
        }

        this.color = color;
    }

    mapPostRequestPayload() {
        return {
            row: this.objectLocation.row,
            column: this.objectLocation.column,
            color: this.color
        }
    }
}