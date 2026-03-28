let cart = [];

export function initCart() {
    // Load saved cart
    const saved = localStorage.getItem("cart");
    if (saved) cart = JSON.parse(saved);

    window.addItemToCart = function(item) {
        const existing = cart.find(i => i.id === item.id);
        if (existing) {
            existing.quantity = (existing.quantity || 1) + 1;
        } else {
            cart.push({ ...item, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
    };

    window.showCart = function() {
        const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

        let html = `
            <div class="modal" onclick="if(event.target.classList.contains('modal')) this.remove()">
                <div class="modal-content" style="max-width:500px;" onclick="event.stopImmediatePropagation()">
                    <h2>Your Cart</h2>
                    ${cart.length === 0 
                        ? `<p style="text-align:center; padding:2rem 0; color:#c7bfb8;">Your cart is empty</p>` 
                        : cart.map(item => `
                            <div style="display:flex; justify-content:space-between; padding:1rem 0; border-bottom:1px solid #333;">
                                <div>
                                    <strong>${item.name}</strong><br>
                                    <small>₹${item.price} × ${item.quantity || 1}</small>
                                </div>
                                <div style="text-align:right;">₹${item.price * (item.quantity || 1)}</div>
                            </div>`).join("")}
                    
                    ${cart.length > 0 ? `
                        <div style="margin-top:1.5rem; font-size:1.4rem; display:flex; justify-content:space-between;">
                            <strong>Total</strong>
                            <strong>₹${total}</strong>
                        </div>
                        <button onclick="clearCart()" style="margin-top:1.5rem; width:100%; background:#e74c3c; color:white; padding:1rem; border-radius:50px;">
                            Clear Cart
                        </button>
                    ` : ''}
                </div>
            </div>
        `;

        const container = document.createElement("div");
        container.innerHTML = html;
        document.body.appendChild(container.firstElementChild);
    };

    window.clearCart = function() {
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        document.querySelector(".modal").remove();
    };

    function updateCartCount() {
        const countEl = document.getElementById("cart-count");
        if (countEl) {
            const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
            countEl.textContent = totalItems;
        }
    }

    updateCartCount();
}