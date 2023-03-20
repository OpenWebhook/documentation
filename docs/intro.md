---
id: intro
---

# Introduction

## Why

Working with webhooks is painful because you need:

- To trigger the webhook
- To convey the webhook to your dev environment

Open webhooks gives you a public URL that stores a webhook for as long as you want.

You'll never have to configure a new temporary ngrok url. Whenever a webhook is received, anyone from your team can analyze and replay this webhook.

# Free cloud webhook store (\*.webhook.store)

## Capacity

All the stores have a maximum of 100 webhooks capacity. Where limit is reached, webhooks are deleted in FIFO order.

## Authentication

Webhook store does not require any registration. It is based on Github Oauth.

Accessing the webhooks is secured, depending on the store you use.

### Public disposable webhook store `*.webhook.store`

URLs matching `*.webhook.store` are **public** and can be used by anyone, yopmail style.
Usefull when hacking around.

### Private personal webhook store `*.github.webhook.store`

Each Github user has a personnal webhook store.

URL mathing `*.github.webhook.store` are **private** and can be accessed only by the github user `$GITHUB_USER` that matches `$GITHUB_USER.github.webhook.store`. The user must be logged in.

### Private team webhook store `*.github-org.webhook.store`

Each Github organisation has a team webhook store.

URL matching `*.github-org.webhook.store` are **private** and can be accessed only by members of the github organisation `$GITHUB_ORG` that matches `$GITHUB_ORG.github-org.webhook.store`. The user must be logged in. The membership must be public.

#### ⚠️ Public organisation membership

Webhook store uses public Github API to know if a user belongs to an organisation:
https://api.github.com/users/$GITHUB_USER/orgs

For instance, [the organisations of the user Samox](https://api.github.com/users/Samox/orgs) contains OpenWebhook, hence Samox will have access to `openwebhook.github-org.webhook.store`

By default, github makes organisation membership private. If your membership is not public, here is [Github documentation to publicize membership](Publicizing or hiding organization membership)

# Self hosting webhook store

> ⚠️ By default, self hosting webhook store are public. Feature to enable github-org based authentication is work in progress.

Or you can follow documentation for self hosting. OpenWebhook supports:

- [Heroku](self-hosting/install-store-heroku)
- [Docker](https://hub.docker.com/r/openwebhook/webhook-store/tags)
  - [Docker-compose](self-hosting/install-store-docker-compose)
  - [Kubernetes](self-hosting/install-store-kubernetes)
