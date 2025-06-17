//your JS code here. If required.
document.getElementById('votingForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from refreshing

  const name = document.getElementById('name').value.trim();
  const age = parseInt(document.getElementById('age').value.trim());

  if (!name || isNaN(age)) {
    alert("Please enter valid details.");
    return;
  }

  const votingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  votingPromise
    .then((message) => {
      alert(message);
    })
    .catch((errorMessage) => {
      alert(errorMessage);
    });
});
