// Part 1: Humble Beginnings
// Let’s model a simple adventurer with basic properties such as health and an inventory. 
// We will call the adventurer “Robin.”

const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
   name: "Leo",
  type: "Cat"
  }
  }
console.log(adventurer.inventory[0])

//As an additional practice exercise, create a loop that logs each item in Robin’s inventory.
function inventoryLog(){
  adventurer.inventory.forEach((inventory) => console.log(inventory))
}
inventoryLog(adventurer.inventory)

//Nested arrays are useful, but so are nested objects. Let’s give Robin a companion to travel with – a furry friend they call “Leo.”

class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
  }

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"]
robin.companion = new Character ("Leo")
robin.companion.type = "Cat"
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }

  check(){
    const roles=["Fighter", "Healer", "Wizard"];
    console.log(roles)
if (roles.includes(this.role)) {console.log(`${this.role} is included in ${roles}`)}
if (! roles.includes(this.role)) throw new Error(console.log(`${this.role} is not included in ${roles},u need to try another role`))
}


class companion{
    constructor (name,health, inventory, companion) {
        this.name = name;
        this.health = health;
        this.inventory = [];
        this.cmopanion = companion
      }
}

// roll (mod=0) {
//   const result = Math.floor(Math.random() * 20) + 1 + mod;
//   console.log(`${this.name} rolled a ${result}.`)}

//static Max_Health=100;

//Static methods are often used to create utility functions that perform actions that are independant of the state of an individual object.
//Static properties are useful for caches, fixed-configuration values, or other data that does not need to be replicated across each instance of the class's objects.

class Companion extends Character{
constructor(type, belongings, name, companion){
super(name, companion);
this.type=type;
this.belongings=belongings
}
}

class AdventurerFactory { 
constructor (role) {
this.role = role;
this.adventurers = [];
}
generate (name) {
const newAdventurer = new Adventurer(name, this.role);
this.adventurers.push(newAdventurer);
}
findByIndex (index) {
return this.adventurers[index];
}
findByName (name) {
return this.adventurers.find((a) => a.name === name);
}
}

const Adv1= new Adventurer ('Adv1')
Adv1.role='badguy'
console.log(Adv1)
//Adv1.scout()
Adv1.check()


