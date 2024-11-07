class Hero{

    constructor(name,age,type){
        this.name = name;
        this.age  = age;
        this.type =  type;
    }

    attack(){
        console.log(`O Heroi ${this.name} tem ${this.age} anos e é do tipo ${this.type}, ele(a) atacou  usando ${whatIsMyAttack(this.type)}`)
    }

}

function whatIsMyAttack(type){
   let ataque = ""
    if(type === "mago"){
        ataque = "magia";
    }
    else if(type === "ninja"){
        ataque = "shuriken";
    }
    else if(type === "guerreiro"){
        ataque = "espada";
    }
    else if( type === "monge"){
        ataque = "artes marciais";
    }
     return ataque;
}


let heroi = new Hero ("Gabriel", 19, "mago");
let heroi1 = new Hero("Neymar",  20,  "ninja");
let hreoi2 = new Hero("Chorao",  22,  "guerreiro");
let heroi3 = new Hero("Luffy",   15,  "monge");


heroi.attack();
heroi1.attack();
hreoi2.attack();
heroi3.attack();