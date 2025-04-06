// Load ENUMs, utils/helpers, and other atomic types
import { goal as goalPhase2 } from "../../common/phase2.json";
import { COMETH_DIRECTION } from "../Cometh";

// Load internal modules/classes
import { MegaverseService } from "../MegaverseService";
import { SOLOON_COLOR } from "../Soloon";
import { MegaverseBasePhase } from "./MegaverseBasePhase";

// Phase 2 class handler and logic
export class MegaversePhase2 extends MegaverseBasePhase{
    // Implement the mapObjects function for Phase 2
    async mapObjects(megaverseService: MegaverseService) {

        // Commented now since this will raise an error as I have successfully passed the Phase 2
        // const Phase2Goal = await megaverseService.getPhaseGoal("phase2");
        
        // Use the cached goal instead
        const Phase2Goal = goalPhase2;

        this.gridRowLength = Phase2Goal.length;
        this.gridColumnLength = Phase2Goal[0].length;
        
        this.initiateEmptyLayout();

        for (let idxRow = 0; idxRow < this.gridRowLength; idxRow++) {
            for (let idxColumn = 0; idxColumn < this.gridColumnLength; idxColumn++) {
                const objectName = Phase2Goal[idxRow][idxColumn];
                if(objectName === "POLYANET"){
                    megaverseService.addObjectToGrid(this.gridOfObjects, megaverseService.createPolyanet(), {row: idxRow, column: idxColumn});
                }else if(objectName.includes("SOLOON")){
                    const soloonColor = objectName.replace("_SOLOON","").toLowerCase() as SOLOON_COLOR;
                    megaverseService.addObjectToGrid(this.gridOfObjects, megaverseService.createSoloon(soloonColor), {row: idxRow, column: idxColumn});
                }else if(objectName.includes("COMETH")){
                    const comethDirection = objectName.replace("_COMETH","").toLowerCase() as COMETH_DIRECTION;
                    megaverseService.addObjectToGrid(this.gridOfObjects, megaverseService.createCometh(comethDirection), {row: idxRow, column: idxColumn});
                }
                
            }
        }

        this.renderLayout();

        // Since I have passed the Phase 2, the below code is commented for now.
        // await megaverseService.syncWithCrossmintServer(this.gridOfObjects, 1500);
    };
}