//your JS code here. If required.
<script>
    const form = document.getElementById("voteForm");
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");
    const button = document.getElementById("btn");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form from refreshing the page

      const name = nameInput.value.trim();
      const age = parseInt(ageInput.value.trim());

      // Validation check
      if (!name || isNaN(age)) {
        alert("Please enter valid details.");
        return;
      }

      // Create and handle promise
      const checkAge = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (age > 18) {
            resolve(`Welcome, ${name}. You can vote.`);
          } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }
        }, 4000); // 4-second delay
      });

      checkAge
        .then(message => alert(message))
        .catch(error => alert(error));
    });