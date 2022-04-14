---
sidebar_position: 2
---

# Install a Webhook Store

## Getting Started

Get started by **creating a new Webhook Store**.

Or **try Open Webhook immediately** with **[openwebhook.io](https://www.openwebhook.io)** with some github webhooks.

### What you'll need
- A [Heroku](https://heroku.com) account to create a workspace with
  - A free dyno [up to 550 hours uptime](https://devcenter.heroku.com/changelog-items/907#:~:text=Starting%20today%2C%20Heroku%20accounts%20have,for%20an%20additional%20450%20hours.)
  - A free databade that stores [up to 10000 webhooks](https://devcenter.heroku.com/changelog-items/907#:~:text=Starting%20today%2C%20Heroku%20accounts%20have,for%20an%20additional%20450%20hours.)

## Create an Webhook Store

Clone the webhook store project
```
git clone git@github.com:OpenWebhook/webhook-store.git
```

Create a heroku app

```bash
cd webhook-store
heroku create webhook-store-YOURORG
```

Add a database

```bash
heroku addons:create heroku-postgresql:hobby-dev
```

Push the project on heroku
```bash
git push heroku
```

## Test your webhook store

You should have a Heroku domain `webhook-store-YOURORG.herokuapp.com` all the webhooks should posted on `/webhook`

Use Curl to POST a webhook on the store

```sh
curl -X POST https://webhook-store-YOURORG.herokuapp.com/webhook/some-url -d 'yolo=croute'
```

You should see that your webhook was received by the store, with the ID 1 and a creation date corresponding at the moment you sent the request.

### Configure your webhooks

You can now configure any webhook provider. Do not forget to add `/webhook` when you configure the webhooks.
For instance:
```
https://webhook-store.herokuapp.com/webhook/github/repo-client
```
