

const addresses = [
    "https://google.com",
    "https://bing.com",
    "https://duckduckgo.com"
];


const linkContainer = document.querySelector('.js-link-container')

const ul = document.createElement('ul')

function createListItem(address) {
    const li = document.createElement('li');
    const item = document.createElement('a')
    item.setAttribute('href', address)
    item.textContent = address
    li.appendChild(item)
    ul.appendChild(li)

}

addresses.forEach(createListItem)
linkContainer.appendChild(ul)

