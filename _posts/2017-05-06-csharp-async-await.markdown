---
layout: post
title: "C#: Async and Await"
date: 2017-05-06
lang: en-us
---

### {{ page.title }}

Async and parallel

```csharp
public async Task<ActionResult> Index()
{
    var model = new HomePageViewModel();

    model.AddMessage("Starting action");

    // kicking off both async 
    var headlineTask = GetHeadlineAsync(model);
    var temperatureTask = GetCurrentTemperatureAsync(model);

    // suspended untill all of these tasks are completed
    await Task.WhenAll(headlineTask, temperatureTask);

    model.AddMessage("Finished action");

    return View(model);
}

async Task GetHeadlineAsync(HomePageViewModel model)
{
    // get headline code here...
}

async Task GetCurrentTemperatureAsync(HomePageViewModel model)
{
    // get current temparature code here...
}
```

#### `Async Timeouts`

If the process is taken too long. Redirect to a custom page.

Add two attributes to handle the timeouts and error.

```csharp
// set time out to 1.2s
[AsyncTimeout(1200)]
// if exceeded 1.2s render 'Timeout' page
[HandleError(ExceptionType=typeof(TimeoutException), View="Timeout")]
// Go to webConfig and change the error to 'on'
public async Task<ActionResult> Index(CancellationToken ctk)
{
    // code here...
}
```