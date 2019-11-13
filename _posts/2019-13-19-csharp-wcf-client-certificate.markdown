---
layout: post
title: "C# - WCF Client Certificate"
date: 2019-11-13
lang: en-us
---

### {{ page.title }}

How to load the SSL certificate (.pfx) from app.config

```xml
  // In your 'App.config'
  <behavior>
    <endpointBehaviors>
      <behavior name="BasicHttpBinding_DemoService">
        <clientCredentials>
          <clientCertificate findValue="thumbprint_value_here" 
                             storeLocation="CurrentUser" 
                             StoreName="My" 
                             x509FindType="FindByThumbprint" />
        </clientCredentials>
      </behavior>
    </endpointBehaviors>
  </behavior>
```

When you call your WCF service client, it will load the certificate from app.config and will be part of the request to the server.

Extra validation check as if certificate is not found in user store, it will throw an exception. To catch that...

```csharp
  IDemoService client = null;

  try
  {
    client = new DemoServiceClient();
  }
  catch (InvalidOperationException ex)
  {
    // Log exception here...
  }
```