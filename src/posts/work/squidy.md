---
title: "Squidy"
date: "2020-08-27"
description: "A Google Calendar add-on that lets you record, save, and email personal event notes."
link: "https://github.com/duchess-toffee/squidy"
icon: "../../images/work/mobile/squidy.png"
coverPhoto: "../../images/work/desktop/squidy.png"
photo: "../../images/work/scroll/squidy.png"
tools: "Apps Scripts"
tag: "work"
---

Inspired by personal pain points of taking meeting notes on paper or Google Docs and then emailing them out manually, Squidy was created to condense the actions and allow the end-user to take personal notes and email them directly from Google Calendar events.

The service leverages [Google's Apps Scripts](https://developers.google.com/apps-script) to build cards with [Google Calendar APIs](https://developers.google.com/gsuite/add-ons/concepts/cards). This allows the user to write notes on the focused event.

To save or fetch notes, the service caches the notes with [Google's Properties Service](https://developers.google.com/apps-script/reference/properties/properties-service).

Finally, the service leverages [Gmail APIs](https://developers.google.com/gsuite/add-ons/gmail) to be able to create drafts and send emails of the notes taken to attendees.
