import { MEGAVERSE_OBJECT_TYPE, MegaverseObject } from "../core/MegaverseObject";
import { apiRequest } from "./ApiUtils";

export const BASE_URL = "https://challenge.crossmint.io/api";
// TODO: Use more secure approach for exposing the candidate ID
const CANDIDATE_ID = "cc98e662-6813-417d-a2e5-c453d39b8344";

const createRequestURL = (megaverseObject: MegaverseObject) => {
  let endpoint = '';

  switch (megaverseObject.objectType) {
    case MEGAVERSE_OBJECT_TYPE.POLYANET:
      endpoint = 'polyanets';
      break;
    
    case MEGAVERSE_OBJECT_TYPE.SOLOON:
      endpoint = 'soloons';
      break;

    case MEGAVERSE_OBJECT_TYPE.COMETH:
      endpoint = 'comeths';
      break;
  
    default:
      break;
  }

  return `${BASE_URL}/${endpoint}`;
}

// Use the interface for reliable testing, i.e.: Mock the API
interface IMegaverseApi{
  postObject(megaverseObject: MegaverseObject): Promise<any>;
  deleteObject(megaverseObject: MegaverseObject): Promise<any>;
  getPhaseGoalPayload(): Promise<any>;
  getCandidateData(): Promise<any>;
}

// See the challenge documentation here: https://challenge.crossmint.com/documentation
export class MegaverseApi implements IMegaverseApi {
  async postObject(megaverseObject: MegaverseObject) {
    const url = createRequestURL(megaverseObject);

    const requestPayload = {
      candidateId: CANDIDATE_ID,
      ...megaverseObject.mapPostRequestPayload()
    }

    return apiRequest( url, "POST", requestPayload);
  }

  async deleteObject(megaverseObject: MegaverseObject) {
    const url = createRequestURL(megaverseObject);

    return apiRequest(url,"DELETE",{});
  }

  async getPhaseGoalPayload(){
    const url = `${BASE_URL}/map/${CANDIDATE_ID}/goal`;

    return apiRequest(url,"GET",{});
  }
  
  async getCandidateData(){
    const url = `${BASE_URL}/candidates/${CANDIDATE_ID}`;

    return apiRequest(url,"GET",{});
  }
}
  