// Loading internal modules
import { MEGAVERSE_OBJECT_ICON, MEGAVERSE_OBJECT_TYPE, MegaverseObject, ObjectLocation } from "./MegaverseObject";

// Megaverse's God loves abstraction that it created Polyanet using God's existing template, which is MegaverseObject
export class Polyanet extends MegaverseObject{

    constructor(objectLocation?: ObjectLocation){
        super(MEGAVERSE_OBJECT_TYPE.POLYANET, MEGAVERSE_OBJECT_ICON.POLYANET, objectLocation)
    }

    mapPostRequestPayload() {
        return {
            row: this.objectLocation.row,
            column: this.objectLocation.column,
        }
    }
}