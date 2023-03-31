// See <http://truffleframework.com/docs/advanced/configuration>
// to customize your Truffle configuration!

require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = process.env.MNEMONIC;

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },    
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://public-node.rsk.co', 0, 1, true, "m/44'/137'/0'/0/"),
      network_id: 30,
      gasPrice: 0x387EE40
    },
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://public-node.testnet.rsk.co', 0, 10, true, "m/44'/37310'/0'/0/"),
      network_id: 31,
      gasPrice: 0x387EE40
    },
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {  },

  // Configure your compilers
  compilers: {  
    solc: { } 
  }
}
