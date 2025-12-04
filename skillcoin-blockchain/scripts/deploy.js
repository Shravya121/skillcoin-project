const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying SkillCoin...");

  const SkillCoin = await ethers.getContractFactory("SkillCoin");
  const skillCoin = await SkillCoin.deploy();
  await skillCoin.deployed();

  console.log("SkillCoin deployed at:", skillCoin.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
