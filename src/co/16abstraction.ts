//abstract
// abstract class doesn't allow to create instance
abstract class Car {
  abstract start(): void;
  abstract stop(): void;
}

class MyCar extends Car{
    start(): void {
        console.log("car starting");
    }
    stop():void{
        console.log("car stoped");
    }
}

const car1 = new MyCar();
car1.start();
