const form = document.querySelector('.custom-payment-form');
const input = document.querySelector('.custom-input')
// const output = document.querySelector('.payment-output')
const errorOutput = document.querySelector('.validation')


form.addEventListener('submit', async (event) => {

    // Prev Def
    event.preventDefault();

    // grab the user custom amount
    // output.textContent = input.value;

    // Number Input Validation
    if (input.value <= 0) {
        errorOutput.textContent = "***Online donation must be greater than or equal to $5"
        errorOutput.style.display = 'block';
        errorOutput.style.color = 'Red'
    } else {
        errorOutput.textContent = 'Redirecting you to the checkout page . . .'
        errorOutput.style.color = 'Green'
    }

    // format the value to pennies so Stripe can accept the value
    const formattedValue = input.value * 100

    // create object upon click event 
    const product = {
        sku: `Amount: $${ input.value }`,
        name: `Amount: $${ input.value }`,
        amount: formattedValue,
        currency: "USD",
        description: `Give a gift to New Life Ministries`,
        image: "https://drive.google.com/uc?export=view&id=1H56UtNBx8tqvZ7SBxTFQt6X840bAOfXE"
    }

    // Create Checkout 
    const response = await fetch('/.netlify/functions/custom-checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    }).then((res) => res.json());

    // Init Stripe with API Publishable key
    const stripe = Stripe(response.publishableKey);


    // Error Handling
    const {
        error
    } = await stripe.redirectToCheckout({
        sessionId: response.sessionId,
    });

    if (error) {
        document
            .querySelectorAll('button')
            .forEach((button) => (button.disabled = false));
        console.error(error);
    }
})

// donation popup 

const popupOverlay = document.querySelector('.donate-popup-overlay');
const closePopup = document.querySelector('.close-popup');
const popupTrigger = document.querySelector('.other-popup button');

// trigger popup
popupTrigger.addEventListener('click', () => {
    popupOverlay.style.display = 'flex';
})
// close popup 
closePopup.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
})

