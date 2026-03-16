class jogador {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }

    deffend (attack) {
        console.log(`O ${this.type} atacou ${attack}`)
    }

    checkAttack () {
        if (this.name.toLowerCase() === "mago") {
            return "magia"
        }

        if (this.name.toLowerCase() === "guerreiro") {
            return "usou espada"
        }

        if (this.name.toLowerCase() === "monge") {
            return "Usou artes marciais"
        }

        if (this.name.toLowerCase() === "ninja") {
            return "Usou shurikens"
        }

        return "Ataque aleatório"
    }
}

let mago_vinicius = new jogador("Vinicius", 18, "mago")

console.log(mago_vinicius)