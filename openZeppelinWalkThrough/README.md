# Open Zeppelin 

## Deploying and interacting

With a local blockchain node running in one terminal window, we will open another to use the hardhat CLI. We can now call contract functions and read from the block chain.

https://user-images.githubusercontent.com/22263098/161449667-6f218174-901f-4004-ad6c-c3d075fb98d9.mov

## Upgrading contracts


Using the OpenZeppelin upgrades plugin we are able to develop new functionality within the box contract and update it on the local blockchain. 
Under the hood this plugin utalized three contracts.
 - The implementation contract (The written contract)
 - The proxy admin contract
 - The proxy contract(This is the contract that users actually interact with)