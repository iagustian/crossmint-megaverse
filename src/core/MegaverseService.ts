// Load the internal modules
import { delay } from "../api/ApiUtils";
import { MegaverseApi } from "../api/MegaverseApi";
import { ERROR_MESSAGE } from "../common/Error";
import { Cometh, COMETH_DIRECTION } from "./Cometh";
import { MegaverseObject, ObjectLocation } from "./MegaverseObject";
import { Polyanet } from "./Polyanet";
import { Soloon, SOLOON_COLOR } from "./Soloon";

// Core service to manage object creation and syncing
export class MegaverseService{

    private megaverseApi: MegaverseApi;

    constructor(megaverseAPI: MegaverseApi){
        this.megaverseApi = megaverseAPI;
    }

    // Assuming that Megaverse Object doesn't have ability to set its own location, only Megaverse's God can set it.
    addObjectToGrid(gridOfObjects: MegaverseObject[][], megaverseObject: MegaverseObject, objectLocation: ObjectLocation){
        megaverseObject.objectLocation = objectLocation;
        gridOfObjects[objectLocation.row][objectLocation.column] = megaverseObject;
        return megaverseObject;
    }

    // Important function for syncing the Megaverse objects mapped with their actual location on Crossmint server
    async syncWithCrossmintServer(gridOfObjects: MegaverseObject[][], delayInMiliSec: number = 1500){
        try{
            for (let idxRow = 0; idxRow < gridOfObjects.length; idxRow++) {
                for (let idxColumn = 0; idxColumn < gridOfObjects[idxRow].length; idxColumn++) {
                    if(gridOfObjects[idxRow][idxColumn]?.objectType){
                        this.megaverseApi.postObject(gridOfObjects[idxRow][idxColumn]);
                        // Add delay to avoid the next request being rejected from Crossmint's Vercel rate limiter
                        await delay(delayInMiliSec);
                    }
                }
            }
        }catch(err){
            console.log("🚀 ~ MegaverseService ~ syncWithCrossmintServer ~ err:", err);
        }
        
    }

    // Service function to create POLyanet instance
    createPolyanet(location?: ObjectLocation) {
        return new Polyanet(location);
    }
    
    // Service function to create SOLoon instance
    createSoloon(soloonColor: SOLOON_COLOR, location?: ObjectLocation, ) {
        return new Soloon(soloonColor, location);
    }

    // Service function to create COMeth instance
    createCometh(comethDirection: COMETH_DIRECTION, location?: ObjectLocation) {
        return new Cometh(comethDirection, location);
    }

    // Get the Goal requirement by Phase
    async getPhaseGoal(phase: "phase1" | "phase2"): Promise<string[][]> {
        try {
            switch(phase){
                case "phase1":
                    break;

                case "phase2":
                    const goalPayload = await this.megaverseApi.getPhaseGoalPayload();
                    const candidatePayload = await this.megaverseApi.getCandidateData();

                    // Make sure that the current phase is 2
                    if(candidatePayload?.candidate?.phase === 2){
                        return goalPayload?.goal as string[][];
                    }else
                        throw new Error(ERROR_MESSAGE.INVALID_PHASE);
                
                default:
                    break;
        }
        } catch (error) {
            throw error;
        }
    }
}
