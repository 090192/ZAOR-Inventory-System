const products = [
    {
        id: 1,
        name: "Blusa elegante",
        brand: "ZAOR Collection",
        category: "ropa",
        price: 399,
        color: "Beige",
        sizes: ["CH", "M", "G"],
        description: "Blusa satinada con mangas abullonadas y diseño elegante.",
        stock: 10,
        status: "Disponible",
        image: "https://plus.unsplash.com/premium_photo-1740409497402-b0e4931e6a05?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 2,
        name: "Vestido casual",
        brand: "Urban Style",
        category: "ropa",
        price: 599,
        color: "Negro",
        sizes: ["CH", "M", "G"],
        description: "Vestido casual con corte moderno y acabado elegante.",
        stock: 8,
        status: "Disponible",
        image: "https://images.unsplash.com/photo-1623580674393-edf6eb7090f8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 3,
        name: "Bolso clásico",
        brand: "ZAOR Collection",
        category: "accesorios",
        price: 499,
        color: "Café",
        sizes: ["Unitalla"],
        description: "Bolso clásico ideal para complementar cualquier estilo.",
        stock: 6,
        status: "Disponible",
        image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=763&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 4,
        name: "Tenis urbanos",
        brand: "Urban Style",
        category: "calzado",
        price: 799,
        color: "Rojo",
        sizes: ["23", "24", "25", "26"],
        description: "Tenis urbanos de estilo deportivo y casual.",
        stock: 5,
        status: "Disponible",
        image: "https://images.unsplash.com/photo-1623961750666-21b483e1a1bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 5,
        name: "Camisa moderna",
        brand: "ZAOR Collection",
        category: "ropa",
        price: 450,
        color: "Blanco",
        sizes: ["CH", "M", "G"],
        description: "Camisa moderna para ocasiones casuales y formales.",
        stock: 9,
        status: "Disponible",
        image: "https://images.unsplash.com/photo-1779870633353-5e8be71f8247?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 6,
        name: "Lentes de sol",
        brand: "Urban Style",
        category: "accesorios",
        price: 299,
        color: "Negro",
        sizes: ["Unitalla"],
        description: "Lentes de sol con diseño moderno.",
        stock: 12,
        status: "Disponible",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"
    },
    {
        id: 7,
        name: "Botines casuales",
        brand: "ZAOR Collection",
        category: "calzado",
        price: 899,
        color: "Negro",
        sizes: ["23", "24", "25", "26"],
        description: "Botines casuales con diseño versátil.",
        stock: 4,
        status: "Disponible",
        image: "https://images.unsplash.com/photo-1542838687-936f417d2f37?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 8,
        name: "Pantalón de vestir",
        brand: "Urban Style",
        category: "ropa",
        price: 550,
        color: "Negro",
        sizes: ["CH", "M", "G"],
        description: "Pantalón de vestir con corte recto.",
        stock: 7,
        status: "Disponible",
        image: "https://images.unsplash.com/photo-1767631338127-8cd80ee2f9df?q=80&w=709&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 9,
        name: "Collar minimalista",
        brand: "ZAOR Collection",
        category: "accesorios",
        price: 250,
        color: "Dorado",
        sizes: ["Unitalla"],
        description: "Collar minimalista con acabado dorado.",
        stock: 15,
        status: "Disponible",
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600"
    },
    {
        id: 10,
        name: "Tenis blancos",
        brand: "Urban Style",
        category: "calzado",
        price: 750,
        color: "Blanco",
        sizes: ["23", "24", "25", "26"],
        description: "Tenis blancos de estilo casual.",
        stock: 6,
        status: "Disponible",
        image: "https://images.unsplash.com/photo-1597350584914-55bb62285896?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 11,
        name: "Suéter tejido",
        brand: "ZAOR Collection",
        category: "ropa",
        price: 620,
        color: "Beige",
        sizes: ["CH", "M", "G"],
        description: "Suéter tejido de textura suave.",
        stock: 8,
        status: "Disponible",
        image: "https://plus.unsplash.com/premium_photo-1694618625009-5d26f9b595ba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 12,
        name: "Reloj clásico",
        brand: "Urban Style",
        category: "accesorios",
        price: 680,
        color: "Dorado",
        sizes: ["Unitalla"],
        description: "Reloj clásico con diseño elegante.",
        stock: 5,
        status: "Disponible",
        image: "https://images.unsplash.com/photo-1677769235840-32212e59970f?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 13,
        name: "Sandalias elegantes",
        brand: "ZAOR Collection",
        category: "calzado",
        price: 480,
        color: "Beige",
        sizes: ["23", "24", "25", "26"],
        description: "Sandalias elegantes para ocasiones especiales.",
        stock: 7,
        status: "Disponible",
        image: "https://plus.unsplash.com/premium_photo-1676225678979-80df276a983e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 14,
        name: "Falda moderna",
        brand: "Urban Style",
        category: "ropa",
        price: 420,
        color: "Negro",
        sizes: ["CH", "M", "G"],
        description: "Falda moderna de corte versátil.",
        stock: 9,
        status: "Disponible",
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600"
    },
    {
        id: 15,
        name: "Cartera clásica",
        brand: "ZAOR Collection",
        category: "accesorios",
        price: 350,
        color: "Café",
        sizes: ["Unitalla"],
        description: "Cartera clásica para uso diario.",
        stock: 11,
        status: "Disponible",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600"
    },
    {
        id: 16,
        name: "Botas urbanas",
        brand: "Urban Style",
        category: "calzado",
        price: 950,
        color: "Negro",
        sizes: ["23", "24", "25", "26"],
        description: "Botas urbanas de diseño contemporáneo.",
        stock: 3,
        status: "Disponible",
        image: "https://images.unsplash.com/photo-1520904112886-14458bfd692e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 17,
        name: "Chaqueta casual",
        brand: "ZAOR Collection",
        category: "ropa",
        price: 890,
        color: "Negro",
        sizes: ["CH", "M", "G"],
        description: "Chaqueta casual de estilo moderno.",
        stock: 5,
        status: "Disponible",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600"
    },
    {
        id: 18,
        name: "Aretes dorados",
        brand: "Urban Style",
        category: "accesorios",
        price: 220,
        color: "Dorado",
        sizes: ["Unitalla"],
        description: "Aretes dorados con diseño delicado.",
        stock: 14,
        status: "Disponible",
        image: "https://images.unsplash.com/photo-1723802205505-2f88b2227718?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 19,
        name: "Zapatos casuales",
        brand: "ZAOR Collection",
        category: "calzado",
        price: 850,
        color: "Café",
        sizes: ["23", "24", "25", "26"],
        description: "Zapatos casuales para diferentes ocasiones.",
        stock: 6,
        status: "Disponible",
        image: "https://images.unsplash.com/photo-1603191659812-ee978eeeef76?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 20,
        name: "Playera básica",
        brand: "Urban Style",
        category: "ropa",
        price: 280,
        color: "Blanco",
        sizes: ["CH", "M", "G"],
        description: "Playera básica de diseño cómodo y sencillo.",
        stock: 18,
        status: "Disponible",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"
    }
];

// Elementos de la página
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const cartCounter = document.querySelector(".cart-link span");

// Crear filtros adicionales
const toolbar = document.querySelector(".catalog-toolbar");

function createExtraFilters() {
    if (!toolbar) return;

    const brandFilter = document.createElement("select");
    brandFilter.id = "brandFilter";
    brandFilter.innerHTML = `
        <option value="todos">Todas las marcas</option>
        <option value="ZAOR Collection">ZAOR Collection</option>
        <option value="Urban Style">Urban Style</option>
    `;

    const sizeFilter = document.createElement("select");
    sizeFilter.id = "sizeFilter";
    sizeFilter.innerHTML = `
        <option value="todos">Todas las tallas</option>
        <option value="CH">CH</option>
        <option value="M">M</option>
        <option value="G">G</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="Unitalla">Unitalla</option>
    `;

    toolbar.appendChild(brandFilter);
    toolbar.appendChild(sizeFilter);

    brandFilter.addEventListener("change", filterProducts);
    sizeFilter.addEventListener("change", filterProducts);
}

// Mostrar productos
function displayProducts(list) {
    if (!productGrid) return;

    if (list.length === 0) {
        productGrid.innerHTML =
            "<p>No encontramos productos con esa búsqueda.</p>";
        return;
    }

    productGrid.innerHTML = list.map(product => `
        <article class="product-card">
            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
                onerror="this.src='https://placehold.co/600x700/f0ebe3/393630?text=Imagen+no+disponible'"
            >

            <div class="product-info">
                <span class="product-category">${product.category}</span>

                <p class="product-brand">${product.brand}</p>

                <h3>${product.name}</h3>

                <p class="product-description">${product.description}</p>

                <p class="product-price">
                    $${product.price.toLocaleString("es-MX")} MXN
                </p>

                <div class="product-details">
                    <p><strong>Color:</strong> ${product.color}</p>
                    <p><strong>Tallas:</strong> ${product.sizes.join(", ")}</p>
                    <p><strong>Existencias:</strong> ${product.stock}</p>
                </div>

                <span class="product-status ${product.stock > 0 ? "available" : "unavailable"}">
                    ${product.stock > 0 ? "Disponible" : "Agotado"}
                </span>

                <button
                    class="add-button"
                    onclick="addToCart(${product.id})"
                    ${product.stock <= 0 ? "disabled" : ""}
                >
                    Agregar al carrito
                </button>
            </div>
        </article>
    `).join("");
}

// Búsqueda y filtros
function filterProducts() {
    const search = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const category = categoryFilter ? categoryFilter.value : "todos";

    const brand = document.getElementById("brandFilter")?.value || "todos";
    const size = document.getElementById("sizeFilter")?.value || "todos";

    const filtered = products.filter(product => {
        const matchesSearch =
            product.name.toLowerCase().includes(search) ||
            product.brand.toLowerCase().includes(search) ||
            product.color.toLowerCase().includes(search);

        const matchesCategory =
            category === "todos" || product.category === category;

        const matchesBrand =
            brand === "todos" || product.brand === brand;

        const matchesSize =
            size === "todos" || product.sizes.includes(size);

        return matchesSearch && matchesCategory && matchesBrand && matchesSize;
    });

    displayProducts(filtered);
}

// Carrito de demostración
let cart = [];

function addToCart(productId) {
    const product = products.find(item => item.id === productId);

    if (!product || product.stock <= 0) return;

    const existing = cart.find(item => item.id === productId);

    if (existing) {
        if (existing.quantity >= product.stock) {
            alert("No hay más existencias disponibles.");
            return;
        }
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();

    alert(`${product.name} se agregó al carrito.`);
}

// Actualizar contador del carrito
function updateCart() {
    if (cartCounter) {
        const total = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCounter.textContent = total;
    }
}

// Eventos
if (searchInput) {
    searchInput.addEventListener("input", filterProducts);
}

if (categoryFilter) {
    categoryFilter.addEventListener("change", filterProducts);
}

// Iniciar catálogo
createExtraFilters();
displayProducts(products);
updateCart();

