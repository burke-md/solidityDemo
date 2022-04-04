const { ethers, upgrades } = require('hardhat');

async function main () {
  const Box = await ethers.getContractFactory('Box');
  console.log(`deploying Box..`);
  try {
    const box = await upgrades.deployProxy(Box, [42], {initializer: 'store'});
    await box.deployed();
    console.log(`Box deployed to: ${box.address}`);
  } catch (err) {
    console.log(`An error has occured while deploying a contract.`)
  }

}

main();