export function loadContact() {
    const content = document.getElementById("content");

    content.innerHTML = `
        <div style="max-width:600px; margin:0 auto;">
            <h2 style="text-align:center; margin-bottom:2rem; font-size:2rem;">Get in Touch</h2>
            
            <form id="contact-form" style="display:flex; flex-direction:column; gap:1.5rem;">
                <input type="text" id="name" placeholder="Your Name" required
                       style="padding:1rem; background:#252525; border:none; border-radius:12px; color:white;">
                
                <input type="email" id="email" placeholder="Email Address" required
                       style="padding:1rem; background:#252525; border:none; border-radius:12px; color:white;">
                
                <textarea id="message" rows="6" placeholder="Your Message" required
                          style="padding:1rem; background:#252525; border:none; border-radius:12px; color:white; resize:vertical;"></textarea>
                
                <button type="submit" 
                        style="background:#c89b6d; color:#121212; padding:1rem; font-size:1.1rem; border-radius:50px; cursor:pointer;">
                    Send Message
                </button>
            </form>
        </div>
    `;

    // Form handling
    document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault();
        const success = document.createElement("div");
        success.style.cssText = "position:fixed; bottom:30px; right:30px; background:#4ade80; color:#121212; padding:1rem 2rem; border-radius:50px; box-shadow:0 10px 20px rgba(0,0,0,0.3);";
        success.textContent = "✅ Message sent! We'll reply soon.";
        document.body.appendChild(success);

        setTimeout(() => success.remove(), 4000);
        this.reset();
    });
}