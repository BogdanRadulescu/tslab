interface LivingBeing {
    eat();
    talk();
};

abstract class Animal implements LivingBeing {
    protected health: number;

    eat = () => {
        this.health += 5;
    }

    talk = (): void => {
        throw new Error("Not implemented");
    }
}

class Parrot extends Animal {
    talk = (): void => {
        console.log("Polly wants a cracker");
    }
}

class Cat extends Animal {
    talk = (): void => {
        console.log("🌊 .·:*¨𝙢𝒆𝙤𝖜¨*:·. 🌊")
    }
}

const cat: Animal = new Cat();
const parrot: Animal = new Parrot();

cat.eat();
cat.talk();
parrot.eat();
parrot.talk();

const feedAnimal = (animal: Animal) => animal.eat();
feedAnimal(cat);
feedAnimal(parrot);