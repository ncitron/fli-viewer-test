import { ethers } from "ethers";
const fliABI = require("./fliViewerABI.json");

require("dotenv").config();

async function run() {
  const provider = ethers.providers.getDefaultProvider(process.env.JSON_RPC_URL);
  const viewer = new ethers.Contract("0xFDa5AE4d7d466f466735B9AEc6eA83841260FDC7", fliABI, provider);

  const result = await viewer.callStatic.shouldRebalanceWithBounds(
    ethers.utils.parseEther("1.8"),
    ethers.utils.parseEther("2.2")
  );

  console.log(result);
}

run();