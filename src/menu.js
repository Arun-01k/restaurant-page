export function menu() {
    const contentDiv = document.querySelector("#content");

    contentDiv.textContent = "";

    const beverageContainerDiv = document.createElement('div');
    const snacksContainerDiv = document.createElement('div');

    //beverage
    const beveragesHeader = document.createElement('h2');
    beveragesHeader.textContent = "Beverages";
    beverageContainerDiv.append(beveragesHeader);  //beverages header

    const beverages = [
    { name: "Espresso",
    description: "Strong and bold coffee made from finely ground beans." },

    { name: "Latte",
    description: "Smooth espresso with steamed milk and light foam." },

    { name: "Cappuccino",
    description: "Rich espresso with equal parts milk and foam." },

    { name: "Cold Brew",
    description: "Slow-steeped coffee served chilled for a smooth taste." }
    ];

    beverages.forEach(item => {
        const beverageCard = document.createElement('div');

        const beverageItem = document.createElement('h3');
        beverageItem.textContent = item.name;

        const beverageDesc = document.createElement('p');
        beverageDesc.textContent = item.description;

        beverageCard.append(beverageItem, beverageDesc);

        beverageContainerDiv.append(beverageCard);
    })


    //snacks
    const snacksHeader = document.createElement('h2');
    snacksHeader.textContent = "Snacks";
    snacksContainerDiv.append(snacksHeader);  //snacks header

    const snacks = [
    { name: "Croissant",
    description: "Buttery and flaky pastry baked fresh every morning." },

    { name: "Blueberry Muffin",
    description: "Soft muffin filled with juicy blueberries." },

    { name: "Chocolate Brownie",
    description: "Rich chocolate brownie with a fudgy center." },

    { name: "Garlic Bread",
    description: "Toasted bread infused with garlic butter." },

    { name: "Cheese Sandwich",
    description: "Grilled sandwich with melted cheese inside." }
    ];

    snacks.forEach(item => {
    const snacksCard = document.createElement('div');

    const snacksItem = document.createElement('h3');
    snacksItem.textContent = item.name;

    const snacksDesc = document.createElement('p');
    snacksDesc.textContent = item.description;

    snacksCard.append(snacksItem, snacksDesc);

    snacksContainerDiv.append(snacksCard);
    })


    //appending beverage and snacks to display 
    contentDiv.append(beverageContainerDiv);
    contentDiv.append(snacksContainerDiv);
};