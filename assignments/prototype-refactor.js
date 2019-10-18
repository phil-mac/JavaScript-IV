/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
// function GameObject(attrs) {
//     this.createdAt = attrs.createdAt;
//     this.name = attrs.name;
//     this.dimensions = attrs.dimensions;
// }

// GameObject.prototype.destroy = function () {
//     return `${this.name} was removed from the game.`;
// }

class GameObject{
    constructor(attrs){
        this.createdAt = attrs.createdAt;
        this.name = attrs.name;
        this.dimensions = attrs.dimensions;
    }
    destroy(){
        return `${this.name} was removed from the game.`;
    }
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
// function CharacterStats(attrs) {
//     GameObject.call(this, attrs);
//     this.healthPoints = attrs.healthPoints;
// }

// CharacterStats.prototype = Object.create(GameObject.prototype);

// CharacterStats.prototype.takeDamage = function () {
//     return `${this.name} took damage.`;
// }

class CharacterStats extends GameObject{
    constructor(attrs){
        super(attrs);
        this.healthPoints = attrs.healthPoints;
    }
    takeDamage(){
        return `${this.name} took damage.`;
    }
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
// function Humanoid(attrs) {
//     CharacterStats.call(this, attrs);
//     this.team = attrs.team;
//     this.weapons = attrs.weapons;
//     this.language = attrs.language;
// }

// Humanoid.prototype = Object.create(CharacterStats.prototype);

// Humanoid.prototype.greet = function () {
//     return `${this.name} offers a greeting in ${this.language}`;
// }

class Humanoid extends CharacterStats{
    constructor(attrs){
        super(attrs);
        this.team = attrs.team;
        this.weapons = attrs.weapons;
        this.language = attrs.language;
    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}`;
    }
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// function Villain(attrs) {
//     Humanoid.call(this, attrs);
//     this.spellDamage = attrs.spellDamage;
// }
// Villain.prototype = Object.create(Humanoid.prototype);

// function Hero(attrs) {
//     Humanoid.call(this, attrs);
//     this.meleDamage = attrs.meleDamage;
// }
// Hero.prototype = Object.create(Humanoid.prototype);

// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
function checkIfDead() {
    if (this.healthPoints <= 0) {
        console.log(`${this.name} has been killed!`)
    }
}

// Villain.prototype.spellAttack = function (target) {
//     target.healthPoints -= this.spellDamage;
//     console.log(`${this.name} cast a spell hitting ${target.name} for ${this.spellDamage} damage!`);
//     checkIfDead.call(target);
// }

// Hero.prototype.meleAttack = function (target) {
//     target.healthPoints -= this.meleDamage;
//     console.log(`${this.name} swings his ${this.weapons[0]} hitting ${target.name} for ${this.meleDamage} damage!`);
//     checkIfDead.call(target);
// }

class Villain extends Humanoid{
    constructor(attrs){
        super(attrs);
        this.spellDamage = attrs.spellDamage;
    }
    spellAttack(target){
        target.healthPoints -= this.spellDamage;
        console.log(`${this.name} cast a spell hitting ${target.name} for ${this.spellDamage} damage!`);
        checkIfDead.call(target);
    }
}

class Hero extends Humanoid{
    constructor(attrs){
        super(attrs);
        this.meleDamage = attrs.meleDamage;
    }
    meleAttack(target){
        target.healthPoints -= this.meleDamage;
        console.log(`${this.name} swings his ${this.weapons[0]} hitting ${target.name} for ${this.meleDamage} damage!`);
        checkIfDead.call(target);
    }
}

// * Create two new objects, one a villain and one a hero and fight it out with methods!
const bandit = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 4,
    name: 'Martak',
    team: 'Bandit Mages',
    weapons: [
        'wand',
    ],
    language: 'Common Tongue',
    spellDamage: 3
});

const knight = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 1,
    },
    healthPoints: 7,
    name: 'Sir Iduno',
    team: 'Castle Whatever',
    weapons: [
        'Sword of Metal',
    ],
    language: 'Common Tongue',
    meleDamage: 2
});

console.log("--- Fight! ---");

bandit.spellAttack(knight);
knight.meleAttack(bandit);
bandit.spellAttack(knight);
knight.meleAttack(bandit);
