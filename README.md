# @n8n-dev/n8n-nodes-reverb

![reverb Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-reverb.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-reverb)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing reverb API integrations by hand.**

Every time you connect n8n to reverb, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to reverb took 5 minutes, not half a day?**

This node gives you **23+ resources** out of the box: **Articles**, **Categories**, **Comparison Shopping Pages**, **Conversations**, **Countries**, and 18 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-reverb
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-reverb`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **reverb API** → paste your API key
3. Drag the **reverb** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Articles | Get articles, Get list of all article categories |
| Categories | Get list of supported product categories, Get categories flat, Get full taxonomy tree of categories including middle categories |
| Comparison Shopping Pages | Get returns a set of comparison shopping pages based on the current params, Get show comparison shopping page, Get return new or used listings for a comparison shopping page, Get view reviews of a comparison shopping page |
| Conversations | Post make an offer to the other participant in the conversation |
| Countries | Get retrieve a list of country codes with corresponding subregions |
| Csps | Get returns a set of comparison shopping pages based on the current params, Get csps categories, Get show comparison shopping page |
| Curated Sets | Get curated sets |
| Currencies | Get list of supported display currencies for browsing listings, Get list of supported listing currencies for shops |
| Feedback | Get feedback details |
| Handpicked | Get results from a handpicked collection |
| Listing Conditions | Get list of supported product conditions |
| Listings | Get default search of listings includes only used  handmade add a filter to view all listings or use the listingsall endpoint, Post create a listing, Get all listings including used handmade and brand new, Get individual facets, Get returns the latest negotiation for the requesting user given a listing id, Post make an offer to the seller of a listing, Get view available bump tiers and stats for a listing, Post bump a listing, Post start a conversation with a seller, Get view the images associated with a particular listing, Delete an image from a listing, Get see all sales that include a listing, Delete a draft listing cannot be used on nondrafts, Put update a listing, Get edit listing, Post flag a listing for inappropriate content or fraud, Get view reviews of a listing, Post create a review for a listing, Get listing details |
| My | Get account details, Put update account details, Get see all addresses in your address book, Post create a new address in your address book, Delete an existing address in your address book, Put update an existing address in your address book, Get a list of your conversations, Post start a conversation, Post send a message, Put mark a conversation readunread, Get your actionable status counts, Delete my curated set product, Post my curated set product, Get listings from your feed, Get your feed customization options, Get your feed, Get list of received feedback, Get list of sent feedback, Get see what the user is following, Get returns a users articlecategoryfollows, Post set a users articlecategoryfollows, Delete unfollow a brand, Get follow status for a brand, Post follow a brand, Delete unfollow a subcategory, Get follow status for a subcategory, Post follow a subcategory, Delete unfollow a collection, Get follow status for a collection, Post follow a collection, Delete unfollow a handpicked collection, Get follow status for a handpicked collection, Post follow a handpicked collection, Get follow status for a search, Post follow a search, Delete unfollow a shop, Get follow status for a shop, Post follow a shop, Delete a follow, Delete my follows alert, Post my follows alert, Get retrieve a list of live listings for the seller to search all listings specify stateall, Get retrieve a list your draft listings, Get a list of active negotiations as a seller, Put end a listing, Get a list of your lists wishlist watch list etc, Get a list of active negotiations as a buyer, Get offer details, Post accept an offer, Post counter an offer, Post decline an offer, Get list of orders that need feedback, Get returns all orders newest first, Get my orders buying by uuid, Get returns unpaid orders newest first, Get returns order details for a buyer, Post marks an order as received by the buyer, Get all seller orders newest first, Get unpaid seller orders newest first, Get see previous orders from buyer, Get my orders selling by uuid, Get unpaid seller orders newest first, Get returns order details for a seller, Post marks an order as picked up, Post marks an order as shipped, Post initiate a refund for a sold order, Get payments, Get a list of payouts, Get read the line items of a payout, Get a list of refund requests as a seller, Put update a refund request for a sold order, Get a list of your recently viewed listings, Get a list of wishlisted items, Delete remove a listing from your wishlist, Put add a listing to your wishlist |
| Orders | Get feedback details for an orders buyer, Post add feedback about an orders buyer, Get feedback details for an orders seller, Post add feedback about an orders seller |
| Payment Methods | Get list of payment methods |
| Priceguide | Get a summary of transactions for a given price guide |
| Products | Get view a review, Put update a review, Post create a review for a product |
| Sales | Get view upcoming and live reverb official sales, Get view your created sales, Delete remove a listing from a sale, Post add listings to a sale, Get sales |
| Shipping | Get list of supported shipping providers, Get shipping regions |
| Shop | Get your own shop details, Put update your shop profile, Get list of supported product conditions, Get accepted payment methods, Delete disable vacation mode all listings will be reenabled, Get returns shop vacation status, Post enable vacation mode all listings will be unavailable until vacation mode is turned off |
| Shops | Get storefront details on a shop, Get list of shipping profiles for your shop, Get details on a shop, Get sellers feedback, Get sellers feedback as a buyer, Get sellers feedback as a seller |
| Wants | Get a list of wanted items by the user, Delete unmark an item wanted, Put mark an item wanted returns 200 on success or 422 on failure |
| Webhooks | Get webhook registrations, Post register a webhook, Delete remove a webhook |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from reverb docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official reverb OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **reverb** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the reverb API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
