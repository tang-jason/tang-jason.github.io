---
layout: post
title: "C#: Delegate"
date: 2017-03-30
lang: en-us
---

### {{ page.title }}

#### `What is Delegate?`

A delegate is a type safe function pointer. That is, it holds a reference (pointer) to a function.

The signature of the delegate must match the signature of the function the delegate points to, otherwise you get a compiler error. This is a reason delgates are called as type safe function pointers.

A delegate is similar to a class. You can create an instance of it, and when you do so, you pass in the function name as a parameter to the delegate consturctor, and it is to this function the delegate will point to.

Tip to remember delegate syntax: Delegates syntax look very much similar to a method with a delegate keyword.

```csharp
// A delegate just a type safe function pointer. Using delegate gives developers a lot of flexibilites
namespace Delegates
{
    // delegate function
    public delegate void HelloFunctionDelegate(string message);

    class Program
    {
        // method
        static void Hello(string message)
        {
            Console.WriteLine(message);
        }

        // Entry point
        static void Main(string[] args)
        {
            // Instantiate delegate
            // Signature must match the method
            HelloFunctionDelegate del = new HelloFunctionDelegate(Hello);
            del("Hello from delegates"); // output: Hello from delegates
        }
    }
}
```

#### `Delegate Usage Example`

```csharp
namespace Delegate_Demo
{
    // Delegate function
    public delegate bool IsPromotable(Employee emp);

    // Employee class
    class Employee
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Salary { get; set; }
        public int Experience { get; set; }

        public static void Promote(List<employee> empList, IsPromotable IsEligibleToPromote)
        {
            foreach (var employee in empList)
            {
                if (IsEligibleToPromote(employee))
                {
                    Console.WriteLine(employeeList.Name + " promoted");
                }
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Employee employee = new Employee
            {
                new Employee() { ID = 101, Name = "John", Salary = 50000, Experience = 5 },
                new Employee() { ID = 102, Name = "Mary", Salary = 40000, Experience = 4 },
                new Employee() { ID = 103, Name = "Jose", Salary = 30000, Experience = 3 }
            };

            Employee.Promote(employee, emp => emp.Experience >= 5);
        }
    }
}
```