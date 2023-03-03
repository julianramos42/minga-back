const controller = {

    read_all: (req, res) => { 
       
        return res
            .status(200) 
            .json({
                success: true,
                message: 'aca deberias ver todos los capitulos'
            })
    }
}

export default controller