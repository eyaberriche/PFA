const hre = require("hardhat");

async function main() {
  const ServiceStore = await hre.ethers.getContractFactory("ServiceStore");
  const serviceStore = await ServiceStore.deploy();

  await serviceStore.deployed();

  console.log("ServiceStore deployed to:", serviceStore.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
