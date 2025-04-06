// Load core classes
import { MegaverseService } from "../MegaverseService";
import { MEGAVERSE_OBJECT_ICON, MegaverseObject } from "../MegaverseObject";

// Megaverse base class for better SoC, testing, and abstraction
export abstract class MegaverseBasePhase{
    // Assuming that the Megaverse isn't not a rigid structure that it will grow in a way that row <> column length
    protected gridRowLength: number;
    protected gridColumnLength: number;

    // Main Grid of Metaverse objects
    protected gridOfObjects: MegaverseObject[][];

    // initiate the empty grid layout to avoid null error operation. Using simple for loop for readibility
    protected initiateEmptyLayout(){
        this.gridOfObjects = [];
        for (let idxRow = 0; idxRow < this.gridRowLength; idxRow++) {
            this.gridOfObjects[idxRow] = [];
            for (let idxColumn = 0; idxColumn < this.gridColumnLength; idxColumn++) {
                this.gridOfObjects[idxRow][idxColumn] = null;
            }
        }
    }

    renderLayout(){
        for (let idxRow = 0; idxRow < this.gridRowLength; idxRow++) {
            console.log(this.gridOfObjects[idxRow].map( (gridObject) => gridObject?.objectIcon || MEGAVERSE_OBJECT_ICON.EMPTY_SPACE).join(""))
            console.log(``);
        }
    }

    // each phase has its own way of mapping the objects onto its layout
    abstract mapObjects(megaverseService: MegaverseService): void;
}