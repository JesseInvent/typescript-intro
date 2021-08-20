// Basic types
let id: number = 5
let company: string = 'Invent'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Jesse', true]

// Tuple Array
let employee: [number, string][]

employee = [
    [1, 'Jesse'],
    [2, 'John'],
    [3, 'Paul']
]

// Union
let pid: string | number
pid = '22'

// Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}


// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}


// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number
{
    return x + y
}

// Void
function log(message: string | number): void
{
    console.log(message);   
}

// Interface
interface UserInterface {
    readonly id: number, // Not assignable
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'John',
}

type Point = number | string
// interface Point = number | string // You can't use interfaces with unions
const p1: Point = 1

// user1.id = 5

interface MathFunc {
    (x: number, y:number): number
}

// Interfaces with functions
const add: MathFunc = (x: number, y:number): number => x + y
const sub: MathFunc = (x: number, y:number): number => x - y


// Interface
interface PersonInterface {
    id: number,
    name: string,
    register(): string,
}


// Classes
class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id    
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const jesse = new Person(1, 'Jesse Ojih')
const john = new Person(2, 'John Doe')

console.log(jesse.register());

// Sub classes
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn', 'Developer')

// console.log(emp.name);
// console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[]
{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Jesse', 'John', 'Jill'])

numArray.push(1)
strArray.push('hello')


