

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

for (let index = 0; index < addresses.length; index++) {
    const element = addresses[index];
    createListItem(element)
    
}

for (let address of addresses){
    createListItem(address)
}

linkContainer.appendChild(ul)

