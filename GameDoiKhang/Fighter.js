class Fighter {
    constructor(name) {
        this.name = name;
        this.dmg = 20;
        this.hp = 100;
        this.doubleMess = ''
    }

    attack(fighter) {
        this.dmg = this.getRandomDmg(5, 20) * this.getDouble();
        console.log(this.name + " attack " + fighter.name + " with " + this.dmg + " dmg. " + this.doubleMess);
        fighter.takeHit(this.dmg)
    }

    takeHit(dmg) {
        this.hp -= dmg;
        if (this.hp <= 0) {
            console.log(this.name + " lose!")
        }
    }

    getRandomDmg(min, max) {
        let dmg = Math.floor(Math.random() * (max - min)) + min;
        return dmg;
    }

    getDouble() {
        if (Math.random() > 0.5) {
            this.doubleMess = " CRITICAL!!!"
            return 2;
        } else {
            this.doubleMess = "";
            return 1;
        }
    }
}