---
id: trouble-shoot
slug: troubleshoot-replay-webhook
---

# Start the local proxy

If it is not the case, start the local proxy:

```
npx webhook-store-cli --port 9000
```

Under the hood, when you click the `Send` the webhook is sent to the local proxy, and then redispatched to your `localhost:9000`

![Demo with cli](/img/demo.gif)

### I receive twice all the webhook

The client (the tab you have open on \*.webhook.store) redirects automaticcaly all the webhooks to your localhost.
If you have multiple tab open with the webhook store, you will receive multiple webhooks.
