# reco_menu
Backend For Reco Menu using express and mongoDB 

login
https://yanuar-dot-capstoneproject-388212.as.r.appspot.com/api/recomenu/users/login

{
    "email":"admin@gmail.com",
    "password":"123456"
}

Register 
https://yanuar-dot-capstoneproject-388212.as.r.appspot.com/api/recomenu/users/register
{
    "name": "rizki",
    "email": "rizki@gmail.com",
    "password": "123456",
    "phone": "123123",
    "likeIngredient": "Mie",
    "isAdmin": false
}

https://yanuar-dot-capstoneproject-388212.as.r.appspot.com/api/recomenu/orders
{
    "orderItems" : [
        {
            "quantity" : 2,
            "product" : "6487eaf65805849a722925a9"
        }
    ],
    "eatAt" : "restaurant",
    "user" : "6487ba58fa931888bfd33b8c"
}


get Product
https://yanuar-dot-capstoneproject-388212.as.r.appspot.com/api/recomenu/products

get categories
https://yanuar-dot-capstoneproject-388212.as.r.appspot.com/api/recomenu/categories




