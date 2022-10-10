console.log("Everything seems to be working");

const content = document.getElementById('content');

const headerMod = (() => {
    const createHeader = () => {
        const div = document.createElement("div");
        div.setAttribute('id', "header");
        div.setAttribute('class', "flex-container");
        div.innerHTML = `
        <p class="text-greater">Oops, All Soups</p>
        <nav>
            <button class="button-nav text-main">Home</button>
            <button class="button-nav text-main">Menu</button>
            <button class="button-nav text-main">Contact</button>
        </nav>
        `;
        content.appendChild(div);
        console.log("no blockage");
    };
    return[createHeader];
})();

headerMod.createHeader();