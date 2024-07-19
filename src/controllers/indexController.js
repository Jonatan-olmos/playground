
module.exports ={
    index :(req, res) =>{
       
        //return res.send(products)
        return res.render('index',
            ({title : 'hola'})
    
        )
    },
    inicio :(req, res) =>{
       
        //return res.send(products)
        return res.render('paginas/inicio',
            ({title : 'hola'})
    
        )
    },
    principalCursos :(req, res) =>{
       
        //return res.send(products)
        return res.render('paginas/principalCursos',
            ({title : 'hola'})
    
        )
    },

    
}