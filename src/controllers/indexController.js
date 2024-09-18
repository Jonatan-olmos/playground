const { leerJSON } = require("../database")

module.exports ={
    index :(req, res) =>{
       
       
        return res.render('index',
         
    
        )
    },
    inicio :(req, res) =>{
        const curso = leerJSON('curso')
        //return res.send(products)
        return res.render('paginas/inicio',
            {curso}
    
        )
    },
    principalCursos :(req, res) =>{
        const cursos = leerJSON('curso')
       
        //return res.send(products)
        return res.render('paginas/principalCursos',
            {cursos}
    
        )
    },
    contenido :(req, res) =>{
        const{id} = req.params;
        const paginas = leerJSON('paginas')
       
        //return res.send(products)
        const items = [/* Tu array de objetos */];
        const currentIndex = items.findIndex(item => item.id === id);
        const nextId = currentIndex < items.length - 1 ? items[currentIndex + 1].id : null;
        const pagina = paginas.find(pagina => pagina.id == id)
  
          return res.render('paginas/contenido',{...pagina, nextId})
    },
    consola :(req, res) =>{
       
        //return res.send(products)
        return res.render('consolas/consola',
            ({title : 'hola'})
    
        )
    },
    
}