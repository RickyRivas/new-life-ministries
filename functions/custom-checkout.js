// init stripe with secret API key
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-03-02',
    maxNetworkRetries: 2,
});

//
exports.handler = async (e) => {
    // grab the imported product
    const product = JSON.parse(e.body)

    // create session
    const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_address_collection: {
            allowed_countries: ['US', 'CA'],
        },

        //
        success_url: `${process.env.URL}/success.html`,
        cancel_url: `${process.env.URL}/cancel.html`,
        line_items: [{
            price_data: {
                currency: 'usd',
                unit_amount: product.amount,
                product_data: {
                    name: product.name,

                    images: [product.image],
                },
            },
            quantity: validatedQuantity,
        }, ],
        metadata: {
            items: JSON.stringify([{
                sku: product.sku,
                name: product.name,

            }, ]),
        },
    })
    return {
        statusCode: 200,
        body: JSON.stringify({
            sessionId: session.id,
            publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
        }),
    };
}