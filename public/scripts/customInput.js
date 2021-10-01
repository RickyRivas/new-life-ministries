const form = document.querySelector('.custom-payment-form');
const input = document.querySelector('.custom-input')
const output = document.querySelector('.payment-output')


form.addEventListener('submit', async (e) => {
    
    // Prev Def
    e.preventDefault();

    // grab the user custom amount
    output.textContent = input.value;

    // format the value to pennies so Stripe can accept the value
    const formattedValue = input.value * 100

    // create object upon click event 
    const newProduct = {
        sku: "Custom Amount",
        name: "Custom Amount",
        amount: formattedValue,
        currency: "USD",
        description: `Give a gift of ${ input.value } to New Life Ministries`,
        image: "https://drive.google.com/uc?export=view&id=1H56UtNBx8tqvZ7SBxTFQt6X840bAOfXE"
    }
 
    // Create Checkout 
    const response = await fetch('/.netlify/functions/create-checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
    }).then((res) => res.json());

    // Init Stripe with API Publishable key
    const stripe = Stripe(response.publishableKey);

    // Error Handling
    const { error } = await stripe.redirectToCheckout({
           sessionId: response.sessionId,
    });

    if (error) {
           document
               .querySelectorAll('button')
               .forEach((button) => (button.disabled = false));
           console.error(error);
       }
})