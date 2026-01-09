export function loadHome() {
    const contentDiv = document.querySelector("#content");

    contentDiv.textContent = "";

    const mainImg = document.createElement('img');
    mainImg.id = 'mainImg';
    contentDiv.append(mainImg);

    const tagLine = document.createElement('h4');
    tagLine.textContent = "Fresh Coffee, Cozy Vibes";
    contentDiv.append(tagLine);

    const cafeInfo = document.createElement('p');
    cafeInfo.textContent = "We serve handcrafted coffee." ;
    contentDiv.append(cafeInfo);
};