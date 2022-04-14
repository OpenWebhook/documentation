---
sidebar_position: 3
---

# Replay your webhooks

Now that you can store webhooks, we want to see them and most importantly work with them.

## Get started 

Basically the web client will download webhooks and send them from the browser to your localhost.

### Warning

Since the browsers sends the webhooks, it might generate CORS errors since your server may not handle CORS. (Basically your server should respond on all POST or OPTION request with some headers.) But we won't do that, we'll use a proxy instead.

### Create a CORS proxy

In order to avoid any errors, we'll use a cors proxy that will receive the request on your localhost and send them whenever you want.

Say you want to forward the webhooks on your Nest application that listen on 9000.

```
npx local-cors-proxy --proxyUrl=http://localhost:9000
```

## Configure the Open Webhook client

Now go to [openwebhook.io](https://www.openwebhook.io).
It has 2 configurable URL

### The Webhook Store URL
In the webhook store replace the url of your webhook store with yours. e.g `https://webhook-store-that-you-just-created.herokuapp.com`

### The redirect URL
If you use the `local-cors-proxy` then keep the current url `http://localhost:8010/proxy`. 
Otherwise, set the url where you want to send the webhooks. It can be on the localhost, or on another webhook store, or any url.

## How it works

### JSON support 

When you click the send button, it will send a POST request on the `redirecturl`+`webhook.path` and send the payload as `application/json`.

### Autoforward

Your client has created a websocket connection: when the store receives a new webhook, the client is aware and forwards it to the forward URL.