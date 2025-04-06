// Load internal modules/classes
import { MegaverseService } from "../MegaverseService";
import { MegaverseBasePhase } from "./MegaverseBasePhase";

// Phase 1 class handler and logic
export class MegaversePhase1 extends MegaverseBasePhase{
    // Implement the mapObjects function for Phase 1
    async mapObjects(megaverseService: MegaverseService) {
        // Use manual approach
        const padding = 2;
        this.gridRowLength = 11;
        this.gridColumnLength = 11;
        
        // Initiate the empty 2D array layout
        this.initiateEmptyLayout();

        // Use O(n) complexity to draw the X-shaped Polyanets
        for (let idxRow = 0; idxRow < this.gridRowLength; idxRow++) {
            // Implement padding check
            if((idxRow > padding - 1) && (idxRow < (this.gridRowLength - padding))){
                // Draw the first diagonal
                megaverseService.addObjectToGrid(this.gridOfObjects, megaverseService.createPolyanet(), {row: idxRow, column: idxRow});
                // Draw the oposite diagonal
                megaverseService.addObjectToGrid(this.gridOfObjects, megaverseService.createPolyanet(), {row: idxRow, column: this.gridRowLength - idxRow - 1});
            }
            
        }

        this.renderLayout();

        // Since I have passed the Phase 1, the below code is commented for now.
        // Crossmint server has an active rate limiter, and delaying the API call for 1500 ms currently helps
        // await megaverseService.syncWithCrossmintServer(this.gridOfObjects, 1500);
    };
}