const menuItems = [
    { id: 1, category: "beverage", name: "Espresso", price: 180, desc: "Strong and bold coffee made from finely ground beans." },
    { id: 2, category: "beverage", name: "Latte", price: 220, desc: "Smooth espresso with steamed milk and light foam." },
    { id: 3, category: "beverage", name: "Cappuccino", price: 240, desc: "Rich espresso with equal parts milk and foam." },
    { id: 4, category: "beverage", name: "Cold Brew", price: 200, desc: "Slow-steeped coffee served chilled." },
    { id: 5, category: "snack", name: "Croissant", price: 150, desc: "Buttery and flaky pastry baked fresh every morning." },
    { id: 6, category: "snack", name: "Blueberry Muffin", price: 130, desc: "Soft muffin filled with juicy blueberries." },
    { id: 7, category: "snack", name: "Chocolate Brownie", price: 160, desc: "Rich chocolate brownie with a fudgy center." },
    { id: 8, category: "snack", name: "Cheese Sandwich", price: 180, desc: "Grilled sandwich with melted cheese inside." }
];

export function loadMenu() {
    const content = document.getElementById("content");

    let html = `
        <h2 style="text-align:center; margin-bottom:2rem; font-size:2rem;">Our Menu</h2>
        
        <div style="display:flex; gap:1rem; justify-content:center; margin-bottom:2rem; flex-wrap:wrap;">
            <button onclick="filterMenu('all')" class="menu-filter active" style="background:#c89b6d; color:#121212;">All</button>
            <button onclick="filterMenu('beverage')" class="menu-filter" style="background:var(--bg-accent);">Beverages</button>
            <button onclick="filterMenu('snack')" class="menu-filter" style="background:var(--bg-accent);">Snacks</button>
        </div>

        <div id="menu-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1.5rem;"></div>
    `;

    content.innerHTML = html;
    renderMenuItems("all");

    // Make filter function global so inline onclick works
    window.filterMenu = function(category) {
        document.querySelectorAll(".menu-filter").forEach(btn => btn.classList.remove("active"));
        event.target.classList.add("active");
        renderMenuItems(category);
    };
}

function renderMenuItems(category) {
    const grid = document.getElementById("menu-grid");
    
    const filtered = category === "all" 
        ? menuItems 
        : menuItems.filter(item => item.category === category);

    grid.innerHTML = filtered.map(item => `
        <div class="menu-card" onclick="showItemModal(${item.id})">
            <h3>${item.name}</h3>
            <p style="margin:8px 0;">${item.desc}</p>
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <strong style="color:#c89b6d;">₹${item.price}</strong>
                <small>Click for details</small>
            </div>
        </div>
    `).join("");
}

window.showItemModal = function(id) {
    const item = menuItems.find(i => i.id === id);
    if (!item) return;

    const modalHTML = `
        <div class="modal" onclick="if(event.target.classList.contains('modal')) this.remove()">
            <div class="modal-content" onclick="event.stopImmediatePropagation()">
                <h2>${item.name}</h2>
                <p style="margin:1rem 0;">${item.desc}</p>
                <p style="font-size:1.5rem; color:#c89b6d; margin-bottom:1.5rem;">₹${item.price}</p>
                
                <div style="display:flex; gap:1rem;">
                    <button onclick="addToCart(${item.id}); this.closest('.modal').remove()" 
                            style="flex:1; background:#c89b6d; color:#121212; padding:1rem; border-radius:50px;">
                        Add to Cart
                    </button>
                    <button onclick="this.closest('.modal').remove()" 
                            style="flex:1; background:#333; padding:1rem; border-radius:50px;">
                        Close
                    </button>
                </div>
            </div>
        </div>
    `;

    const modalContainer = document.createElement("div");
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer.firstElementChild);
};

window.addToCart = function(id) {
    const item = menuItems.find(i => i.id === id);
    window.addItemToCart(item);           // handled in cart.js
    alert(`${item.name} added to cart!`);
};