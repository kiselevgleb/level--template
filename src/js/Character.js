// TODO: write your code here
export default class Character {
    constructor(attack,defence){
        this.health=80;
        this.attack=attack;
        this.defence=defence;
        this.level=5;
        
    }

    levelUp(){
        if(this.health>0){
            this.level+=1;
            console.log(this.level);
            this.attack*=1.2;
            this.defence*=1.2;
            this.health=100;
        }
        else{
            throw console.error("dead");
        }
    }

    // set attack(n){
    //     this.attack=n;
    // }
    // set defence(n){
    //     this.defence=n;
    // }
    // get attack(){
    //     return this.attack;
    // }
    // get defence(){
    //     return this.defence;
    // }
}