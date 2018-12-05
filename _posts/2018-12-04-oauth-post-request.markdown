---
layout: post
title: "MVC - FormUrlEncodedContent()"
date: 2018-12-04
lang: en-us
---

### {{ page.title }}

Using `FormUrlEncodedContent()` to make a `POST` request on OAuth flow.

```c#
// Authorazation server endpoint
var endpoint = "your_authorization_token_server_endpoint";

// POST Request
var request = new HttpRequestMessage(HttpMethod.POST, endpoint);

// Construct properties
var keyValues = new List<KeyValuePair<string, string>>()
{
  new KeyValuePair<string, string>("client_id", "your_client_id_here"),
  new KeyValuePair<string, string>("code", "your_authorization_code_here"),
  new KeyValuePair<string, string>("client_secret", "your_client_secret_here"),
  new KeyValuePair<string, string>("grant_code", "authorization_code"),
  new KeyValuePair<string, string>("scope", "your_app_scope_here")
};

// POST request with HttpClient
HttpClient client = new HttpClient()
{
  request.content = new FormUrlEncodedContent(endpoint);
  var response = await client.sendAsync(request);
  var result = response.content.ReadAsStringAsync().result;
  dynamic token = JObject.Parse(result);
  var accessToken = token.access_token;
}

```