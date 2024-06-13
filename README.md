// SPDX-License-Identifier: MIT
This line specifies that the contract is licensed under the MIT License

//pragma solidity 0.8.18;
This line specifies that the contract is written for Solidity version 0.8.18.

/*contract MyToken {
string public tokenName = "solidity";
string public tokenAbbrv = "SDTY";
uint public totalSupply = 0;*/
decleration with three public state variables
tokenName: A string that stores the name of the token, initialized to "solidity".
tokenAbbrv: A string that stores the abbreviation of the token, initialized to "SDTY".
totalSupply: An unsigned integer that stores the total supply of the token, initialized to 0.

//mapping(address => uint) public balances;
This line declares a mapping that associates each address with its token balance. The balances mapping is public, so it has an automatically generated getter function.
//The  mint function allows the creation of new tokens. It takes two parameters:

_to: The address to which the new tokens will be credited.

The burn function allows the destruction of tokens. It takes two parameters:

_from: The address from which the tokens will be burned.
_value: The amount of tokens to be burned




