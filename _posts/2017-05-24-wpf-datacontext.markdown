---
layout: post
title: "WPF - DataContext"
date: 2017-05-24
lang: en-us
---

### {{ page.title }}

#### `DataContext`

Gets or sets the data context for an element when it participates in data binding.

`DataContext` property binds the data between the UI and code-behind. 

#### `Simple example`

MainWindow.xaml
```xml
<Grid>
    <!-- define 2 columns grid -->
    <Grid.ColumnDefinitions>
        <ColumnDefinition Width="80"/>
        <ColumnDefinition Width="*"/>
    </Grid.ColumnDefinitions>

    <!-- define 3 row grid -->
    <Grid.RowDefinitions>
        <RowDefinition Height="30"/>
        <RowDefinition Height="30"/>
        <RowDefinition Height="30"/>
    </Grid.RowDefinitions>

    <!-- first name fields -->
    <TextBlock Margin="4" Text="First Name: " VerticalAlignment="Center"/>
    <TextBox Margin="4" Text="{Binding FirstName}" Grid.Column="1"/>

    <!-- last name fields -->
    <TextBlock Margin="4" Text="Last Name: " Grid.Row="1" VerticalAlignment="Center"/>
    <TextBox Margin="4" Text="{Binding LastName}" Grid.Row="1" Grid.Column="1"/>

    <!-- age fields -->
    <TextBlock Margin="4" Text="First Name: " Grid.Row="2" VerticalAlignment="Center"/>
    <TextBox Margin="4" Text="{Binding Age}" Grid.Row="2" Grid.Column="1"/>
<Grid>
```

From the example above that the `TextBox` Text property has a WPF markup extension ( `{ }` ) which used for binding.

    Text="{ Binding FirstName }"

Person.cs
```csharp
// properties
public string FirstName { get; set; }
public string LastName { get; set; }
public int Age { get; set; }
```

MainWindow.xaml.cs (aka code-behind)
```csharp
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();

        // instantiation
        Person person = new Person()
        {
            FirstName = "John",
            LastName = "Smith",
            Age = 10
        };

        // assign the person instace to "DataContext"
        this.DataContext = person;
    }
}
```

By default the `DataContext` is null. Once assigned the object to DataContext then you can interact with the data binding. 