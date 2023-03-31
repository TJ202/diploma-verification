var abi = [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_college_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_student_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_degree",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_day",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_month",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_year",
          "type": "string"
        }
      ],
      "name": "createCertificate",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "_college_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_student_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_degree",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_day",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_month",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_year",
          "type": "string"
        }
      ],
      "name": "verifyCertificate",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]