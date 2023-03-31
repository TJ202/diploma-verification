var contract;
const contractAddress = "0xAFceE4E103f85e0DdF5A1d01DF52e2D4e61Fe5d0";

// Modern dapp browsers...
if (window.ethereum) {
  window.web3 = new Web3(ethereum);
}
// Non-dapp browsers...
else {
  alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
}

const getCurrentOwner = async () => {
  contract = new web3.eth.Contract(abi, contractAddress);
  let ownerID = await contract.methods.getOwner().call();
  return ownerID;
};

const printCurrentOwner = async () => {
  await ethereum.enable();
  var addr = await getCurrentOwner();
  var elm = document.getElementById("ownerID");
  elm.innerHTML = addr;
};

printCurrentOwner();

const createDiploma = async () => {
  await window.ethereum.enable();
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const account = accounts[0];
  window.ethereum.on("accountsChanged", function (accounts) {
    console.log("acct is " + accounts[0]);
  });
  contract = new web3.eth.Contract(abi, contractAddress);
  var colname = document.getElementById("colName");
  var sname = document.getElementById("sname");
  var degree = document.getElementById("degree");
  var day = document.getElementById("day");
  var month = document.getElementById("month");
  var year = document.getElementById("year");
  try {
    let create = await contract.methods
      .createCertificate(
        colname.value,
        sname.value,
        degree.value,
        day.value,
        month.value,
        year.value
      )
      .send({ from: account });
    console.log(create);
    alert("Certificate for Student " + sname.value + " created Successfully!");
  } catch {
    alert("You are not authorised to create a Certificate");
  }
};

const verifyDiploma = async () => {
  contract = new web3.eth.Contract(abi, contractAddress);
  var colname = document.getElementById("colName");
  var sname = document.getElementById("sname");
  var degree = document.getElementById("degree");
  var day = document.getElementById("day");
  var month = document.getElementById("month");
  var year = document.getElementById("year");
  // console.log(colname.value);
  let verify = await contract.methods
    .verifyCertificate(
      colname.value,
      sname.value,
      degree.value,
      day.value,
      month.value,
      year.value
    )
    .call();
  if (verify == true)
    alert("Student " + sname.value + "'s details are Correct!");
  else alert("Student " + sname.value + "'s details are Incorrect!");
  console.log(verify);
};
