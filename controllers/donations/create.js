import mercadopago from "mercadopago";

mercadopago.configure({ access_token: 'TEST-1193824153748985-032315-1b0abb3e5645afe0a663db33776ef604-1337234795' });
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
                success: "http://localhost:3000/",
                failure: "",
                pending: "",
            },
            auto_return: "approved",
            binary_mode: true,
        };
        console.log(preference)

        mercadopago.preferences
            .create(preference)
            .then((response) => res.status(200).json({ response }))
            .catch((error) => res.status(400).json({ error: error.message }));
    }
}
export default controller // exporta el controlador