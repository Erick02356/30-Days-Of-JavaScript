class newUser{
    constructor(_id,username,email,password,isLoggedIn){
        this._id =_id,
        this.username= username,
        this.email=email,
        this.password = password,
        this.createdAt = new Date();         
        this.isLoggedIn = isLoggedIn
    }
}


const singUp = (_id) => {
    for(let user in users){
        if(_id === users[user]._id){
            console.log('Estas registrado');
            return;
        }
    }
    console.log("No estas registrado, registrando ...")
    if(false){
        const user1 = new newUser(2, "JohnDoe", "johndoe@example.com", "securePassword", false);
        console.log(user1);    
    }

    
}

const singIn = (username,password) => {
    for(let user in users){
        if(username === users[user].username && password === users[user].password){
            console.log('Ingresando');
            return;
        }
    }
    console.log('Credenciales invalidas');

}


//PRODUCTS

const findProductById = (productId) => products.find(product => product._id === productId);

const rateProduct = (productId,userId,rate) =>{
    //buscar el id del producto
    const product = findProductById(productId)
    const rating = {
        userId: userId,
        rate: rate
    }
    product.ratings.push(rating)
}

const averageRating = () => {
    let ratingNumber=0
    let ratingIterations=0
    for (let product = 0; product < products.length; product++) {
        if(products[product].ratings.length > 0){
            for (let rate = 0; rate < products[product].ratings.length; rate++) {
                ratingNumber +=products[product].ratings[rate].rate;
                ratingIterations+=1;
        
            }
        }
    }

    return ratingNumber/ratingIterations;
}

result = averageRating();
console.log(result)

const toggleProduct = (productId,userId) =>{
    const product = findProductById(productId)
    const likes = product.likes.length;

    //MI LOGICA, LO QUE ENTENDÍ ERA QUE SI ALGUIEN LE HABÍA DADO LIKE SE ELIMINACE SI NADE 
    // LE HABÍA DADO LIKE ESTE DEBIA AGG UN LIKE PERO NO TUVE EN CUENTA QUE ES UN USER
    // if(likes > 0){
    //     product.likes.pop()
    // }else{
    //     product.likes.push('like')
    // }
    // console.log(product)

    const likeIndex = product.likes.indexOf(userId);
    
    if (likeIndex === -1) {
        // User hasn't liked the product, so add the like
        product.likes.push(userId);
        console.log(`User ${userId} liked the product ${productId}`);
    } else {
        // User has already liked the product, so remove the like
        product.likes.splice(likeIndex, 1);
        console.log(`User ${userId} removed like from the product ${productId}`);
    }
}

toggleProduct('eedfcf','eefamr')