class Store { //CRUD Mobile
    constructor() {
        this.mobiles = [];
    }

    init() {
        let mobile1 = new Mobile("OPPO", "Hàng sắp về", 9490000, 10000000, "https://cdn.tgdd.vn/Products/Images/42/239747/oppo-reno6-z-5g-aurora-1-600x600.jpg");
        let mobile2 = new Mobile("Iphone", "Online giá rẻ", 30990000, 35000000, "https://cdn.tgdd.vn/Products/Images/42/213033/TimerThumb/iphone-12-pro-max-(4).jpg");
        let mobile3 = new Mobile("Samsung", "Hàng xịn", 12990000, 15000000, "https://cdn.tgdd.vn/Products/Images/42/224859/TimerThumb/samsung-galaxy-s20-fan-edition-(2).jpg");
        let mobile4 = new Mobile("Xiaomi", "Hàng Trung Quốc", 7500000, 8000000, "https://cdn.tgdd.vn/Products/Images/42/233130/TimerThumb/xiaomi-redmi-9t-6gb-(12).jpg");
        this.mobiles = [mobile1, mobile2, mobile3, mobile4];
    }

    getAllMobile() {
        let str = '';
        for (let i = 0; i < this.mobiles.length; i++) {
            str += this.mobiles[i].getHtml();
        }
        return str;
    }

    getAllMobileTable() {
        let str = '';
        for (let i = 0; i < this.mobiles.length; i++) {
            str += this.mobiles[i].getHtmlTable();
        }
        return str;
    }

}