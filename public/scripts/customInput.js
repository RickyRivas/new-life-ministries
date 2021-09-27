const customInput = document.querySelector('.custom-input')


// format function 
function format(amount, currency) {
       return new Intl.NumberFormat('en-US', {
           style: 'currency',
           currency,
       }).format((amount / 100).toFixed(2));
}
   
customInput.addEventListener('submit', async(event) => {
    // Prevent defaul form sub
    event.preventDefault();

    // get the number inputs value
    const enteredAmount = document.querySelector('.custom-amount').value

    //
    document.querySelectorAll('button').forEach((button) => (button.disabled = true));
    // set the form data to the event.target
    const form = new FormData(event.target);

    // get the sku and assign it to data
    const data = enteredAmount;

    // response should fetch the create-checkout function from 'functions'
    // we're posting the new data from create-checkout 
    const response = await fetch('/.netlify/functions/create-checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());
    // grab the pubslishable key from the response 
    const stripe = Stripe(response.publishableKey);
    const { error } = await stripe.redirectToCheckout({
        sessionId: response.sessionId,
    });

    if (error) {
        document.querySelectorAll('button').forEach((button) => (button.disabled = false));
        console.error(error);
    }

     // log 
    console.log(event, enteredAmount, data)
})