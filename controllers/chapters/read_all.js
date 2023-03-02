const controller = {

    read_all: (req, res) => { /* funcion que se va a ejecutar cada vez que se llame al endpoint */
        //console.log(req)
        return res
            .status(200) /* 200: exito para la lectura */
            .json({
                success: true,
                message: 'aca deberias ver todos los capitulos'
            })
    }
}

export default controller