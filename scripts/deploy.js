const hre = require("hardhat");
const CONTRACT_NAME = process.env.CONTRACT_NAME || "Voting";

async function main() {
  const Voting = await hre.ethers.getContractFactory(CONTRACT_NAME);
  const voting = await Voting.deploy();

  await voting.deployed();

  console.log(`Voting deployed to ${voting.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
