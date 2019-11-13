---
layout: post
title: "C# - Install Certificate"
date: 2019-11-13
lang: en-us
---

### {{ page.title }}

How to install SSL certificate (.pfx) from project location. How to check if certficate is existed in user store.

```csharp
  public void InstallCertificate()
  {
    string secret = ConfigurationManager.AppSettings["CERT_SECRET"];
    string certFileLocation = @"Certs\whatever.pfx";

    string certFilePath = Path.Combine(Path.getDirectoryName(Assembly.GetExecutingAssembly().Location), certFileLocation);
    X509Certificate2 cert = new X509Certificate2(certFilePath, secret, X509KeyStorageFlags.PersistKeySet);
    X509Store store = new X509Store(StoreName.My, StoreLocation.CurrentUser);
    Store.Open(OpenFlags.ReadWrite);
    Store.Add(cert);
    Store.Close();
  }
```

```csharp
  public bool IsCertificateExisted()
  {
    string thumbprint = configurationManager.AppSettings["CERT_THUMBPRINT"];

    X509Store store = new X509Store(StoreName.My, StoreLocation.CurrentUser);
    Store.Open(OpenFlags.ReadOnly);
    X509Certificate2Collection certs = store.Certificates.find(X509FindType.FindByThumbprint, thumbprint, false);
    store.Close();

    return certs.count > 0;
  }
```