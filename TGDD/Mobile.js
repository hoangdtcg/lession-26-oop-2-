class Mobile {
    constructor(name, description, price, oldPrice, image) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.oldPrice = oldPrice;
        this.image = image;
    }

    getHtml() {
        let str = `<div class="card">
                    <img src="${this.image}" alt="${this.image}s" style="width:100%">
                    <h1>${this.name}</h1>
                    <p class="price">${this.price}</p>
                    <p>${this.description}</p>
                    <p><button>Add to Cart</button></p>
                </div>`;
        return str;
    }

    getHtmlTable() {
        let str = `<tr>
                        <td><img style="width: 150px" src="${this.image}"></td>
                        <td>${this.name}</td>
                        <td>${this.description}</td>
                        <td>${this.price}</td>
                        <td>${this.oldPrice}</td>
                        <td><button>Edit</button></td>
                        <td><button>Delete</button></td>
                    </tr>`;
        return str;
    }
}