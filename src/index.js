const page = (() => {
    const content = document.getElementById('content');
    const createHeader = () => {
        const div = document.createElement("div");
        div.setAttribute('id', "header");
        div.setAttribute('class', "flex-container");
        div.innerHTML = `
        <p class="text-greater">Oops, All Soups</p>
        <nav>
            <button id="nav-home" class="button-nav text-main">Home</button>
            <button id="nav-menu" class="button-nav text-main">Menu</button>
            <button id="nav-contact" class="button-nav text-main">Contact</button>
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

const tabs = (() => {
    const main = document.getElementById('main');
    const navHome = () => {
        main.innerHTML = `
        <div id="home" class="flex-container">
            <p class="text-main">Best soup in town</p>
            <p class="text-main">Made with love since 2003</p>
            <img width="50%" height="50%">
            <p class="text-main">Order online or visit us at a location near you</p>
        </div>
    `;
    };
    return{navHome};
})();

tabs.navHome();

document.getElementById("nav-home").addEventListener('click', function(){tabs.navHome();});