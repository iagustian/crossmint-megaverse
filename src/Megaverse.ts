// Load internal modules/classes
import { MegaverseApi } from "./api/MegaverseApi";
import { MegaverseService } from "./core/MegaverseService";
import { MegaversePhase1 } from "./core/phase/MegaversePhase1";
import { MegaversePhase2 } from "./core/phase/MegaversePhase2";

try {
    const megaverseApi = new MegaverseApi();
    const megaverseSvc = new MegaverseService(megaverseApi);

    const megaversePhase1 = new MegaversePhase1();
    megaversePhase1.mapObjects(megaverseSvc);

    const megaversePhase2 = new MegaversePhase2();
    megaversePhase2.mapObjects(megaverseSvc)
} catch (error) {
    console.log("🚀 ~ error:", error)
}
