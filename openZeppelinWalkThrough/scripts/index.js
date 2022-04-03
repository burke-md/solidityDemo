const { ethers } = require("hardhat");

async function main () {
  const accounts = await ethers.provider.listAccounts();
  console.log(accounts);

  const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
  const Box = await ethers.getContractFactory('Box');
  const box = await Box.attach(address);

  const value = await box.retrieve();
  console.log(`Box value is: ${value}`);

  await box.store(23);

// Call the retrieve() function of the deployed Box contract
const value2 = await box.retrieve();
console.log('Box value is', value2.toString());
}

main ()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  })