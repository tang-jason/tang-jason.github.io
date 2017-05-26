---
layout: post
title: "WPF - INotifyPropertyChanged"
date: 2017-05-25
lang: en-us
---

### {{ page.title }}

#### `INotifyPropertyChanged Interface`

The INotifyPropertyChanged interface is used to notify clients, typically binding clients, that a property value has changed. 

For example, consider a `Person` object with a property called `FirstName`. To provide generic property-change notification, the `Person` type implements the `INotifyPropertyChanged` interface and raises a `PropertyChanged` event when `FirstName` is changed.

For change notification to occur in a binding between a bound client and a data source, your bound type should either:
- implement the INotifyPropertyChanged interface (preferred).
- provide a change event for each property of the bound type.

DO NOT DO BOTH

#### `Example`

```csharp
public event PropertyChangedEventHandler PropertyChanged;

private void OnPropertyChanged(string propertyName)
{
    if (PropertyChanged != null)
    {
        PropertyChanged(this, new PropertyChangedEventArgs(propertyName))
    }
}
```

The `PropertyChangedEventArgs` will raise an event when property value changed.