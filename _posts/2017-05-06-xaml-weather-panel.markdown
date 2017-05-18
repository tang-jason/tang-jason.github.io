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

#### `Improved Weather Panel`
Below is the improved version of weather panel demo that using `ResourceDictionary` to separate the common styles and strings.

#### `Create Styles.xaml`
This xaml file contains common styles for the application.

```xml
<!-- Style.xaml -->
<ResourceDictionary
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation" 
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">

    <Style x:Key="TextBlockStyle1" TargetType="TextBlock">
        <Setter Property="Foreground" Value="White"/>
        <Setter Property="FontSize" Value="25"/>
    </Style>
</ResourceDictionary>
```

#### `Create Strings.xaml`

```xml
<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
    <!-- STRING CONTROL PROPERTIES -->
    <x:String x:Key="TodayTemp">Today - 64F</x:String>
    <x:String x:Key="WeatherStatus">Partially Cloudy</x:String>
    <x:String x:Key="Precipitation">Precipitation: 25%</x:String>
    <x:String x:Key="HighTemp">High: 66</x:String>
    <x:String x:Key="LowTemp">Low: 43</x:String>
    <x:String x:Key="FeelingTemp">Feels like: 63</x:String>
</ResourceDictionary>
```

#### `Reference External Files (Styles.xaml & Strings.xaml)`

These references should be at the top of your application.

```xml
<Page.Resources>
    <ResourceDictionary>
        <ResourceDictionary.MergedDictionaries>
            <ResourceDictionary Source="Common/Styles.xaml" />
            <ResourceDictionary Source="Common/Strings.xaml" />
        </ResourceDictionary.MergedDictionaries>
    </ResourceDictionary>
</Page.Resources>
```

#### `Full Example`

```xml
<Page
    x:Class="XAML_WeatherApp.MainPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:local="using:XAML_WeatherApp"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    mc:Ignorable="d">

    <!-- External style reference -->
    <Page.Resources>
        <ResourceDictionary>
            <ResourceDictionary.MergedDictionaries>
                <ResourceDictionary Source="Common/Styles.xaml" />
                <ResourceDictionary Source="Common/Strings.xaml" />
            </ResourceDictionary.MergedDictionaries>
        </ResourceDictionary>
    </Page.Resources>

    <!-- main grid -->
    <Grid Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
        <!-- Define grid column -->
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="3*"/>
            <ColumnDefinition Width="5*"/>
        </Grid.ColumnDefinitions>

        <!-- Define grid row -->
        <Grid.RowDefinitions>
            <RowDefinition Height="2*"/>
            <RowDefinition Height="*"/>
        </Grid.RowDefinitions>

        <!-- color the grid -->
        <Border Background="#2f5cb6" />
        <Border Grid.Column="1" Background="#1f3d7a" />
        <Border Grid.Row="1" Grid.ColumnSpan="2" Background="#152951" />

        <!-- Organize content by using stackPanel elements -->
        <StackPanel Grid.Column="1" Margin="40,0,0,0" VerticalAlignment="Center">
            <TextBlock Text="{StaticResource TodayTemp}" Style="{StaticResource TextBlockStyle1}"/>
            <TextBlock Text="{StaticResource WeatherStatus}" Style="{StaticResource TextBlockStyle1}"/>
            <TextBlock Text="{StaticResource Precipitation}" Style="{StaticResource TextBlockStyle1}"/>
        </StackPanel>

        <StackPanel Grid.Row="1" Grid.ColumnSpan="2" Orientation="Horizontal" HorizontalAlignment="Center" VerticalAlignment="Center">
            <TextBlock Text="{StaticResource HighTemp}" Margin="0,0,20,0" Style="{StaticResource TextBlockStyle1}"/>
            <TextBlock Text="{StaticResource LowTemp}" Margin="0,0,20,0" Style="{StaticResource TextBlockStyle1}"/>
            <TextBlock Text="{StaticResource FeelingTemp}" Style="{StaticResource TextBlockStyle1}"/>
        </StackPanel>

        <!-- add an image icon -->
        <Image Margin="20" Source="Assets/partially-cloudy.png"/>
    </Grid>
</Page>

```