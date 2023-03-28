import mercadopago from "mercadopago";

mercadopago.configure({ access_token: process.env.PROD_ACCESS_TOKEN });
const controller = {
    create: (req, res) => {

        let data = req.body[0]

        let preference = {
            items: [
                {
                    id: data.id,
                    title: data.title,
                    currency_id: "ARS",
                    unit_price: data.price,
                    quantity: 1
                }
            ],
            payer: {
                name: req.user.name
            },
            back_urls: {
                success: "https://jr-minga-front.vercel.app/",
                failure: "",
                pending: "",
            },
            auto_return: "approved",
            binary_mode: true,
        };

        mercadopago.preferences
            .create(preference)
            .then((response) => res.status(200).json({ response }))
            .catch((error) => res.status(400).json({ error: error.message }));
    }
}

export default controller // exporta el controlador