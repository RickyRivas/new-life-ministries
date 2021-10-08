function format(amount, currency) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
    }).format((amount / 100).toFixed(2));
}

async function handleSubmit(event) {
    event.preventDefault();
    document
        .querySelectorAll('button')
        .forEach((button) => (button.disabled = true));

    const form = new FormData(event.target);
    const data = {
        sku: form.get('sku')
    };

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
// Dynamically add products from json file to dom
async function loadProducts() {
    if (!'content' in document.createElement('template')) {
        console.error('Your browser doesn’t support HTML template elements.');
        return;
    }

    const data = await fetch('/.netlify/functions/get-products')
        .then((res) => res.json())
        .catch((err) => console.error(err));

    const products = document.querySelector('.products');
    const template = document.querySelector('#product');

    data.forEach((product) => {
        const container = template.content.cloneNode(true);

        container.querySelector('h2').innerText = product.name;
        container.querySelector('[name=sku]').value = product.sku;

        const form = container.querySelector('form');
        form.addEventListener('submit', handleSubmit);

        products.appendChild(container);
    });
}

loadProducts();