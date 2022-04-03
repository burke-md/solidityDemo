async function main () {
  const Box = await ethers.getContractFactory('Box');
  console.log(`Deployingf Box...`);
  const box = await Box.deploy();
  await box.deployed();
  console.log(`Box deployed to: `, box.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });