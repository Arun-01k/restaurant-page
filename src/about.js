export function about() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const aboutWrapper = document.createElement("div");
  aboutWrapper.className = "about-wrapper";

  const heading = document.createElement("h1");
  heading.textContent = "About Our Café";

  const para1 = document.createElement("p");
  para1.textContent =
    "Welcome to Brew Haven Café — a place where every cup tells a story. We believe coffee is not just a drink, but an experience.";

  const para2 = document.createElement("p");
  para2.textContent =
    "Founded in 2022, our café was created with the idea of blending rich flavors, cozy ambience, and meaningful conversations under one roof.";

  const para3 = document.createElement("p");
  para3.textContent =
    "From freshly brewed espresso to handcrafted desserts, every item on our menu is prepared with love and passion.";

  const missionTitle = document.createElement("h2");
  missionTitle.textContent = "Our Mission";

  const missionText = document.createElement("p");
  missionText.textContent =
    "To serve quality coffee, create warm experiences, and build a community that feels like home.";

  const valuesTitle = document.createElement("h2");
  valuesTitle.textContent = "Why People Love Us";

  const list = document.createElement("ul");

  const values = [
    "Premium quality coffee beans",
    "Freshly baked desserts daily",
    "Comfortable and calm environment",
    "Friendly and passionate staff",
    "Perfect place to work or relax"
  ];

  values.forEach((value) => {
    const li = document.createElement("li");
    li.textContent = value;
    list.appendChild(li);
  });

  const closingText = document.createElement("p");
  closingText.textContent =
    "Whether you are here to work, relax, or catch up with friends, Brew Haven Café is always happy to serve you.";

  aboutWrapper.append(
    heading,
    para1,
    para2,
    para3,
    missionTitle,
    missionText,
    valuesTitle,
    list,
    closingText
  );

  content.appendChild(aboutWrapper);
}
