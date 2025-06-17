document.getElementById("votingForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form refresh

  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value.trim(), 10);

  if (!name || isNaN(age)) {
    alert("Please enter valid details.");
    return;
  }

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  })
    .then(message => alert(message))
    .catch(error => alert(error));
});
