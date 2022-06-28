class Person {
  private _id: number;
  private _name: string;
  private _age: string;
  public _gender: string;

  constructor(id?: number, name?: string, age?: string, gender?: string) {
    this._id = id ?? -1;
    this._name = name ?? "";
    this._age = age ?? "";
    this._gender = gender ?? "";
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this._name;
  }

  public get age() {
    return this._age;
  }

  public set id(id: number) {
    this._id = id;
  }

  public set name(name: string) {
    this._name = name;
  }

  public set age(age: string) {
    this._age = age;
  }

  getPersonDetail = () => {
    return {
      id: this._id,
      name: this._name,
      age: this._age,
      gender: this._gender,
    };
  };
}

class Employee extends Person {
  private _companyName: string;
  private _role: string;

  constructor(
    id: number,
    name: string,
    age: string,
    companyName: string,
    role: string,
    gender: string
  ) {
    super(id, name, age, gender);
    this._companyName = companyName;
    this._role = role;
  }

  getPersonDetail = () => {
    return {
      id: super.id,
      name: super.name,
      age: this.age,
      companyName: this._companyName,
      role: this._role,
      gender: this._gender,
    };
  };
}

let per = new Person(1, "aman", "developer");
let emp = new Employee(
  2,
  "aman",
  "23",
  "primathon",
  "backend developer",
  "male"
);

console.log(emp.getPersonDetail()); // should print gender: "male" now.

//Inheritance: Implements

interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  // getArea gets inherited from Rectangle
}

//Override
interface Shape {
  getArea: () => number;
}

class Rectangle1 implements Shape {
  // using protected for these members allows access from classes that extend from this class, such as Square
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
}

class Square1 extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  // this toString replaces the toString from Rectangle
  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}

//Abstract Classes
abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle2 extends Polygon {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}
