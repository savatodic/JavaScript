let animal = {
    name: "",
    kind: "",

    speak: function(message){
        console.log(`${this.name}! ${this.message}`);
    }
}
const dog = Object.create(animal);
dog.name = prompt("Please enter your dogs name: ");
dog.kind = prompt("Please enter what kind is your dog: ");
dog.message = prompt("Please enter some message: ");
dog.speak();