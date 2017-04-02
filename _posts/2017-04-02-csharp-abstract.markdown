---
layout: post
title: "C#: Abstract"
date: 2017-04-02
lang: en-us
---

### {{ page.title }}


#### `Abstract Characteristics`

1. Abstract classes cannot be instantiated
    - Cannot be instantiated because it's not fully implemented.
    - Can contain abstract members.


#### `Abstract Example`

```csharp
    public abstract class Window
    {
        public virtual string Title { get; set; }

        public virtual void Draw()
        {
            // code here...
        }

        public abstract void Open();
    }
```

if the method marked `abstract`, meaning this method has no implementation, it ends with a semicolon, and there is no body defined.

To instantiate, you'll need to derive from the class and provide an implementation for the `Open` method. if you don't provide an implementation, you'll be building another abstract class that you cannot instantiate.

#### `Abstract Concrete Type`

A class that derives from base abstract class, and provides a definition for `Open`, that will be a concrete type, it's something that can instantiate. 