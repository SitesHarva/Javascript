fetch('https://dummyjson.com/carts')
.then(res => res.json())
.then(res => {
    const {carts} = res;

    for (let cart of carts) {
        const blockWithCart = document.createElement('div');
        document.body.appendChild(blockWithCart);

        let blockInfo = document.createElement('div');
        blockWithCart.appendChild(blockInfo);

        blockInfo.innerText = `
            "id": ${cart.id};
            "discountedTotal": ${cart.discountedTotal};
            "total": ${cart.total};
            "totalProducts": ${cart.totalProducts};
            "totalQuantity": ${cart.totalQuantity};
            "userId": ${cart.userId};
        `
        const blockWithProduct = document.createElement('ul');
        blockWithCart.appendChild(blockWithProduct);

        for (let product of cart.products) {
            let listWithProduct = document.createElement('li');
            blockWithProduct.appendChild(listWithProduct);
            
            listWithProduct.innerText = `
                "discountPercentage": ${product.discountPercentage};
                "id": ${product.id};
                "discountedTotal": ${product.discountedTotal};
                "price": ${product.price};
                "quantiti": ${product.quantiti};
                "title": ${product.title};
                "total": ${product.total};
            `
            let productsImage = document.createElement('img');
            listWithProduct.appendChild(productsImage);
            productsImage.src = product.thumbnail;
        }
    }   
});