const { erhers, upgrades, ethers } = require('hardhat');

async function main () {
  const Box2 = await ethers.getContractFactory('Box2');
  console.log(`Upgrading Box...`);
  await upgrades.upgradeProxy('0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6', Box2);
  console.log(`Box upgraded`);
}

main();