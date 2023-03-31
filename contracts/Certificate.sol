// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

contract Certificate 
{
    // Defining variable and map
    address private owner;
    mapping(bytes32 => bool) map;

    // Modifier to check if caller is owner
    modifier isOwner() 
    {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }

    // Constructor to set contract deployer as owner
    constructor() public
    {
        // console.log("Owner contract deployed by:", msg.sender);
        owner = msg.sender; // 'msg.sender' is sender of current call, contract deployer for a constructor
    }

    function generateHash(string memory _college_name, string memory _student_name, string memory _degree, string memory _day, string memory _month, string memory _year) private pure returns(bytes32)
    {
        return keccak256(abi.encode(_college_name, _student_name, _degree, _day, _month, _year));
    }

    // Function to create a certificate (can be accessed only by the University)
    function createCertificate(string memory _college_name, string memory _student_name, string memory _degree, string memory _day, string memory _month, string memory _year) public isOwner
    {
        bytes32 hash = generateHash(_college_name, _student_name, _degree, _day, _month, _year);
        map[hash]=true;
        // return map[hash];
        // console.log("Certificate for ", _student_name, " created successfully!");
    }

    // Function to verify a certificate (can be accessed by anyone)
    function verifyCertificate(string memory _college_name, string memory _student_name, string memory _degree, string memory _day, string memory _month, string memory _year) public view returns (bool)
    {
        bytes32 hash = generateHash(_college_name, _student_name, _degree, _day, _month, _year);
        if(map[hash]==true)
            return true;
        else
            return false;
    }

    // Function to return the owner of the contract (University's address)
    function getOwner() external view returns (address) 
    {
        return owner;
    }
}