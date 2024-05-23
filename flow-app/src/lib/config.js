import * as fcl from "@onflow/fcl";

// emulator
const accessNode ="http://127.0.0.1:8888";
const discoveryNode ="http://localhost:8701/fcl/authn"

// testnet

fcl.config()
.put('accessNode.api', accessNode)
.put('discovery.wallet', discoveryNode)