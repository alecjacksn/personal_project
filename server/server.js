require('dotenv').config()

const express = require('express')
    , bodyParser = require('body-parser')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive')
    , session = require('express-session')
    , aws = require('aws-lib')
    , cors = require('cors')
    , request = require('request')
    , amazon = require('amazon-product-api')
    , listingsController = require('./controllers/listings_controller')



const client = amazon.createClient({
    awsTag: process.env.AMAZONTAG,
    awsId: process.env.AMAZONACCESSKEY,
    awsSecret: process.env.AMAZONSECRETKEY
})


const app = express();
app.use(bodyParser.json())
app.use(cors())

app.use(express.static(__dirname + '/../build'))




massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db);
})

//                MIDDLEWARE                    //


app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    expires: 172800000
}));

app.use(passport.initialize());
app.use(passport.session());



passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function (accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db');
    db.users.find_user(profile.id).then(user => {
        if (user[0]) {
            return done(null, user[0]);
        } else {
            db.users.create_user([profile.displayName, profile.lastname, profile.id, profile.emails[0].value])
                .then(user => {
                    return done(null, user[0]);
                })
        }
    })
}));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    // app.get('db').users.find_session_user([user[0].id]).then(user => {
    //     return done(null, user[0]);
    // })
    done(null, user);

    //GET USER AND CART HERE
});


app.get('/auth', passport.authenticate('auth0'));


app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/',
    failureRedirect: 'http://localhost:3000/#/'
}))

app.get('/auth/me', (req, res, next) => {
    if (!req.user) {
        return res.status(404).send('User not found');
    } else {
        return res.status(200).send(req.user);
    }
})

app.get('/auth/logout', (req, res) => {
    console.log('log out')
    req.logOut();
    return res.redirect(302, 'http://localhost:3000/');
})

// app.get('http://webservices.amazon.com/onca/xml?AWSAccessKeyId=AKIAI27OAG776JDUVLYQ&AssociateTag=personalproje-20&Keywords=smart%20light%20switch&Operation=ItemSearch&ResponseGroup=Images%2CItemAttributes%2CItemIds%2COfferFull%2COfferListings%2COffers%2CReviews&SearchIndex=Electronics&Service=AWSECommerceService&Timestamp=2017-09-11T20%3A16%3A59.000Z&Signature=zystaB9ef%2FQT6OvHqfvIowhPPPk7M2S%2FD2Mh8HNTMyQ%3D'
// , (req, res, next) => {
//    res.status(200).send(res)
// })







//////////////////////////              SERVER GETS                   ////////////////////////////////



app.get('/api/products', (req, res, next) => {
    req.app.get('db').allProducts().then(prod => res.status(200).send(prod))
})

app.get('/api/productimages', (req, res, next) => {
    req.app.get('db').images.getImagesForProducts().then(image => res.status(200).send(image))
})

app.get('/api/products/lights', (req, res, next) => {
    req.app.get('db').allLights().then(response => res.status(200).send(response))
})

app.get('/api/products/lights/images', (req, res, next) => {
    req.app.get('db').images.lightsPictures().then(response => res.status(200).send(response))
})

app.get('/api/item/:id', listingsController.itemClicked);

app.get('/api/item/image/:id', (req, res, next) => {
    // let { prodid } = req.body
    req.app.get('db').images.itemClickedPictures(req.params.id).then(response => res.status(200).send(response))
});


app.get('/api/products/light_switch', (req, res, next) => {
    req.app.get('db').light_switch().then(prod => res.status(200).send(prod))
})

app.get('/api/products/light_switch/images', (req, res, next) => {
    req.app.get('db').images.lightSwitchPictures().then(response => res.status(200).send(response))
})


app.get('/api/products/outlet', (req, res, next) => {
    req.app.get('db').outlet().then(prod => res.status(200).send(prod))
})

app.get('/api/products/outlet/images', (req, res, next) => {
    req.app.get('db').images.outletPictures().then(response => res.status(200).send(response))
})


app.get('/api/products/thermostat', (req, res, next) => {
    req.app.get('db').thermostat().then(prod => res.status(200).send(prod))
})

app.get('/api/products/thermostat/images', (req, res, next) => {
    req.app.get('db').images.thermostatPictures().then(response => res.status(200).send(response))
})


app.get('/api/products/smart_speaker', (req, res, next) => {
    let { query } = req
    req.app.get('db').smartSpeaker(query.producttype).then(prod => res.status(200).send(prod))
})

app.get('/api/products/smart_speaker/images', (req, res, next) => {
    req.app.get('db').images.smartSpeakerPictures().then(response => res.status(200).send(response))
})


//////////////////////////              ALEXA                   ////////////////////////////////


app.get('/api/alexa', (req, res, next) => {
    req.app.get('db').filter.allAlexa().then(response => res.status(200).send(response))
})

app.get('/api/alexaimages', (req, res, next) => {
    req.app.get('db').images.alexaImages().then(image => res.status(200).send(image))
})


//////////////////////////              GOOGLE                   ////////////////////////////////


app.get('/api/google', (req, res, next) => {
    req.app.get('db').filter.allGoogle().then(response => res.status(200).send(response))
})

app.get('/api/googleimages', (req, res, next) => {
    req.app.get('db').images.googleImages().then(image => res.status(200).send(image))
})


//////////////////////////              HOMEKIT                   ////////////////////////////////


app.get('/api/homekit', (req, res, next) => {
    req.app.get('db').filter.homeKit().then(response => res.status(200).send(response))
})

app.get('/api/homekitimages', (req, res, next) => {
    req.app.get('db').images.homeKitimages().then(image => res.status(200).send(image))
})



//////////////////////////              BRANDS                   ////////////////////////////////



app.get('/api/brands/wemo', (req, res, next) => {
    req.app.get('db').brands.Wemo().then(response => res.status(200).send(response))
})


app.get('/api/brands/wemo/images', (req, res, next) => {
    req.app.get('db').brands.WemoImages().then(image => res.status(200).send(image))
})

app.get('/api/brands', (req, res, next) => {
    let { query } = req

    req.app.get('db').brands.Wemo(query.brand).then(filtered => res.status(200).send(filtered))

})



app.get('/api/brandnames', (req, res, next) => {
    let { query } = req
    if (query.producttype === 'allProducts') {
        req.app.get('db').brands.allBrands().then(response => res.status(200).send(response))
    } else {
        req.app.get('db').brands.brandsForProductType(query.producttype).then(response => res.status(200).send(response))
    }
})



////////////////////////////            FILTER BY PRICE            /////////////////////////////////


app.get('/api/filterallbyprice', (req, res, next) => {
    req.app.get('db').filterByPrice.allUnder25().then(response => res.status(200).send(response))
})

app.get('/api/filterallbyprice25', (req, res, next) => {
    req.app.get('db').filterByPrice.allBetween25to50().then(response => res.status(200).send(response))
})

app.get('/api/filterallbyprice50', (req, res, next) => {
    req.app.get('db').filterByPrice.allBetween50to100().then(response => res.status(200).send(response))
})

app.get('/api/filterallbyprice100', (req, res, next) => {
    req.app.get('db').filterByPrice.allBetween100to200().then(response => res.status(200).send(response))
})

app.get('/api/filterallbyprice200', (req, res, next) => {
    req.app.get('db').filterByPrice.allOver200().then(response => res.status(200).send(response))
})




app.get('/api/filterbyprice', (req, res, next) => {
    req.app.get('db').filterByPrice.under25([req.query.producttype]).then(response => res.status(200).send(response))
})

app.get('/api/filterbyprice25', (req, res, next) => {
    req.app.get('db').filterByPrice.between25to50([req.query.producttype]).then(response => res.status(200).send(response))
})

app.get('/api/filterbyprice50', (req, res, next) => {
    req.app.get('db').filterByPrice.between50to100([req.query.producttype]).then(response => res.status(200).send(response))
})

app.get('/api/filterbyprice100', (req, res, next) => {
    req.app.get('db').filterByPrice.between100to200([req.query.producttype]).then(response => res.status(200).send(response))
})

app.get('/api/filterbyprice200', (req, res, next) => {
    req.app.get('db').filterByPrice.over200([req.query.producttype]).then(response => res.status(200).send(response))
})


//                     aws-lib                          //



// app.get(`http://webservices.amazon.com/onca/xml?
// Service=AWSECommerceService&
// AWSAccessKeyId=${process.env.REACT_APP_AMAZONACCESSKEY}&
// AssociateTag=${process.env.REACT_APP_AMAZONTAG}&  
// Operation=ItemSearch&
// Keywords=the%20hunger%20games&
// SearchIndex=Books`).then( res => {
//     console.log("THIS IS RESPONSE: ", res)
//     this.setState({
//         books: res
//     })
//     console.log("TESTTTT: ",this.state.books)
// })





// ec2 = aws.createProdAdvClient(process.env.AMAZONACCESSKEY, process.env.AMAZONSECRETKEY, process.env.AMAZONTAG)


// var options = {SearchIndex: "Electronics", Keywords: "smart light switch"}


// ec2.call("ItemSearch", options, function(err, result){
// //     console.log(result.Items.Item[0].ItemAttributes);
// //     let x = result.Items.Item;
// //     let y = result.Items.length
// //     // for(var i = 0; i < y; i++) {
// //     //     console.log(x[i]);
// console.log(JSON.stringify(result))
//     })

//     // console.log((result.Items.Item))
//     // .then(ress => res.status(200).send(ress))
//     // result.status(200).send(result)
// }
// )


// client.itemSearch({
//     Keywords: 'How to win friends & influence people',
//     searchIndex: 'Books',
//     responseGroup: 'ItemAttributes,Offers,Images'
//   }).then(function(result){
//     // console.log(result[0].Offers[0].Offer[0].OfferListing[0].Price);
//     // console.log(result[3].ItemAttributes[0].ListPrice);
//     console.log(result[0])
//   }).catch(function(err){
//     console.log(err);
//   });


//\\
// \\                                                                    //
//  \\                                                                  //
//                       AMAZON SEARCH API                         //
//                                                                  \\
//                                                                    \\
//                                                                      \\



//   app.get('/test/amazon', (req,res,next) => {
//       console.log('Backend test: ')
//     client.itemSearch({
//         Keywords: 'SMART LIGHTS',
//         // searchIndex: 'Tools & Home Improvement',
//         responseGroup: 'ItemAttributes,Offers,OfferSummary,ItemIds,Images,Reviews',
//       }).then(function(result){
//         res.status(200).send(result)

//       }).catch(function(err){
//         console.log(err);
//       });
//   })


//\\
// \\                                                                    //
//  \\                                                                  //
//                       AMAZON SEARCH API                         //
//                                                                  \\
//                                                                    \\
//                                                                      \\




app.post('/api/post', (req, res, next) => {
    let { asin, offerlistingid, color, brand, price, customerreview, productsize, model, warranty, feature0, feature1, feature2, feature3, feature4, title } = req.body;

    req.app.get('db').postListing([asin, offerlistingid, color, brand, price, customerreview, productsize, model, warranty, feature0, feature1, feature2, feature3, feature4, title])
        .then(property => res.status(200).send(property));
})


let PORT = 3232;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} yoooooooo`)
})