//your JS code here. If required.
document.getElementById('votingForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nameInput = document.getElementById('name');
  const ageInput = document.getElementById('age');

  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value.trim(), 10);

  if (!name || isNaN(age)) {
    alert("Please enter valid details.");
    return;
  }

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000);
  })
  .then(() => {
    alert(`Welcome, ${name}. You can vote.`);
  })
  .catch(() => {
    alert(`Oh sorry ${name}. You aren't old enough.`);
  });
});