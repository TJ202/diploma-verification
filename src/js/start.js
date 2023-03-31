window.addEventListener("load", async () => {
  // Modern dapp browsers...
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
      // Request account access if needed
      await ethereum.enable();
      await window.ethereum.enable();
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      var user = document.getElementById("user");
      window.ethereum.on("accountsChanged", function (accounts) {
        console.log("acct is " + accounts[0]);
        user.innerHTML = account;
        alert("Account changed...");
        location.reload();
      });
      user.innerHTML = account;
    } catch (error) {
      // User denied account access...
      alert("User Rejected transaction!");
      console.log(error);
    }
  }
  // Non-dapp browsers...
  else {
    alert(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
});
