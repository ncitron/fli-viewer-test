import Web3 from "web3";
const fliABI = require("./fliViewerABI.json");

require("dotenv").config();

async function run() {

  const web3 = new Web3(process.env.JSON_RPC_URL || "");

  const viewer = new web3.eth.Contract(fliABI, "0xFDa5AE4d7d466f466735B9AEc6eA83841260FDC7");

  const result = await viewer.methods.shouldRebalanceWithBounds(
    web3.utils.toWei("1.8"),
    web3.utils.toWei("2.2")
  ).call();

  console.log(result);
}

run();