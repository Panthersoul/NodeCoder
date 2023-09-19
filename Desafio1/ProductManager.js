class ProductManager{

    constructor(){
        this.Products = [];
    }

    getProducts (){
        return this.Products;
    }

    validarCampos(producto){
        let valido = true;
        if (producto.title === "" || producto.title == undefined)
            valido = false;
        if (producto.description === "" || producto.description == undefined)
            valido = false;
        if (producto.price === "" || producto.price == undefined || !typeof(Number))
            valido = false;
        if (producto.thumbnail === "" || producto.thumbnail == undefined)
            valido = false;
        if (producto.code === "" || producto.code == undefined)
            valido = false;
        if (producto.stock === "" || producto.stock == undefined || !typeof(Number))
            valido = false;

        if (!valido)
            console.log("Los campos de producto deben estar completos");
        
        return valido;    
    }

    addAux(prod){ //funcion de ayuda que agrega un id autoincremental al objeto antes del push
        let a = this.Products.length+1;
        prod = Object.assign({id: a}, prod);
        this.Products.push(prod)
    }

    addProduct (prod){
        let validateData = this.validarCampos(prod);
        if (this.Products.length == 0 && validateData){ 
          this.addAux(prod);
        }else{
            let a = this.Products.filter((e) => e.code === prod.code)
            if (a.length != 0)
                    {console.log("Código de elemento repetido");}
            else
            {
                this.addAux(prod);
            }
        }
    }

    getProductById (id){
        let a = this.Products.filter((e) => e.id == id);
        if (a.length != 0)
            return a
        else
            return "Not Found"
    }
}



///////////////
const productmanager = new ProductManager();

console.log(productmanager.getProducts());

let producto = {
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price:200,
    thumbnail:'Sin imagen',
    code:'123',
    stock:25
}
let produ1cto = {
    title: 'productosdf prueba',
    description: 'Este es un producto prueba',
    price:200,
    thumbnail:'Sin imagen',
    code:'12d3',
    stock:25
}
let produ1scto = {
    title: 'productosdf prueba',
    description: 'Este es un producto prueba',
    price:200,
    thumbnail:'Sin imagen',
    code:'ac123',
    stock:25
}
let produ1scto2 = {
    title: 'productosdf prueba',
    description: 'Este es un producto prueba',
    price:200,
    thumbnail:'Sin imagen',
    code:'123',
    stock:25
}
let pro22du1scto2 = {
    title: 'productosdf prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail:'',
    code:'d123',
    stock:25
}



productmanager.addProduct(producto);
productmanager.addProduct(produ1cto);
productmanager.addProduct(produ1scto);
productmanager.addProduct(produ1scto2);
productmanager.addProduct(pro22du1scto2);

console.log(productmanager.getProducts());
console.log(productmanager.getProductById(7));
