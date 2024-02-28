const products = [
    { id: "1", name: "armazon 1", img: "url-img", price: 10000, category: "armazon", description: "armazon 1", stock: 20 },
    { id: "2", name: "armazon 2", img: "url-img", price: 12100, category: "armazon", description: "armazon 2", stock: 10 },
    { id: "3", name: "sol 1", img: "url-img", price: 30000, category: "sol", description: "sol 1", stock: 30 },
    { id: "4", name: "sol 2", img: "url-img", price: 34000, category: "sol", description: "sol 2", stock: 50 },
    { id: "5", name: "sol 3", img: "url-img", price: 51000, category: "sol", description: "sol 3", stock: 60 },
    { id: "6", name: "graduacion 1", img: "url-img", price: 20000, category: "graduacion", description: "graduacion 1", stock: 15 },
    { id: "7", name: "graduacion 2", img: "url-img", price: 25000, category: "graduacion", description: "graduacion 2", stock: 3 },
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        if (products.length > 0) {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        } else {
            reject("No hay productos");
        }
    });
};

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        if (products.length > 0) {
            const product = products.find((p) => p.id == id);
            setTimeout(() => {
                if (!product) {
                    reject(`No se encuentra el producto con el id ${id}`);
                } else {
                    resolve(product);
                }
            }, 2000);
        } else {
            reject("No hay productos");
        }
    });
};