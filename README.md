# 🌌 Megaverse Challenge

This project solves the Crossmint Megaverse Challenge by programmatically placing objects (POLYanets, SOLoons, comETHs) into a 2D grid layout based on the rules defined for each phase.

The system is built with scalability and separation of concerns in mind, enabling easy extension and testing across different phases and object types.

# 🗂️ Project Structure

```bash
src/
├── api/
│   ├── ApiUtils.ts            # Helper utilities (e.g., delay)
│   └── MegaverseApi.ts        # Wrapper around Crossmint APIs
│
├── common/
│   ├── Error.ts               # Centralized, i18n-friendly error messages
│   └── phase2.json            # Cached static goal layout for Phase 2
│
├── core/
│   ├── MegaverseObject.ts     # Base object interface and constants
│   ├── MegaverseService.ts    # Core service to manage object creation and syncing
│   ├── Polyanet.ts            # POLYanet object definition
│   ├── Soloon.ts              # SOLoon object with color enum
│   ├── Cometh.ts              # comETH object with directional enum
│   └── phase/
│       ├── MegaverseBasePhase.ts  # Abstract class for shared phase logic
│       ├── MegaversePhase1.ts     # Phase 1: X-pattern of Polyanets
│       └── MegaversePhase2.ts     # Phase 2: Goal-based object mapping
│
└── Megaverse.ts              # Main entry point: selects and runs phases

```

# 🧠 Architecture Overview

1. MegaverseObject: Base class representing all types of placeable objects in the Megaverse.

2. MegaverseService. Responsible for:

    - Creating different object types (Polyanet, Soloon, Cometh)
    - Adding objects to a grid
    - Mapping objects to server-recognized format
    - Calling the Crossmint API to sync layout

3. Phases (MegaversePhase1, MegaversePhase2). Each phase:

    - Inherits from MegaverseBasePhase
    - Implements a custom mapObjects() method defining its own grid logic
    - Renders the layout in the console for easy visualization
    - (Optionally) syncs the layout to Crossmint’s server via the service

4. Megaverse.ts - Main runner file that:
    - Instantiates the API and service
    - Selects which phase to run
    - Triggers mapping and (optionally) syncing logic

# First-time setup

npm install

# Start the project

npm start
