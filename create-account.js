function createAccount(pin, amount) {
  let accountPin = pin;
  let accountBalance = amount;
  return {
    checkBalance: function (enteredPin) {
      if (accountPin === enteredPin) {
        if (accountBalance === undefined) {
          return `$${0}`;
        } else {
          return `$${accountBalance}`;
        }
      } else {
        return "Invalid PIN.";
      }
    },
    deposit: function (enteredPin, depositAmount) {
      if (accountPin === enteredPin) {
        accountBalance += depositAmount;
        return `Succesfully deposited $${depositAmount}. Current balance: ${accountBalance}.`;
      } else {
        return "Invalid PIN.";
      }
    },
    withdraw: function (enteredPin, withdrawAmount) {
      if (accountPin === enteredPin) {
        if (withdrawAmount <= accountBalance) {
          accountBalance -= withdrawAmount;
          return `Succesfully withdrew $${withdrawAmount}. Current balance: $${accountBalance}.`;
        } else {
          return `Withdrawal amount exceeds account balance. Transaction cancelled.`;
        }
      } else {
        return "Invalid PIN.";
      }
    },
    changePin: function (enteredPin, newPin) {
      if (accountPin === enteredPin) {
        accountPin = newPin;
        return "PIN successfully changed!";
      } else {
        return "Invalid PIN.";
      }
    },
  };
}

module.exports = { createAccount };
