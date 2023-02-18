window.addEventListener("load", solve);

function solve() {
  const firstNameElement = document.querySelector("#first-name");
  const lastNameElement = document.querySelector("#last-name");
  const numberOfPeopleElement = document.querySelector("#people-count");
  const fromDateElement = document.querySelector("#from-date");
  const daysElement = document.querySelector("#days-count");
  const nextStepButton = document.querySelector("#next-btn");
  const ulTicket = document.querySelector(".ticket-info-list");
  const ulConfirm = document.querySelector('.confirm-ticket')
  const main = document.querySelector('#main')
  const snowflakes = document.querySelector('.snowflakes')

  nextStepButton.addEventListener("click", buyTicket);

  function buyTicket(event) {
    event.preventDefault();

    if (
      firstNameElement.value === "" ||
      lastNameElement.value === "" ||
      numberOfPeopleElement.value === "" ||
      fromDateElement.value === "" ||
      daysElement.value === ""
    ) {
      return;
    }

    console.log(firstNameElement.value);

    const firstName = firstNameElement.value;
    const lastName = lastNameElement.value;
    const numberOfPeople = numberOfPeopleElement.value;
    const fromDate = fromDateElement.value;
    const days = daysElement.value;

    const liInput = document.createElement("li");
    liInput.innerHTML = `
      <article> 
<h3>Name: ${firstName} ${lastName}</h3>
<p>From date: ${fromDate}</p>
<p>For ${days} days</p>
<p>For ${numberOfPeople} people</p>
</article>
<button class="edit-btn">Edit</button>
<button class="continue-btn">Continue
</button>`;
    ulTicket.appendChild(liInput);

    const editButton = document.querySelector(".edit-btn");
    const continueButton = document.querySelector(".continue-btn");

    firstNameElement.value = ""
    lastNameElement.value = "" 
    numberOfPeopleElement.value = ""
    fromDateElement.value = ""
    daysElement.value = ""

    nextStepButton.disabled = true

    editButton.addEventListener("click", edit);
    continueButton.addEventListener('click', confirm)



    function edit() {
        firstNameElement.value = firstName
        lastNameElement.value = lastName
        numberOfPeopleElement.value = numberOfPeople
        fromDateElement.value = fromDate
        daysElement.value = days

        liInput.innerHTML = ''

        nextStepButton.disabled = false
    }

    function confirm(){

        liInput.innerHTML = ''

        const liConfirm = document.createElement("li");
        liConfirm.innerHTML = `
          <article> 
    <h3>Name: ${firstName} ${lastName}</h3>
    <p>From date: ${fromDate}</p>
    <p>For ${days} days</p>
    <p>For ${numberOfPeople} people</p>
    </article>
    <button class="confirm-btn">Confirm</button>
    <button class="cancel-btn">Cancel</button>`;

    ulConfirm.appendChild(liConfirm)
    const cancelButton = document.querySelector('.cancel-btn')
    const confirmButton = document.querySelector('.confirm-btn')

    cancelButton.addEventListener('click', cancel)
    confirmButton.addEventListener('click', confirmTwo)

    function cancel(){
        liConfirm.innerHTML = ''
        nextStepButton.disabled = false
    }


    function confirmTwo(){
        main.remove()

        const h1 = document.createElement('h1')
        h1.setAttribute("id", 'thank-you')
        h1.textContent = 'Thank you, have a nice day!'

        const backButton = document.createElement('button')
        backButton.setAttribute('id', 'back-btn')
        backButton.textContent = 'Back'

        snowflakes.appendChild(h1)
        snowflakes.appendChild(backButton)

        backButton.addEventListener('click', back)

        function back(){
            location.reload();
        }

    }

    }

  }
}
