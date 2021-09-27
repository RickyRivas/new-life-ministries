
// custom input
const customInputForm = document.querySelector('.custom-input-form')

async function handleSubmit(e) {
    e.preventDefault();
    document
        .querySelectorAll('button')
        .forEach((button) => (button.disabled = true));

    
    // get the number inputs value and format the value to cents 
    const enteredAmount = document.querySelector('.custom-amount').value
    const formattedAmount = Math.round(enteredAmount * 100);

    const product = {
        sku: "custom amount",
        name: 'custom amount',
        amount: formattedAmount,
        currency: "USD"
    }
    // new form 
    const form = new FormData(product);
    const data = {
        sku: form.get(product.sku),
        //quantity: Number(form.get('quantity')),
    };

    // create checkout
    const response = await fetch('/.netlify/functions/create-checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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
}


customInputForm.addEventListener('submit', handleSubmit)
//  => {

    // disable all buttons 
    // document.querySelectorAll('button').forEach((button) => (button.disabled = true));
    
    // // Prevent default form sub
    // e.preventDefault();

    // get the number inputs value and format the value to cents 
    // const enteredAmount = document.querySelector('.custom-amount').value
    // const formattedAmount = Math.round(enteredAmount * 100);

    // const product = {
    //     sku: "custom amount",
    //     name: 'custom amount',
    //     amount: formattedAmount,
    //     currency: "USD"
    // }
    // log 
    // console.log(product)
// })