// PRODUCTOS
// CATÁLOGO DE CARROS Y MOTOS DEPORTIVAS

const productos = [

    // =========================
    // CARROS DEPORTIVOS
    // =========================
    {
        id: "Carros",
        titulo: "BMW M4 Competition",
        imagen: "https://i.pinimg.com/736x/3d/7e/f1/3d7ef1c7efc4a575f7f1574394231411.jpg",
        categoria: {
            nombre: "Carros deportivos",
            id: "Carros"
        },
        precio: 185000000
    },

    {
        id: "Carros",
        titulo: "Porsche 911 Carrera",
        imagen: "https://i.pinimg.com/1200x/75/e8/71/75e87184d6b2c4c792239ea9802227ee.jpg",
        categoria: {
            nombre: "Carros deportivos",
            id: "Carros"
        },
        precio: 240000000
    },

    {
        id: "Carros",
        titulo: "Lamborghini Huracán",
        imagen: "https://i.pinimg.com/1200x/69/06/ca/6906ca1cbce428a99c6470ee9abda808.jpg",
        categoria: {
            nombre: "Carros deportivos",
            id: "Carros"
        },
        precio: 320000000
    },

    {
        id: "Carros",
        titulo: "Audi R8",
        imagen: "https://i.pinimg.com/736x/ce/b6/61/ceb6613b058e5656ff3c97498f2facd7.jpg",
        categoria: {
            nombre: "Carros deportivos",
            id: "Carros"
        },
        precio: 280000000
    },


    // =========================
    // MOTOS DEPORTIVAS
    // =========================
    {
        id: "Motos",
        titulo: "Yamaha YZF-R1",
        imagen: "https://i.pinimg.com/736x/ad/bb/3c/adbb3ce2eb832f922254e9fcfe550283.jpg",
        categoria: {
            nombre: "Motos deportivas",
            id: "Motos"
        },
        precio: 95000000
    },

    {
        id: "Motos",
        titulo: "Kawasaki Ninja ZX-10R",
        imagen: "https://i.pinimg.com/736x/80/bc/e5/80bce50a15a3da46fa9725fa3a79c71f.jpg",
        categoria: {
            nombre: "Motos deportivas",
            id: "Motos"
        },
        precio: 85000000
    },

    {
        id: "Motos",
        titulo: "Ducati Panigale V4",
        imagen: "https://i.pinimg.com/736x/c0/8b/59/c08b59116bd997a8c99b274896676c8e.jpg",
        categoria: {
            nombre: "Motos deportivas",
            id: "Motos"
        },
        precio: 115000000
    },

    {
        id: "Motos",
        titulo: "Honda CBR1000RR",
        imagen: "https://i.pinimg.com/1200x/50/91/37/5091371df8b6d001db161da7832d74ad.jpg",
        categoria: {
            nombre: "Motos deportivas",
            id: "Motos"
        },
        precio: 78000000
    },


    // =========================
    // ACCESORIOS
    // =========================
    {
        id: "Accesorios",
        titulo: "Casco deportivo",
        imagen: "https://i.pinimg.com/1200x/f3/76/ed/f376ed1005b38c9f59d603ac61469f2e.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "Accesorios"
        },
        precio: 850000
    },

    {
        id: "Accesorios",
        titulo: "Guantes para motociclista",
        imagen: "https://i.pinimg.com/1200x/b5/d3/9d/b5d39d6521107468f501779950ddcaf6.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "Accesorios"
        },
        precio: 280000
    },

    {
        id: "Accesorios",
        titulo: "Kit de limpieza automotriz",
        imagen: "https://i.pinimg.com/736x/58/52/e1/5852e15870c460440d780eb608d4b813.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "Accesorios"
        },
        precio: 180000
    },

    {
        id: "Accesorios",
        titulo: "Kit de herramientas deportivas",
        imagen: "https://i.pinimg.com/736x/cc/fc/ab/ccfcabcdb4ea4f1e10dd9559fc81d0b2.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "Accesorios"
        },
        precio: 350000
    }

];
//código Js
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {


    contenedorProductos.innerHTML = "";


    productosElegidos.forEach(producto => {


        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;


        contenedorProductos.append(div);
    })


    actualizarBotonesAgregar();
}


cargarProductos(productos);


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {


        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");


        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }


    })
});


function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");


    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}


let productosEnCarrito;


let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}


function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);


    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }


    actualizarNumerito();


    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}


function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}