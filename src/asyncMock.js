const products = [
    { id: "1", name: "Armazon - modelo 1", img: "url-img", price: 10000, category: "armazon", description: "Disponibles en una variedad de materiales, desde acetato ligero hasta metal resistente.", stock: 20 },
    { id: "2", name: "Armazon - modelo 2", img: "url-img", price: 12100, category: "armazon", description: "Personaliza tu look y muestra tu individualidad con nuestra selección de armazones cool.", stock: 10 },
    { id: "3", name: "Anteojo de sol - modelo 1", img: "url-img", price: 30000, category: "sol", description: "Clásicos, atemporales, monturas elegantes.", stock: 30 },
    { id: "4", name: "Anteojo de sol - modelo 2", img: "url-img", price: 34000, category: "sol", description: "Deportivos, dinámicos, listos para la acción.", stock: 50 },
    { id: "5", name: "Anteojo de sol - modelo 3", img: "url-img", price: 51000, category: "sol", description: "Retro, estilo vintage, con encanto.", stock: 60 },
    { id: "6", name: "Anteojo con graduación 1", img: "url-img", price: 20000, category: "graduacion", description: "La moda y la funcionalidad se encuentran en perfecto equilibrio en nuestros lentes de graduación.", stock: 15 },
    { id: "7", name: "Anteojo con graduación 2", img: "url-img", price: 25000, category: "graduacion", description: "Te permiten abrazar tu singularidad mientras mejoras tu visión.", stock: 3 },
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