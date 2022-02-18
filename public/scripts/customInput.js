const form = document.querySelector('.custom-payment-form');
const input = document.querySelector('.custom-input')
const errorOutput = document.querySelector('.validation')


form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (input.value <= 0) {
        errorOutput.textContent = "*Note: Minimum of $5 for online donations."
        errorOutput.style.display = 'block';
        errorOutput.style.color = 'Red'
    } else {
        errorOutput.textContent = 'Redirecting you to the checkout page . . .'
        errorOutput.style.color = 'Green'
    }
    const formattedValue = input.value * 100
    const product = {
        sku: `Amount: $${ input.value }`,
        name: `Amount: $${ input.value }`,
        amount: formattedValue,
        currency: "USD",
        description: `Give a gift to New Life Ministries`,
        image: "https://drive.google.com/uc?export=view&id=1H56UtNBx8tqvZ7SBxTFQt6X840bAOfXE"
    }
    const response = await fetch('/.netlify/functions/custom-checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    }).then((res) => res.json());
    const stripe = Stripe(response.publishableKey);
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
