---
layout: post
title: "XAML: Weather Demo"
date: 2017-05-06
lang: en-us
---

### {{ page.title }}

#### `What is XAML`
E`x`tensible `A`pplication `M`markup `L`anguage (XAML) is the language used to define your app's user interface. It can be entered manually, or created using the VS design tools. A `.xaml` file has a `.xaml.cs` code-behind file which contains the logic. Together, the XAML and code-behind make a completed class.

#### `Build Weather Panel`

`MainPage.xaml` is the designer window and `MainPage.xaml.cs` is the code-behind.

To start creating a layout, open `MainPage.xaml`
```xml
<Grid>
    <Grid.ColumnDefinitions>
        <ColumnDefinition Width="3*" />
        <ColumnDefinition Width="5*" />
    </Grid.ColumnDefinitions>

    <Grid.RowDefinitions>
        <RowDefinition Height="2*" />
        <RowDefinition Height="*" />
    </Grid.RowDefinitions>
</Grid>
```

#### `Color the Grid`

```xml
<Border Background="#111111" />
<Border Grid.Column="1" Background="#222222" />
<Border Grid.Row="1" Grid.ColumnSpan="2" Background="#333333" />
```

#### `Orgaize content by using StackPanel element`

`StackPanel` allowing you to stack element vertically or horizontally.

In the 1st StackPanel, each TextBlock stacks vertically. This is the default behavior of a StackPanel. In the 2nd StackPanel, the "Orientation" attribute to Horizontal.

```xml
<!-- Organize content by using stackPanel elements -->
<StackPanel Grid.Column="1" Margin="40,0,0,0" VerticalAlignment="Center">
    <TextBlock Foreground="White" FontSize="25" Text="Today - 64F"/>
    <TextBlock Foreground="White" FontSize="25" Text="Partially Cloudy"/>
    <TextBlock Foreground="White" FontSize="25" Text="Precipitation: 25%"/>
</StackPanel>

<StackPanel Grid.Row="1" Grid.ColumnSpan="2" Orientation="Horizontal" HorizontalAlignment="Center" VerticalAlignment="Center">
    <TextBlock Foreground="White" FontSize="25" Text="High: 66" Margin="0,0,20,0"/>
    <TextBlock Foreground="White" FontSize="25" Text="Low: 43" Margin="0,0,20,0"/>
    <TextBlock Foreground="White" FontSize="25" Text="Feels like: 63"/>
</StackPanel>
```

#### `Add an image icon`

```xml
<Image Margin="20" Source="Assets/partially-cloudy.png"/>
```

#### `Resource`
[https://docs.microsoft.com/en-us/windows/uwp/layout/grid-tutorial](https://docs.microsoft.com/en-us/windows/uwp/layout/grid-tutorial){:target="_blank"}