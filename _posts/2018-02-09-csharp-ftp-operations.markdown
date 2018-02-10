---
layout: post
title: "C# - FTP Operations"
date: 2018-01-28
lang: en-us
---

### {{ page.title }}

#### `FTP Common Commands`
There are more commands than listed below. This post will provide `UploadFile` and `MakeDirectory` examples

    1. UploadFile
    2. MakeDirectory
    3. DeleteFile
    4. DownloadFile
    5. ListDirectory

#### `Step 1: Build request object`
    FtpWebRequest request = (FtpWebRequest)WebRequest.Create(ftpDirPath);

#### `Step 2: Define FTP Command`
    request.Method = WebRequestMethods.Ftp.MakeDirectory;
    OR
    request.Method = WebRequestMethods.Ftp.UploadFile;

#### `Step 3: Credentials`
    request.Credentials = new NetworkCredential(FtpUser, FtpPass);

#### `Step 4: FTP Get Response`
    FtpWebResponse response = (FtpWebResponse)request.GetResponse();

#### `Upload Example`
```csharp
private static void Upload(string ftpFilePath, string file)
{
    try
    {
        // Create request object
        FtpWebRequest request = (FtpWebRequest)WebRequest.Create(ftpFilePath);

        // Define request command
        request.Method = WebRequestMethods.Ftp.UploadFile;

        // FTP Credential
        request.Credentials = new NetworkCredential(Properties.Settings.Default.FtpUser, Properties.Settings.Default.FtpPass);

        // Open and read file, then get the stream used to data to an FTP server
        using (Stream fileStream = File.OpenRead(file))
        using (Stream ftpStream = request.GetRequestStream())
        {
            // Use 'CopyTo' to avoid failure if the file is larger than 2GB (and even on 64-bit systems, System.Array cannot exceed 4 billion elements).
            fileStream.CopyTo(ftpStream);
        }

        FtpWebResponse response = null;

        try
        {
            // Send request
            response = (FtpWebResponse)request.GetResponse();

            // Output message on screen
            Log.Write($"{request.Method} {ftpFilePath}", Log.Status.UPLOADED);
        }
        catch (Exception ex)
        {
            // Output message on screen
            Log.Write($"FTP UPLOAD: {response.StatusCode} - {ex.Message}", Log.Status.ERROR);
        }
    }
    catch (Exception ex)
    {
        // Output message on screen
        Log.Write($"ERROR: {ex.Message}", Log.Status.ERROR);
    }
}
```

#### `Make Directory Example`

```csharp
private static void CreateDirectory(string ftpDirPath)
{
    FtpWebRequest request = (FtpWebRequest)WebRequest.Create(ftpDirPath);

    request.Method = WebRequestMethods.Ftp.MakeDirectory;

    request.Credentials = new NetworkCredential(Properties.Settings.Default.FtpUser, Properties.Settings.Default.FtpPass);

    FtpWebResponse response = null;

    try
    {
        response = (FtpWebResponse)request.GetResponse();

        // Output message on screen
        Log.Write($"{request.Method} {ftpDirPath}", Log.Status.CREATED);
    }
    catch (WebException webEx)
    {
        response = (FtpWebResponse)webEx.Response;

        // 550 Cannot create a file when that file already existed
        if (response.StatusCode == FtpStatusCode.ActionNotTakenFileUnavailable)
        {
            // Output message on screen
            Log.Write($"{ftpDirPath}", Log.Status.EXISTED);
        }
    }
    catch (Exception ex)
    {
        // Output message on screen
        Log.Write($"FTP CREATE: {response.StatusCode} - {ex.Message}", Log.Status.ERROR);
    }
}
```

#### `Recursive operation`

```csharp
public static void RecursiveUpload(string dirPath, string uploadPath)
{
    string[] files = Directory.GetFiles(dirPath, "*.*");
    string[] subDirs = Directory.GetDirectories(dirPath);

    foreach (string file in files)
    {
        Upload(uploadPath + "/" + Path.GetFileName(file), file);
    }

    foreach (string subDir in subDirs)
    {
        CreateDirectory(uploadPath + "/" + Path.GetFileName(subDir));

        RecursiveUpload(subDir, uploadPath + "/" + Path.GetFileName(subDir));
    }
}
```

#### `Main`

```csharp
// Upload files recursively
Uploader.RecursiveUpload(siteDir, Properties.Settings.Default.FtpEndpoint);
```