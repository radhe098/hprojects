import * as fcl from "@onflow/fcl";
import './config';
const authenticate = async () => {
    await fcl.authenticate();
    console.log("hello");
}
    export {authenticate};