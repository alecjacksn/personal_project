module.exports = {
    
    
        itemClicked: ( req, res, next ) => {
            let { params } = req
            req.app.get('db').itemClicked( params.id ).then( filtered => res.status(200).send( filtered ) )
                             
        }
        
        // itemClickedPictures: (req, res, next) => {
        //     let { params } = req.body
        //     // console.log("image id: ", params.prodid)
        //     req.app.get('db').images.itemClickedPictures(params.id)
        //                      .then(pics => res.status(200).send(pics))
        // }
    
    
 
    }