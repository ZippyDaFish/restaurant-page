const content = document.getElementById('content');

const page = (() => {
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
    };
    const createMain = () => {
        const div = document.createElement("div");
        div.setAttribute('id', "main");
        content.appendChild(div);
    };
    const createFooter = () => {
        const div = document.createElement("div");
        div.setAttribute('id', "footer");
        div.setAttribute('class', "flex-container");
        div.innerHTML = `
        <p class="text-main">Copyright © 2022 ZippyDaFish</p>
        `;
        content.appendChild(div);
    };
    return{createHeader, createMain, createFooter};
})();

page.createHeader();
page.createMain();
page.createFooter();