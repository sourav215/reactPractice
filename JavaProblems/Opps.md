## Create a Class and Object

```java
import java.util.*;

class Student{

    String name ;
    int age:

    public Student(String n, int a){
        this.name = n;
        this.age = a;
    }

    public void show_details(){
        System.out.println(this.name + " is " + this.age );
    }
}

class Main {
    public static void main(String[] args) {

        Student s = new Student("sourav", 25);
        s.show_details();

    }
}
```

## Inheritance

```java
class Vehicle{
    int cost;
    int milage;

    public Vehicle(int c, int m){
        this.cost = c;
        this.milage = m;
    }

    public void show_vehicle_details(){
        System.out.println(this.cost + " " + this.milage);
    }
}

class Car extends Vehicle{
    String model;
    String type;

    public Car(int c, int m, String mod, String t){
        super(c, m);
        this.model = mod;
        this.type = t;
    }

    public void show_car_details(){
        System.out.println(this.model + this.type);
        // this.show_vehicle_details();
    }

}

class Main{
    public static void main(String[] args){
        Car thar = new Car(18, 20, "Thar,1200", "Jeep");

        thar.show_car_details();
        // thar.show_vehicle_details();
    }
}

```
