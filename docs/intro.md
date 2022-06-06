---
id: intro
---

# Introduction

![Demo with cli](/img/demo.gif)

## Why

Working with webhooks is painful because you need:

- To trigger the webhook
- To convey the webhook to your dev environment

Open webhooks gives you a public URL that stores a webhook for as long as you want.

You'll never have to configure a new temporary ngrok url. Whenever a webhook is received, anyone from your team can analyze and replay this webhook.

## Self hosted VS free store

### Free webhook store

You can use any `*.webhook.store` subdomain for free.
For instance **[CHANGE_ME.webhook.store](https://changeme.webhook.store)**.

Or try OpenWebhook immediately with [demo.openwebhook.io](https://demo.openwebhook.io) with some github webhooks.

### Self hosted webhook store

Or you can follow documentation for self hosting. OpenWebhook supports:

- [Heroku](self-hosting/install-store-heroku)
- [Docker](https://hub.docker.com/r/openwebhook/webhook-store/tags)
  - [Docker-compose](self-hosting/install-store-docker-compose)
  - [Kubernetes](self-hosting/install-store-kubernetes)
