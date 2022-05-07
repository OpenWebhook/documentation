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
- The [heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#install-with-an-installer)

## Create an Webhook Store

Clone the webhook store project
```
git clone https://github.com/OpenWebhook/webhook-store.git && cd webhook-store
```

Create a heroku app (free)

```bash
heroku create webhook-store-YOURORG
```

Add a database (free)

```bash
heroku addons:create heroku-postgresql:hobby-dev
```

Push the project on heroku
```bash
git push heroku
```

## Test your webhook store

Your store should be up on your Heroku domain [webhook-store-YOURORG.herokuapp.com](https://webhook-store-YOURORG.herokuapp.com).

Use Curl to POST a webhook on the store

```sh
curl -X POST https://webhook-store-YOURORG.herokuapp.com/webhook/some-url -d 'yolo=croute'
```

You should see that your webhook was received by the store 🎉. 
