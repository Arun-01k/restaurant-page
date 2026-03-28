export function loadHome() {
    const content = document.getElementById("content");

    content.innerHTML = `
        <div style="text-align:center; max-width:800px; margin:0 auto;">
            <img id="mainImg" src="https://picsum.photos/id/1015/1200/600" 
                 style="width:100%; max-height:400px; object-fit:cover; border-radius:16px; margin-bottom:2rem;">
            
            <h2 style="font-size:2.5rem; margin-bottom:1rem;">Fresh Coffee, Cozy Vibes</h2>
            <p style="font-size:1.3rem; color:#c7bfb8;">
                We serve handcrafted coffee and French-inspired snacks in a warm, welcoming space.
            </p>
        </div>
    `;
}