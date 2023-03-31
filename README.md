# Diploma Creation and Verification
ValidateIt leverages the power of blockchain technology to provide secure and tamper-proof Certificate Verification and Creation services. With ValidateIt, universities can easily create digital certificates that can be verified by anyone using blockchain technology. This ensures that the certificates are authentic and cannot be altered or tampered with in any way. 

ValidateIt also allows for easy sharing of certificates, making it a valuable tool for businesses, educational institutions, and individuals alike. With its user-friendly interface and advanced security features, ValidateIt will soon become the go-to platform for reliable and secure certificate verification and creation.

## How to Run
- Clone this repository
- Create a .env fine with required inputs
- Start your Ganache Server (Quickstart in Ganache GUI)
- Use `truffle deploy` to deploy the [smart contract](contracts/Certificate.sol)
- Launch [`index.html`](src/html/index.html) with Live Server 
- Open Metamask and import the account with which the contract was deployed (University account) as well as another dummy account (Company or Student account) from the Ganache default accounts
- Now you are ready to test `createCertificate()` and `verifyCertificate()` functions of the [smart contract](contracts/Certificate.sol)
- Add the details necessary and click on "Create" or "Verify" on respective pages 
- Appropriate alerts will show access restrictions of functions 
