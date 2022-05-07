---
sidebar_position: 3
---

# Troubleshoot Replay Webhook

Now that you can store webhooks, we want to see them and most importantly work with them.

Since the browsers sends the webhooks, it might generate CORS errors since your server may not handle CORS. (Basically your server should respond on all POST or OPTION request with some headers.) But we won't do that, we'll use a proxy instead.

### Create a CORS proxy

In order to avoid any errors, we'll use a cors proxy that will receive the request on your localhost and send them wherever you want.

Say you want to forward the webhooks on your Node application that listen on 9000.

```
npx local-cors-proxy --proxyUrl=http://localhost:9000
```

Now you can send webhooks to `http://localhost:8010/proxy` without any CORS error, and it will forward the webhook to `http://localhost:9000` 🎉.