function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: 0,
};

function getMageDamage() {
  const hasMana = mage.mana >= 15;

  if (!hasMana) return 'Não tem mana suficiente!';

  return {
    damage: randomBetween(mage.intelligence, mage.intelligence * 2),
    mana: 15,
  };
}

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: 0,
};

function getWarriorDamage() {
  return randomBetween(warrior.strength, warrior.strength * warrior.weaponDmg);
}

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: 0,
};

function getDragonDamage() {
  return randomBetween(15, dragon.strength);
}

const battleMembers = { mage, warrior, dragon };

const gameActions = {
  warriorAttack: function (damageAction) {
    const damage = damageAction();

    warrior.damage += damage;
    dragon.healthPoints -= damage;
  },
  mageAttack: function (damageAction) {
    const damage = damageAction();

    if (typeof damage === 'string') return console.log(damage);

    mage.mana -= damage.mana;
    mage.damage += damage.damage;
    dragon.healthPoints -= damage.damage;
  },
  dragonAttack: function (damageAction) {
    const damage = damageAction();

    dragon.damage += damage;
    warrior.healthPoints -= damage;
    mage.healthPoints -= damage;
  },
  getMembers: function () {
    return battleMembers;
  },
  show: function () {
    console.table(this.getMembers());
    // for (const key in this.getMembers()) {
    //   console.table(this.getMembers()[key]);
    // }
  },
};

gameActions.show();
gameActions.mageAttack(getMageDamage);
gameActions.show();
