pragma solidity ^0.7.0;

contract NewToken{
    address owner;
    mapping (address => uint256) public balances;

    constructor() public {
        owner = msg.sender;
        //Mint 1000 tokens, given to the owner. All other maping values default to 0 => Nobody else owns any "newTokens".
        balances[owner] = 1000;
    }

    function transfer(uint amount, address recipient) public{
        require(balances[msg.sender] >= amount);//Throw error if sender has insufficient funds.
        require(balances[msg.sender] - amount <= balances[msg.sender]);//Prevent underflow
        require(balances[recipient] + amount >= balances[recipient]);//Prevent overflow
        balances[msg.sender] -= amount;
        balances[recipient] += amount;
    }
}