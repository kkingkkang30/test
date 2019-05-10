async function getIdolList() {
    const container = document.getElementById('dynamic-list');
    const response = await ParseApi2.itemList();
    console.log(response);

    let htmls = [];
    response.result.forEach(element => {
        const { name, price, group, imgURl } = element;

       const html =  `<div class="item row-container">` +
        `<img src="${imgURl}" class="profile">` +
        `<div class="column-container">` +
            `<div class="title idol-Name">${name}</div>` +
            `<div class="tags Hashtag">` +
                `<span class="tag">${group}</span>` +
            `</div>` +
        `</div>` +
        `<div class="column-container subinfo-container">` +
            `<span class="Sub-Text">$${price}</span>` +
        `</div>` +
    `</div>`;

    const e = document.createElement('div');
    e.innerHTML = html;

    container.appendChild(e);
    });
}