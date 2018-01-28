---
layout: post
title: "C# - Application Insights"
date: 2018-01-28
lang: en-us
---

### {{ page.title }}

#### `Create Application Insights in Azure`

Go to Azure web portal and create application insights under targeted project.

#### `Install Application Insights to Console App`

In your console application, open up Package Manager Console and type `Install-Package Microsoft.ApplicationInsights -Version 2.4.0` or go to [Application Insights](https://www.nuget.org/packages/Microsoft.ApplicationInsights) for the latest.

#### `Code`.

Messages are buffered internally and send once in awhile to Application Insights. At the end of the application call the `Flush()` method to send the events.

```csharp
class Program
    {
        static void Main(string[] args)
        {
            // Set up App Insights telemetry
            TelemetryConfiguration.Active.InstrumentationKey = "<INSTRUMENTION_KEY>";
            var telemetryClient = new TelemetryClient();

            // Get the object used to communicate with the FTP server
            FtpWebRequest request = (FtpWebRequest)WebRequest.Create(Properties.Settings.Default.FtpEndpoint);

            // FTP credentials
            request.Credentials = new NetworkCredential(Properties.Settings.Default.FtpUserName, Properties.Settings.Default.FtpPassword);

            // FTP request method
            request.Method = WebRequestMethods.Ftp.ListDirectoryDetails;

            using (FtpWebResponse response = (FtpWebResponse)request.GetResponse())
            using (Stream responseStream = response.GetResponseStream())
            using (StreamReader reader = new StreamReader(responseStream))
            {
                telemetryClient.TrackTrace("Successfully retrieved a list of FTP directories");
                telemetryClient.Flush();
                Console.WriteLine(reader.ReadToEnd());
            }
        }
    }
```

#### `How to check trace messages`

1. Go to Azure web portal
2. Application Insights
3. Under Investigation, Search
4. You should see your traces there