// Use ENUM for readibility/maintanability and reliable testing
export enum MEGAVERSE_OBJECT_TYPE {
    POLYANET = "POLYanet",
    SOLOON = "SOLoon",
    COMETH = "ComETH",
} 

// Use ENUM for Metaverse Object Icon for debugging purpose
export enum MEGAVERSE_OBJECT_ICON {
    POLYANET = "🪐",
    SOLOON = "🌙",
    BLUE_SOLOON = "🔵",
    RED_SOLOON = "🔴",
    PURPLE_SOLOON = "🟣",
    WHITE_SOLOON = "⚪️",
    COMETH = "☄",
    UP_COMETH = "⬆️",
    DOWN_COMETH = "⬇️",
    RIGHT_COMETH = "➡️",
    LEFT_COMETH = "⬅️",
    EMPTY_SPACE = "🌌",
} 

// As per the requirement, the object is set by row and column on the Metaverse layout
export type ObjectLocation = {
    row: number;
    column: number;
}

// Base class for the Megaverse Object. It mainly has object type, location, and icon (for debugging purpose)
export abstract class MegaverseObject {
    objectType: MEGAVERSE_OBJECT_TYPE;
    objectLocation: ObjectLocation;
    objectIcon: MEGAVERSE_OBJECT_ICON;

    // Megaverse Object initially is clueless. It doesn't know its location until the Megaverse's God gives one.
    constructor(objectType: MEGAVERSE_OBJECT_TYPE, objectIcon: MEGAVERSE_OBJECT_ICON,  objectLocation?: ObjectLocation){
        this.objectType = objectType;
        this.objectIcon = objectIcon;

        if(objectLocation){
            this.objectLocation = objectLocation;
        }
    }

    // Ask the child class to implement this as each type object has one different property
    abstract mapPostRequestPayload(): any;
}