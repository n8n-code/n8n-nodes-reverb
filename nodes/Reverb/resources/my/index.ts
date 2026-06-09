import type { INodeProperties } from 'n8n-workflow';

export const myDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					]
				}
			},
			"options": [
				{
					"name": "GET My Account",
					"value": "GET My Account",
					"action": "Get account details",
					"description": "Get account details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/account"
						}
					}
				},
				{
					"name": "PUT My Account",
					"value": "PUT My Account",
					"action": "Update account details",
					"description": "Update account details",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/my/account"
						}
					}
				},
				{
					"name": "GET My Addresses",
					"value": "GET My Addresses",
					"action": "See all addresses in your address book",
					"description": "See all addresses in your address book",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/addresses"
						}
					}
				},
				{
					"name": "POST My Addresses",
					"value": "POST My Addresses",
					"action": "Create a new address in your address book",
					"description": "Create a new address in your address book",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/my/addresses"
						}
					}
				},
				{
					"name": "DELETE My Addresses",
					"value": "DELETE My Addresses",
					"action": "Delete an existing address in your address book",
					"description": "Delete an existing address in your address book",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/my/addresses/{{$parameter[\"address_id\"]}}"
						}
					}
				},
				{
					"name": "PUT My Addresses",
					"value": "PUT My Addresses",
					"action": "Update an existing address in your address book",
					"description": "Update an existing address in your address book",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/my/addresses/{{$parameter[\"address_id\"]}}"
						}
					}
				},
				{
					"name": "GET My Conversations",
					"value": "GET My Conversations",
					"action": "Get a list of your conversations",
					"description": "Get a list of your conversations",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/conversations"
						}
					}
				},
				{
					"name": "POST My Conversations",
					"value": "POST My Conversations",
					"action": "Start a conversation",
					"description": "Start a conversation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/my/conversations"
						}
					}
				},
				{
					"name": "POST My Conversations Messages",
					"value": "POST My Conversations Messages",
					"action": "Send a message",
					"description": "Send a message",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/my/conversations/{{$parameter[\"conversation_id\"]}}/messages"
						}
					}
				},
				{
					"name": "PUT My Conversations",
					"value": "PUT My Conversations",
					"action": "Mark a conversation read/unread",
					"description": "Mark a conversation read/unread",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/my/conversations/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "GET My Counts",
					"value": "GET My Counts",
					"action": "Get your actionable status counts",
					"description": "Get your actionable status counts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/counts"
						}
					}
				},
				{
					"name": "DELETE My Curated Set Product",
					"value": "DELETE My Curated Set Product",
					"action": "DELETE My Curated Set Product",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/my/curated_set/product/{{$parameter[\"product_id\"]}}"
						}
					}
				},
				{
					"name": "POST My Curated Set Product",
					"value": "POST My Curated Set Product",
					"action": "POST My Curated Set Product",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/my/curated_set/product/{{$parameter[\"product_id\"]}}"
						}
					}
				},
				{
					"name": "GET My Feed",
					"value": "GET My Feed",
					"action": "Get listings from your feed",
					"description": "Get listings from your feed",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/feed"
						}
					}
				},
				{
					"name": "GET My Feed Customize",
					"value": "GET My Feed Customize",
					"action": "get your feed customization options",
					"description": "get your feed customization options",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/feed/customize"
						}
					}
				},
				{
					"name": "GET My Feed Grid",
					"value": "GET My Feed Grid",
					"action": "get your feed",
					"description": "get your feed",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/feed/grid"
						}
					}
				},
				{
					"name": "GET My Feedback Received",
					"value": "GET My Feedback Received",
					"action": "List of received feedback",
					"description": "List of received feedback",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/feedback/received"
						}
					}
				},
				{
					"name": "GET My Feedback Sent",
					"value": "GET My Feedback Sent",
					"action": "List of sent feedback",
					"description": "List of sent feedback",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/feedback/sent"
						}
					}
				},
				{
					"name": "GET My Follows",
					"value": "GET My Follows",
					"action": "See what the user is following",
					"description": "See what the user is following",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/follows"
						}
					}
				},
				{
					"name": "GET My Follows Articles",
					"value": "GET My Follows Articles",
					"action": "Returns a user's ArticleCategoryFollows",
					"description": "Returns a user's ArticleCategoryFollows",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/follows/articles"
						}
					}
				},
				{
					"name": "POST My Follows Articles",
					"value": "POST My Follows Articles",
					"action": "Set a user's ArticleCategoryFollows",
					"description": "Set a user's ArticleCategoryFollows",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/my/follows/articles"
						}
					}
				},
				{
					"name": "DELETE My Follows Brands",
					"value": "DELETE My Follows Brands",
					"action": "Unfollow a brand",
					"description": "Unfollow a brand",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/my/follows/brands/{{$parameter[\"slug\"]}}"
						}
					}
				},
				{
					"name": "GET My Follows Brands",
					"value": "GET My Follows Brands",
					"action": "Follow status for a brand",
					"description": "Follow status for a brand",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/follows/brands/{{$parameter[\"slug\"]}}"
						}
					}
				},
				{
					"name": "POST My Follows Brands",
					"value": "POST My Follows Brands",
					"action": "Follow a brand",
					"description": "Follow a brand",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/my/follows/brands/{{$parameter[\"slug\"]}}"
						}
					}
				},
				{
					"name": "DELETE My Follows Categories",
					"value": "DELETE My Follows Categories",
					"action": "Unfollow a subcategory",
					"description": "Unfollow a subcategory",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/my/follows/categories/{{$parameter[\"category\"]}}/{{$parameter[\"subcategory\"]}}"
						}
					}
				},
				{
					"name": "GET My Follows Categories",
					"value": "GET My Follows Categories",
					"action": "Follow status for a subcategory",
					"description": "Follow status for a subcategory",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/follows/categories/{{$parameter[\"category\"]}}/{{$parameter[\"subcategory\"]}}"
						}
					}
				},
				{
					"name": "POST My Follows Categories",
					"value": "POST My Follows Categories",
					"action": "Follow a subcategory",
					"description": "Follow a subcategory",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/my/follows/categories/{{$parameter[\"category\"]}}/{{$parameter[\"subcategory\"]}}"
						}
					}
				},
				{
					"name": "DELETE My Follows Collections",
					"value": "DELETE My Follows Collections",
					"action": "Unfollow a collection",
					"description": "Unfollow a collection",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/my/follows/collections/{{$parameter[\"slug\"]}}"
						}
					}
				},
				{
					"name": "GET My Follows Collections",
					"value": "GET My Follows Collections",
					"action": "Follow status for a collection",
					"description": "Follow status for a collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/follows/collections/{{$parameter[\"slug\"]}}"
						}
					}
				},
				{
					"name": "POST My Follows Collections",
					"value": "POST My Follows Collections",
					"action": "Follow a collection",
					"description": "Follow a collection",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/my/follows/collections/{{$parameter[\"slug\"]}}"
						}
					}
				},
				{
					"name": "DELETE My Follows Handpicked",
					"value": "DELETE My Follows Handpicked",
					"action": "Unfollow a handpicked collection",
					"description": "Unfollow a handpicked collection",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/my/follows/handpicked/{{$parameter[\"slug\"]}}"
						}
					}
				},
				{
					"name": "GET My Follows Handpicked",
					"value": "GET My Follows Handpicked",
					"action": "Follow status for a handpicked collection",
					"description": "Follow status for a handpicked collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/follows/handpicked/{{$parameter[\"slug\"]}}"
						}
					}
				},
				{
					"name": "POST My Follows Handpicked",
					"value": "POST My Follows Handpicked",
					"action": "Follow a handpicked collection",
					"description": "Follow a handpicked collection",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/my/follows/handpicked/{{$parameter[\"slug\"]}}"
						}
					}
				},
				{
					"name": "GET My Follows Search",
					"value": "GET My Follows Search",
					"action": "Follow status for a search",
					"description": "Follow status for a search",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/follows/search"
						}
					}
				},
				{
					"name": "POST My Follows Search",
					"value": "POST My Follows Search",
					"action": "Follow a search",
					"description": "Follow a search",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/my/follows/search"
						}
					}
				},
				{
					"name": "DELETE My Follows Shops",
					"value": "DELETE My Follows Shops",
					"action": "Unfollow a shop",
					"description": "Unfollow a shop",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/my/follows/shops/{{$parameter[\"slug\"]}}"
						}
					}
				},
				{
					"name": "GET My Follows Shops",
					"value": "GET My Follows Shops",
					"action": "Follow status for a shop",
					"description": "Follow status for a shop",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/follows/shops/{{$parameter[\"slug\"]}}"
						}
					}
				},
				{
					"name": "POST My Follows Shops",
					"value": "POST My Follows Shops",
					"action": "Follow a shop",
					"description": "Follow a shop",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/my/follows/shops/{{$parameter[\"slug\"]}}"
						}
					}
				},
				{
					"name": "DELETE My Follows",
					"value": "DELETE My Follows",
					"action": "Delete a follow",
					"description": "Delete a follow",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/my/follows/{{$parameter[\"follow_id\"]}}"
						}
					}
				},
				{
					"name": "DELETE My Follows Alert",
					"value": "DELETE My Follows Alert",
					"action": "DELETE My Follows Alert",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/my/follows/{{$parameter[\"follow_id\"]}}/alert"
						}
					}
				},
				{
					"name": "POST My Follows Alert",
					"value": "POST My Follows Alert",
					"action": "POST My Follows Alert",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/my/follows/{{$parameter[\"follow_id\"]}}/alert"
						}
					}
				},
				{
					"name": "GET My Listings",
					"value": "GET My Listings",
					"action": "Retrieve a list of live listings for the seller. To search all listings specify state=all",
					"description": "Retrieve a list of live listings for the seller. To search all listings specify state=all",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/listings"
						}
					}
				},
				{
					"name": "GET My Listings Drafts",
					"value": "GET My Listings Drafts",
					"action": "Retrieve a list your draft listings",
					"description": "Retrieve a list your draft listings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/listings/drafts"
						}
					}
				},
				{
					"name": "GET My Listings Negotiations",
					"value": "GET My Listings Negotiations",
					"action": "Get a list of active negotiations as a seller",
					"description": "Get a list of active negotiations as a seller",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/listings/negotiations"
						}
					}
				},
				{
					"name": "PUT My Listings State End",
					"value": "PUT My Listings State End",
					"action": "End a listing",
					"description": "End a listing",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/my/listings/{{$parameter[\"slug\"]}}/state/end"
						}
					}
				},
				{
					"name": "GET My Lists",
					"value": "GET My Lists",
					"action": "Get a list of your lists (wishlist, watch list, etc)",
					"description": "Get a list of your lists (wishlist, watch list, etc)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/lists"
						}
					}
				},
				{
					"name": "GET My Negotiations Buying",
					"value": "GET My Negotiations Buying",
					"action": "Get a list of active negotiations as a buyer",
					"description": "Get a list of active negotiations as a buyer",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/negotiations/buying"
						}
					}
				},
				{
					"name": "GET My Negotiations",
					"value": "GET My Negotiations",
					"action": "Get offer details",
					"description": "Get offer details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/negotiations/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "POST My Negotiations Accept",
					"value": "POST My Negotiations Accept",
					"action": "Accept an offer",
					"description": "Accept an offer",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/my/negotiations/{{$parameter[\"id\"]}}/accept"
						}
					}
				},
				{
					"name": "POST My Negotiations Counter",
					"value": "POST My Negotiations Counter",
					"action": "Counter an offer",
					"description": "Counter an offer",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/my/negotiations/{{$parameter[\"id\"]}}/counter"
						}
					}
				},
				{
					"name": "POST My Negotiations Decline",
					"value": "POST My Negotiations Decline",
					"action": "Decline an offer",
					"description": "Decline an offer",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/my/negotiations/{{$parameter[\"id\"]}}/decline"
						}
					}
				},
				{
					"name": "GET My Orders Awaiting Feedback",
					"value": "GET My Orders Awaiting Feedback",
					"action": "List of orders that need feedback",
					"description": "List of orders that need feedback",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/orders/awaiting_feedback"
						}
					}
				},
				{
					"name": "GET My Orders Buying All",
					"value": "GET My Orders Buying All",
					"action": "Returns all orders, newest first.",
					"description": "Returns all orders, newest first.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/orders/buying/all"
						}
					}
				},
				{
					"name": "GET My Orders Buying By Uuid",
					"value": "GET My Orders Buying By Uuid",
					"action": "GET My Orders Buying By Uuid",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/orders/buying/by_uuid/{{$parameter[\"uuid\"]}}"
						}
					}
				},
				{
					"name": "GET My Orders Buying Unpaid",
					"value": "GET My Orders Buying Unpaid",
					"action": "Returns unpaid orders, newest first.",
					"description": "Returns unpaid orders, newest first.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/orders/buying/unpaid"
						}
					}
				},
				{
					"name": "GET My Orders Buying",
					"value": "GET My Orders Buying",
					"action": "Returns order details for a buyer",
					"description": "Returns order details for a buyer",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/orders/buying/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "POST My Orders Buying Mark Received",
					"value": "POST My Orders Buying Mark Received",
					"action": "Marks an order as received by the buyer",
					"description": "Marks an order as received by the buyer",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/my/orders/buying/{{$parameter[\"id\"]}}/mark_received"
						}
					}
				},
				{
					"name": "GET My Orders Selling All",
					"value": "GET My Orders Selling All",
					"action": "Get all seller orders, newest first.",
					"description": "Get all seller orders, newest first.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/orders/selling/all"
						}
					}
				},
				{
					"name": "GET My Orders Selling Awaiting Shipment",
					"value": "GET My Orders Selling Awaiting Shipment",
					"action": "Get unpaid seller orders, newest first.",
					"description": "Get unpaid seller orders, newest first.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/orders/selling/awaiting_shipment"
						}
					}
				},
				{
					"name": "GET My Orders Selling Buyer History",
					"value": "GET My Orders Selling Buyer History",
					"action": "See previous orders from buyer",
					"description": "See previous orders from buyer",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/orders/selling/buyer_history/{{$parameter[\"buyer_id\"]}}"
						}
					}
				},
				{
					"name": "GET My Orders Selling By Uuid",
					"value": "GET My Orders Selling By Uuid",
					"action": "GET My Orders Selling By Uuid",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/orders/selling/by_uuid/{{$parameter[\"uuid\"]}}"
						}
					}
				},
				{
					"name": "GET My Orders Selling Unpaid",
					"value": "GET My Orders Selling Unpaid",
					"action": "Get unpaid seller orders, newest first.",
					"description": "Get unpaid seller orders, newest first.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/orders/selling/unpaid"
						}
					}
				},
				{
					"name": "GET My Orders Selling",
					"value": "GET My Orders Selling",
					"action": "Returns order details for a seller",
					"description": "Returns order details for a seller",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/orders/selling/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "POST My Orders Selling Mark Picked Up",
					"value": "POST My Orders Selling Mark Picked Up",
					"action": "Marks an order as picked up",
					"description": "Marks an order as picked up",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/my/orders/selling/{{$parameter[\"id\"]}}/mark_picked_up"
						}
					}
				},
				{
					"name": "POST My Orders Selling Ship",
					"value": "POST My Orders Selling Ship",
					"action": "Marks an order as shipped",
					"description": "Marks an order as shipped",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/my/orders/selling/{{$parameter[\"id\"]}}/ship"
						}
					}
				},
				{
					"name": "POST My Orders Selling Refund Requests",
					"value": "POST My Orders Selling Refund Requests",
					"action": "Initiate a refund for a sold order",
					"description": "Initiate a refund for a sold order",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/my/orders/selling/{{$parameter[\"order_id\"]}}/refund_requests"
						}
					}
				},
				{
					"name": "GET My Payments Selling",
					"value": "GET My Payments Selling",
					"action": "Get payments",
					"description": "Get payments",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/payments/selling"
						}
					}
				},
				{
					"name": "GET My Payouts",
					"value": "GET My Payouts",
					"action": "Get a list of payouts",
					"description": "Get a list of payouts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/payouts"
						}
					}
				},
				{
					"name": "GET My Payouts Line Items",
					"value": "GET My Payouts Line Items",
					"action": "Read the line items of a payout",
					"description": "Read the line items of a payout",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/payouts/{{$parameter[\"id\"]}}/line_items"
						}
					}
				},
				{
					"name": "GET My Refund Requests Selling",
					"value": "GET My Refund Requests Selling",
					"action": "Get a list of refund requests as a seller",
					"description": "Get a list of refund requests as a seller",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/refund_requests/selling"
						}
					}
				},
				{
					"name": "PUT My Refund Requests Selling",
					"value": "PUT My Refund Requests Selling",
					"action": "Update a refund request for a sold order",
					"description": "Update a refund request for a sold order",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/my/refund_requests/selling/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "GET My Viewed Listings",
					"value": "GET My Viewed Listings",
					"action": "Get a list of your recently viewed listings.",
					"description": "Get a list of your recently viewed listings.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/viewed_listings"
						}
					}
				},
				{
					"name": "GET My Wishlist",
					"value": "GET My Wishlist",
					"action": "Get a list of wishlisted items",
					"description": "Get a list of wishlisted items",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/my/wishlist"
						}
					}
				},
				{
					"name": "DELETE My Wishlist",
					"value": "DELETE My Wishlist",
					"action": "Remove a listing from your wishlist",
					"description": "Remove a listing from your wishlist",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/my/wishlist/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "PUT My Wishlist",
					"value": "PUT My Wishlist",
					"action": "Add a listing to your wishlist",
					"description": "Add a listing to your wishlist",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/my/wishlist/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /my/account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Account"
					]
				}
			}
		},
		{
			"displayName": "PUT /my/account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"PUT My Account"
					]
				}
			}
		},
		{
			"displayName": "Currency",
			"name": "currency",
			"type": "string",
			"default": "",
			"description": "The currency preference for the account",
			"routing": {
				"send": {
					"property": "currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"PUT My Account"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "first_name",
			"type": "string",
			"default": "",
			"description": "The first name of the account holder",
			"routing": {
				"send": {
					"property": "first_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"PUT My Account"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "last_name",
			"type": "string",
			"default": "",
			"description": "The last name of the account holder",
			"routing": {
				"send": {
					"property": "last_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"PUT My Account"
					]
				}
			}
		},
		{
			"displayName": "Locale Code",
			"name": "locale_code",
			"type": "string",
			"default": "",
			"description": "The locale code for the account",
			"routing": {
				"send": {
					"property": "locale_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"PUT My Account"
					]
				}
			}
		},
		{
			"displayName": "Shipping Region Code",
			"name": "shipping_region_code",
			"type": "string",
			"default": "",
			"description": "The shipping region preference for the account",
			"routing": {
				"send": {
					"property": "shipping_region_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"PUT My Account"
					]
				}
			}
		},
		{
			"displayName": "Third Party Ad Data Consent",
			"name": "third_party_ad_data_consent",
			"type": "boolean",
			"default": true,
			"description": "The privacy setting preference for the account",
			"routing": {
				"send": {
					"property": "third_party_ad_data_consent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"PUT My Account"
					]
				}
			}
		},
		{
			"displayName": "GET /my/addresses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Addresses"
					]
				}
			}
		},
		{
			"displayName": "POST /my/addresses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Addresses"
					]
				}
			}
		},
		{
			"displayName": "DELETE /my/addresses/{address_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"DELETE My Addresses"
					]
				}
			}
		},
		{
			"displayName": "Address Id",
			"name": "address_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"DELETE My Addresses"
					]
				}
			}
		},
		{
			"displayName": "PUT /my/addresses/{address_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"PUT My Addresses"
					]
				}
			}
		},
		{
			"displayName": "Address Id",
			"name": "address_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"PUT My Addresses"
					]
				}
			}
		},
		{
			"displayName": "GET /my/conversations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Conversations"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"description": "Query string to search conversations by",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Conversations"
					]
				}
			}
		},
		{
			"displayName": "Unread Only",
			"name": "unread_only",
			"description": "Show unread conversations only",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unread_only",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Conversations"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Conversations"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"default": 24,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "per_page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Conversations"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Conversations"
					]
				}
			}
		},
		{
			"displayName": "POST /my/conversations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Conversations"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": "",
			"description": "The body of the message",
			"routing": {
				"send": {
					"property": "body",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Conversations"
					]
				}
			}
		},
		{
			"displayName": "Cloudinary Photos",
			"name": "cloudinary_photos",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "An array of cloudinary data hashes (Reverb internal use only).",
			"routing": {
				"send": {
					"property": "cloudinary_photos",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Conversations"
					]
				}
			}
		},
		{
			"displayName": "Listing Id",
			"name": "listing_id",
			"type": "number",
			"default": 0,
			"description": "The id of the listing being discussed",
			"routing": {
				"send": {
					"property": "listing_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Conversations"
					]
				}
			}
		},
		{
			"displayName": "Recipient Id",
			"name": "recipient_id",
			"type": "number",
			"default": 0,
			"description": "The id of the user you are trying to contact",
			"routing": {
				"send": {
					"property": "recipient_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Conversations"
					]
				}
			}
		},
		{
			"displayName": "Recipient Uuid",
			"name": "recipient_uuid",
			"type": "string",
			"default": "",
			"description": "The uuid of the user you are trying to contact",
			"routing": {
				"send": {
					"property": "recipient_uuid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Conversations"
					]
				}
			}
		},
		{
			"displayName": "Shop Id",
			"name": "shop_id",
			"type": "string",
			"default": "",
			"description": "The id of the shop you are trying to contact",
			"routing": {
				"send": {
					"property": "shop_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Conversations"
					]
				}
			}
		},
		{
			"displayName": "POST /my/conversations/{conversation_id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Conversations Messages"
					]
				}
			}
		},
		{
			"displayName": "Conversation Id",
			"name": "conversation_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Conversations Messages"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "body",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Conversations Messages"
					]
				}
			}
		},
		{
			"displayName": "PUT /my/conversations/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"PUT My Conversations"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"PUT My Conversations"
					]
				}
			}
		},
		{
			"displayName": "Read",
			"name": "read",
			"type": "boolean",
			"default": true,
			"description": "Should the conversation be marked as read",
			"routing": {
				"send": {
					"property": "read",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"PUT My Conversations"
					]
				}
			}
		},
		{
			"displayName": "GET /my/counts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Counts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /my/curated_set/product/{product_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"DELETE My Curated Set Product"
					]
				}
			}
		},
		{
			"displayName": "Product Id",
			"name": "product_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"DELETE My Curated Set Product"
					]
				}
			}
		},
		{
			"displayName": "POST /my/curated_set/product/{product_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Curated Set Product"
					]
				}
			}
		},
		{
			"displayName": "Product Id",
			"name": "product_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Curated Set Product"
					]
				}
			}
		},
		{
			"displayName": "GET /my/feed",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Feed"
					]
				}
			}
		},
		{
			"displayName": "GET /my/feed/customize",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Feed Customize"
					]
				}
			}
		},
		{
			"displayName": "GET /my/feed/grid",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Feed Grid"
					]
				}
			}
		},
		{
			"displayName": "GET /my/feedback/received",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Feedback Received"
					]
				}
			}
		},
		{
			"displayName": "GET /my/feedback/sent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Feedback Sent"
					]
				}
			}
		},
		{
			"displayName": "GET /my/follows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Follows"
					]
				}
			}
		},
		{
			"displayName": "GET /my/follows/articles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Follows Articles"
					]
				}
			}
		},
		{
			"displayName": "POST /my/follows/articles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Articles"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Category Uuids",
			"name": "category_uuids",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "category_uuids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Articles"
					]
				}
			}
		},
		{
			"displayName": "DELETE /my/follows/brands/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"DELETE My Follows Brands"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"DELETE My Follows Brands"
					]
				}
			}
		},
		{
			"displayName": "GET /my/follows/brands/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Follows Brands"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Follows Brands"
					]
				}
			}
		},
		{
			"displayName": "POST /my/follows/brands/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Brands"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Brands"
					]
				}
			}
		},
		{
			"displayName": "DELETE /my/follows/categories/{category}/{subcategory}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"DELETE My Follows Categories"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"DELETE My Follows Categories"
					]
				}
			}
		},
		{
			"displayName": "Subcategory",
			"name": "subcategory",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"DELETE My Follows Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /my/follows/categories/{category}/{subcategory}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Follows Categories"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Follows Categories"
					]
				}
			}
		},
		{
			"displayName": "Subcategory",
			"name": "subcategory",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Follows Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /my/follows/categories/{category}/{subcategory}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Categories"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Categories"
					]
				}
			}
		},
		{
			"displayName": "Subcategory",
			"name": "subcategory",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Categories"
					]
				}
			}
		},
		{
			"displayName": "DELETE /my/follows/collections/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"DELETE My Follows Collections"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"DELETE My Follows Collections"
					]
				}
			}
		},
		{
			"displayName": "GET /my/follows/collections/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Follows Collections"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Follows Collections"
					]
				}
			}
		},
		{
			"displayName": "POST /my/follows/collections/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Collections"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Collections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /my/follows/handpicked/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"DELETE My Follows Handpicked"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"DELETE My Follows Handpicked"
					]
				}
			}
		},
		{
			"displayName": "GET /my/follows/handpicked/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Follows Handpicked"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Follows Handpicked"
					]
				}
			}
		},
		{
			"displayName": "POST /my/follows/handpicked/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Handpicked"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Handpicked"
					]
				}
			}
		},
		{
			"displayName": "GET /my/follows/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "POST /my/follows/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Accepts Gift Cards",
			"name": "accepts_gift_cards",
			"type": "boolean",
			"default": true,
			"description": "If true, include only items that accept gift cards",
			"routing": {
				"send": {
					"property": "accepts_gift_cards",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Accepts Payment Plans",
			"name": "accepts_payment_plans",
			"type": "boolean",
			"default": true,
			"description": "If true, only show items that can be purchased with a payment plan",
			"routing": {
				"send": {
					"property": "accepts_payment_plans",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Auction Price Max",
			"name": "auction_price_max",
			"type": "number",
			"default": 0,
			"description": "Maximum current auction price",
			"routing": {
				"send": {
					"property": "auction_price_max",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"type": "string",
			"default": "",
			"description": "Category slug from /api/categories",
			"routing": {
				"send": {
					"property": "category",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Conditions",
			"name": "conditions",
			"type": "options",
			"default": "[\n  null\n]",
			"description": "Condition: all,new,b-stock,used,non-functioning,all-but-new,poor,fair,good,very-good,excellent,mint",
			"options": [
				{
					"name": "All",
					"value": "all"
				},
				{
					"name": "New",
					"value": "new"
				},
				{
					"name": "B Stock",
					"value": "b-stock"
				},
				{
					"name": "Used",
					"value": "used"
				},
				{
					"name": "Non Functioning",
					"value": "non-functioning"
				},
				{
					"name": "All But New",
					"value": "all-but-new"
				},
				{
					"name": "Poor",
					"value": "poor"
				},
				{
					"name": "Fair",
					"value": "fair"
				},
				{
					"name": "Good",
					"value": "good"
				},
				{
					"name": "Very Good",
					"value": "very-good"
				},
				{
					"name": "Excellent",
					"value": "excellent"
				},
				{
					"name": "Mint",
					"value": "mint"
				}
			],
			"routing": {
				"send": {
					"property": "conditions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Currency",
			"name": "currency",
			"type": "options",
			"default": "USD",
			"description": "The currency to be used for the price filters",
			"options": [
				{
					"name": "USD",
					"value": "USD"
				},
				{
					"name": "CAD",
					"value": "CAD"
				},
				{
					"name": "EUR",
					"value": "EUR"
				},
				{
					"name": "GBP",
					"value": "GBP"
				},
				{
					"name": "AUD",
					"value": "AUD"
				},
				{
					"name": "JPY",
					"value": "JPY"
				},
				{
					"name": "NZD",
					"value": "NZD"
				},
				{
					"name": "MXN",
					"value": "MXN"
				},
				{
					"name": "DKK",
					"value": "DKK"
				},
				{
					"name": "SEK",
					"value": "SEK"
				},
				{
					"name": "CHF",
					"value": "CHF"
				},
				{
					"name": "ARS",
					"value": "ARS"
				},
				{
					"name": "BRL",
					"value": "BRL"
				},
				{
					"name": "HKD",
					"value": "HKD"
				},
				{
					"name": "NOK",
					"value": "NOK"
				},
				{
					"name": "PHP",
					"value": "PHP"
				},
				{
					"name": "PLN",
					"value": "PLN"
				},
				{
					"name": "RUB",
					"value": "RUB"
				}
			],
			"routing": {
				"send": {
					"property": "currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Decade",
			"name": "decade",
			"type": "string",
			"default": "",
			"description": "Decade: e.g. 1970s, early 70s",
			"routing": {
				"send": {
					"property": "decade",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Exclude Auctions",
			"name": "exclude_auctions",
			"type": "boolean",
			"default": true,
			"description": "If true, exclude auctions",
			"routing": {
				"send": {
					"property": "exclude_auctions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Finish",
			"name": "finish",
			"type": "string",
			"default": "",
			"description": "Visual finish of the item, common for guitars",
			"routing": {
				"send": {
					"property": "finish",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Handmade",
			"name": "handmade",
			"type": "boolean",
			"default": true,
			"description": "Handmade items only",
			"routing": {
				"send": {
					"property": "handmade",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Item City",
			"name": "item_city",
			"type": "string",
			"default": "",
			"description": "City where item is located",
			"routing": {
				"send": {
					"property": "item_city",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Item Country",
			"name": "item_country",
			"type": "string",
			"default": "",
			"description": "DEPRECATED - Country code where item is located",
			"routing": {
				"send": {
					"property": "item_country",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Item Region",
			"name": "item_region",
			"type": "string",
			"default": "",
			"description": "Country code where item is located",
			"routing": {
				"send": {
					"property": "item_region",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Item State",
			"name": "item_state",
			"type": "string",
			"default": "",
			"description": "State or region code where item is located",
			"routing": {
				"send": {
					"property": "item_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Listing Type",
			"name": "listing_type",
			"type": "options",
			"default": "auctions",
			"description": "Type of listing: auctions,offers",
			"options": [
				{
					"name": "Auctions",
					"value": "auctions"
				},
				{
					"name": "Offers",
					"value": "offers"
				}
			],
			"routing": {
				"send": {
					"property": "listing_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Local Pickup",
			"name": "local_pickup",
			"type": "boolean",
			"default": true,
			"description": "Only items that offer local pickup",
			"routing": {
				"send": {
					"property": "local_pickup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Make",
			"name": "make",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Make(s)/brand of item (e.g. Fender). Can take a single value or an array.",
			"routing": {
				"send": {
					"property": "make",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Model",
			"name": "model",
			"type": "string",
			"default": "",
			"description": "Model of item (e.g. Stratocaster)",
			"routing": {
				"send": {
					"property": "model",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Must Not",
			"name": "must_not",
			"type": "string",
			"default": "",
			"description": "Search term negation. If you want to exclude a term, add it here",
			"routing": {
				"send": {
					"property": "must_not",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Not Ids",
			"name": "not_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Listing ID negation. If you want to exclude a listing, add it here.",
			"routing": {
				"send": {
					"property": "not_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Preferred Seller",
			"name": "preferred_seller",
			"type": "boolean",
			"default": true,
			"description": "If true, include only items by Reverb Preferred Sellers",
			"routing": {
				"send": {
					"property": "preferred_seller",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Price Max",
			"name": "price_max",
			"type": "number",
			"default": 0,
			"description": "Maximum price of search results (USD)",
			"routing": {
				"send": {
					"property": "price_max",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Price Min",
			"name": "price_min",
			"type": "number",
			"default": 0,
			"description": "Minimum price of search results (USD)",
			"routing": {
				"send": {
					"property": "price_min",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Product Type",
			"name": "product_type",
			"type": "string",
			"default": "",
			"description": "Product type slug from /api/categories",
			"routing": {
				"send": {
					"property": "product_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"type": "string",
			"default": "",
			"description": "Search query.",
			"routing": {
				"send": {
					"property": "query",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Ships To",
			"name": "ships_to",
			"type": "string",
			"default": "",
			"description": "Limit search to items that ship to this country code",
			"routing": {
				"send": {
					"property": "ships_to",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Shop",
			"name": "shop",
			"type": "string",
			"default": "",
			"description": "Slug of shop to search",
			"routing": {
				"send": {
					"property": "shop",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Shop Id",
			"name": "shop_id",
			"type": "string",
			"default": "",
			"description": "ID of shop to search",
			"routing": {
				"send": {
					"property": "shop_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Watchers Count Min",
			"name": "watchers_count_min",
			"type": "number",
			"default": 0,
			"description": "Minimum number of watchers (used to find popular items)",
			"routing": {
				"send": {
					"property": "watchers_count_min",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Year Max",
			"name": "year_max",
			"type": "number",
			"default": 0,
			"description": "Maximum year of manufacture",
			"routing": {
				"send": {
					"property": "year_max",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "Year Min",
			"name": "year_min",
			"type": "number",
			"default": 0,
			"description": "Minumum year of manufacture",
			"routing": {
				"send": {
					"property": "year_min",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Search"
					]
				}
			}
		},
		{
			"displayName": "DELETE /my/follows/shops/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"DELETE My Follows Shops"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"DELETE My Follows Shops"
					]
				}
			}
		},
		{
			"displayName": "GET /my/follows/shops/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Follows Shops"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Follows Shops"
					]
				}
			}
		},
		{
			"displayName": "POST /my/follows/shops/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Shops"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Shops"
					]
				}
			}
		},
		{
			"displayName": "DELETE /my/follows/{follow_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"DELETE My Follows"
					]
				}
			}
		},
		{
			"displayName": "Follow Id",
			"name": "follow_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"DELETE My Follows"
					]
				}
			}
		},
		{
			"displayName": "DELETE /my/follows/{follow_id}/alert",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"DELETE My Follows Alert"
					]
				}
			}
		},
		{
			"displayName": "Follow Id",
			"name": "follow_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"DELETE My Follows Alert"
					]
				}
			}
		},
		{
			"displayName": "POST /my/follows/{follow_id}/alert",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Alert"
					]
				}
			}
		},
		{
			"displayName": "Follow Id",
			"name": "follow_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Follows Alert"
					]
				}
			}
		},
		{
			"displayName": "GET /my/listings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"description": "Search query.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "query",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Auction Price Max",
			"name": "auction_price_max",
			"description": "Maximum current auction price",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "auction_price_max",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"description": "Category slug from /api/categories",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "category",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Product Type",
			"name": "product_type",
			"description": "Product type slug from /api/categories",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "product_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Conditions",
			"name": "conditions",
			"description": "Condition: all,new,b-stock,used,non-functioning,all-but-new,poor,fair,good,very-good,excellent,mint",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "conditions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Decade",
			"name": "decade",
			"description": "Decade: e.g. 1970s, early 70s",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "decade",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Finish",
			"name": "finish",
			"description": "Visual finish of the item, common for guitars",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "finish",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Handmade",
			"name": "handmade",
			"description": "Handmade items only",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "handmade",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Item City",
			"name": "item_city",
			"description": "City where item is located",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "item_city",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Item Country",
			"name": "item_country",
			"description": "DEPRECATED - Country code where item is located",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "item_country",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Item Region",
			"name": "item_region",
			"description": "Country code where item is located",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "item_region",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Item State",
			"name": "item_state",
			"description": "State or region code where item is located",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "item_state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Make",
			"name": "make",
			"description": "Make(s)/brand of item (e.g. Fender). Can take a single value or an array.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "make",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Model",
			"name": "model",
			"description": "Model of item (e.g. Stratocaster)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "model",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Must Not",
			"name": "must_not",
			"description": "Search term negation. If you want to exclude a term, add it here",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "must_not",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Price Max",
			"name": "price_max",
			"description": "Maximum price of search results (USD)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "price_max",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Price Min",
			"name": "price_min",
			"description": "Minimum price of search results (USD)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "price_min",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Currency",
			"name": "currency",
			"description": "The currency to be used for the price filters",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "currency",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Year Max",
			"name": "year_max",
			"description": "Maximum year of manufacture",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "year_max",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Year Min",
			"name": "year_min",
			"description": "Minumum year of manufacture",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "year_min",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Accepts Gift Cards",
			"name": "accepts_gift_cards",
			"description": "If true, include only items that accept gift cards",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "accepts_gift_cards",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Preferred Seller",
			"name": "preferred_seller",
			"description": "If true, include only items by Reverb Preferred Sellers",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "preferred_seller",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Shop",
			"name": "shop",
			"description": "Slug of shop to search",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "shop",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Shop Id",
			"name": "shop_id",
			"description": "ID of shop to search",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "shop_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Listing Type",
			"name": "listing_type",
			"description": "Type of listing: auctions,offers",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "listing_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Ships To",
			"name": "ships_to",
			"description": "Limit search to items that ship to this country code",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ships_to",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Exclude Auctions",
			"name": "exclude_auctions",
			"description": "If true, exclude auctions",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_auctions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Accepts Payment Plans",
			"name": "accepts_payment_plans",
			"description": "If true, only show items that can be purchased with a payment plan",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "accepts_payment_plans",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Watchers Count Min",
			"name": "watchers_count_min",
			"description": "Minimum number of watchers (used to find popular items)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "watchers_count_min",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Not Ids",
			"name": "not_ids",
			"description": "Listing ID negation. If you want to exclude a listing, add it here.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "not_ids",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Local Pickup",
			"name": "local_pickup",
			"description": "Only items that offer local pickup",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "local_pickup",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"description": "Available: [\"all\", \"draft\", \"ended\", \"live\", \"ordered\", \"sold_out\", \"suspended\", \"seller_unavailable\"]. Defaults to 'live'",
			"default": "live",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "Sku",
			"name": "sku",
			"description": "Find a listing by sku",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sku",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings"
					]
				}
			}
		},
		{
			"displayName": "GET /my/listings/drafts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"description": "Search query.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "query",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Auction Price Max",
			"name": "auction_price_max",
			"description": "Maximum current auction price",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "auction_price_max",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"description": "Category slug from /api/categories",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "category",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Product Type",
			"name": "product_type",
			"description": "Product type slug from /api/categories",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "product_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Conditions",
			"name": "conditions",
			"description": "Condition: all,new,b-stock,used,non-functioning,all-but-new,poor,fair,good,very-good,excellent,mint",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "conditions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Decade",
			"name": "decade",
			"description": "Decade: e.g. 1970s, early 70s",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "decade",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Finish",
			"name": "finish",
			"description": "Visual finish of the item, common for guitars",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "finish",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Handmade",
			"name": "handmade",
			"description": "Handmade items only",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "handmade",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Item City",
			"name": "item_city",
			"description": "City where item is located",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "item_city",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Item Country",
			"name": "item_country",
			"description": "DEPRECATED - Country code where item is located",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "item_country",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Item Region",
			"name": "item_region",
			"description": "Country code where item is located",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "item_region",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Item State",
			"name": "item_state",
			"description": "State or region code where item is located",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "item_state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Make",
			"name": "make",
			"description": "Make(s)/brand of item (e.g. Fender). Can take a single value or an array.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "make",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Model",
			"name": "model",
			"description": "Model of item (e.g. Stratocaster)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "model",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Must Not",
			"name": "must_not",
			"description": "Search term negation. If you want to exclude a term, add it here",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "must_not",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Price Max",
			"name": "price_max",
			"description": "Maximum price of search results (USD)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "price_max",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Price Min",
			"name": "price_min",
			"description": "Minimum price of search results (USD)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "price_min",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Currency",
			"name": "currency",
			"description": "The currency to be used for the price filters",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "currency",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Year Max",
			"name": "year_max",
			"description": "Maximum year of manufacture",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "year_max",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Year Min",
			"name": "year_min",
			"description": "Minumum year of manufacture",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "year_min",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Accepts Gift Cards",
			"name": "accepts_gift_cards",
			"description": "If true, include only items that accept gift cards",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "accepts_gift_cards",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Preferred Seller",
			"name": "preferred_seller",
			"description": "If true, include only items by Reverb Preferred Sellers",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "preferred_seller",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Shop",
			"name": "shop",
			"description": "Slug of shop to search",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "shop",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Shop Id",
			"name": "shop_id",
			"description": "ID of shop to search",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "shop_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Listing Type",
			"name": "listing_type",
			"description": "Type of listing: auctions,offers",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "listing_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Ships To",
			"name": "ships_to",
			"description": "Limit search to items that ship to this country code",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ships_to",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Exclude Auctions",
			"name": "exclude_auctions",
			"description": "If true, exclude auctions",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_auctions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Accepts Payment Plans",
			"name": "accepts_payment_plans",
			"description": "If true, only show items that can be purchased with a payment plan",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "accepts_payment_plans",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Watchers Count Min",
			"name": "watchers_count_min",
			"description": "Minimum number of watchers (used to find popular items)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "watchers_count_min",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Not Ids",
			"name": "not_ids",
			"description": "Listing ID negation. If you want to exclude a listing, add it here.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "not_ids",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "Local Pickup",
			"name": "local_pickup",
			"description": "Only items that offer local pickup",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "local_pickup",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Drafts"
					]
				}
			}
		},
		{
			"displayName": "GET /my/listings/negotiations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Negotiations"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Negotiations"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"default": 24,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "per_page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Negotiations"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Listings Negotiations"
					]
				}
			}
		},
		{
			"displayName": "PUT /my/listings/{slug}/state/end",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"PUT My Listings State End"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"PUT My Listings State End"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Reason",
			"name": "reason",
			"type": "options",
			"default": "not_sold",
			"description": "The reason this listing is being ended. Valid reasons: [\"not_sold\", \"reverb_sale\"].",
			"options": [
				{
					"name": "Not Sold",
					"value": "not_sold"
				},
				{
					"name": "Reverb Sale",
					"value": "reverb_sale"
				}
			],
			"routing": {
				"send": {
					"property": "reason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"PUT My Listings State End"
					]
				}
			}
		},
		{
			"displayName": "GET /my/lists",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Lists"
					]
				}
			}
		},
		{
			"displayName": "GET /my/negotiations/buying",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Negotiations Buying"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Negotiations Buying"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"default": 24,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "per_page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Negotiations Buying"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Negotiations Buying"
					]
				}
			}
		},
		{
			"displayName": "GET /my/negotiations/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Negotiations"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Negotiations"
					]
				}
			}
		},
		{
			"displayName": "POST /my/negotiations/{id}/accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Negotiations Accept"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Negotiations Accept"
					]
				}
			}
		},
		{
			"displayName": "Message",
			"name": "message",
			"type": "string",
			"default": "",
			"description": "Message to include with accepted offer",
			"routing": {
				"send": {
					"property": "message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Negotiations Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /my/negotiations/{id}/counter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Negotiations Counter"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Negotiations Counter"
					]
				}
			}
		},
		{
			"displayName": "Country Code",
			"name": "country_code",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "country_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Negotiations Counter"
					]
				}
			}
		},
		{
			"displayName": "Layaway Terms Slug",
			"name": "layaway_terms_slug",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "layaway_terms_slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Negotiations Counter"
					]
				}
			}
		},
		{
			"displayName": "Message",
			"name": "message",
			"type": "string",
			"default": "",
			"description": "Message to include with counter offer",
			"routing": {
				"send": {
					"property": "message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Negotiations Counter"
					]
				}
			}
		},
		{
			"displayName": "Offer Items",
			"name": "offer_items",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "offer_items",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Negotiations Counter"
					]
				}
			}
		},
		{
			"displayName": "Price",
			"name": "price",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "price",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Negotiations Counter"
					]
				}
			}
		},
		{
			"displayName": "Quantity",
			"name": "quantity",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "quantity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Negotiations Counter"
					]
				}
			}
		},
		{
			"displayName": "Recipient Id",
			"name": "recipient_id",
			"type": "string",
			"default": "",
			"description": "ID of the recipient of the offer. Required if you are the seller pushing an offer to a buyer.",
			"routing": {
				"send": {
					"property": "recipient_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Negotiations Counter"
					]
				}
			}
		},
		{
			"displayName": "Region Code",
			"name": "region_code",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "region_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Negotiations Counter"
					]
				}
			}
		},
		{
			"displayName": "Shipping Price",
			"name": "shipping_price",
			"type": "json",
			"default": "{}",
			"description": "Shipping price (sellers only)",
			"routing": {
				"send": {
					"property": "shipping_price",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Negotiations Counter"
					]
				}
			}
		},
		{
			"displayName": "POST /my/negotiations/{id}/decline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Negotiations Decline"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Negotiations Decline"
					]
				}
			}
		},
		{
			"displayName": "GET /my/orders/awaiting_feedback",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Orders Awaiting Feedback"
					]
				}
			}
		},
		{
			"displayName": "GET /my/orders/buying/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Orders Buying All"
					]
				}
			}
		},
		{
			"displayName": "GET /my/orders/buying/by_uuid/{uuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Orders Buying By Uuid"
					]
				}
			}
		},
		{
			"displayName": "Uuid",
			"name": "uuid",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Orders Buying By Uuid"
					]
				}
			}
		},
		{
			"displayName": "GET /my/orders/buying/unpaid",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Orders Buying Unpaid"
					]
				}
			}
		},
		{
			"displayName": "GET /my/orders/buying/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Orders Buying"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Orders Buying"
					]
				}
			}
		},
		{
			"displayName": "POST /my/orders/buying/{id}/mark_received",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Orders Buying Mark Received"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Orders Buying Mark Received"
					]
				}
			}
		},
		{
			"displayName": "GET /my/orders/selling/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Orders Selling All"
					]
				}
			}
		},
		{
			"displayName": "GET /my/orders/selling/awaiting_shipment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Orders Selling Awaiting Shipment"
					]
				}
			}
		},
		{
			"displayName": "GET /my/orders/selling/buyer_history/{buyer_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Orders Selling Buyer History"
					]
				}
			}
		},
		{
			"displayName": "Buyer Id",
			"name": "buyer_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Orders Selling Buyer History"
					]
				}
			}
		},
		{
			"displayName": "GET /my/orders/selling/by_uuid/{uuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Orders Selling By Uuid"
					]
				}
			}
		},
		{
			"displayName": "Uuid",
			"name": "uuid",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Orders Selling By Uuid"
					]
				}
			}
		},
		{
			"displayName": "GET /my/orders/selling/unpaid",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Orders Selling Unpaid"
					]
				}
			}
		},
		{
			"displayName": "GET /my/orders/selling/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Orders Selling"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Orders Selling"
					]
				}
			}
		},
		{
			"displayName": "POST /my/orders/selling/{id}/mark_picked_up",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Orders Selling Mark Picked Up"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Orders Selling Mark Picked Up"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"type": "string",
			"default": "",
			"description": "Date the item was picked up.",
			"routing": {
				"send": {
					"property": "date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Orders Selling Mark Picked Up"
					]
				}
			}
		},
		{
			"displayName": "POST /my/orders/selling/{id}/ship",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Orders Selling Ship"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Orders Selling Ship"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Provider",
			"name": "provider",
			"type": "string",
			"default": "",
			"description": "Shipping provider: One of UPS, USPS, FedEx, DHL Deutschland, DHLExpress, DHLGlobalMail, DHL, Canada Post, CanPar, Royal Mail, PostNL, Australia Post, EMS, La Poste - Colissimo, China Post, GLS, Parcelforce, Purolator, Interlogistica, Correos España, Ukraine Post, DPD Germany, DPD UK, DPD France, Hermes, TNT, Other",
			"routing": {
				"send": {
					"property": "provider",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Orders Selling Ship"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Send Notification",
			"name": "send_notification",
			"type": "boolean",
			"default": true,
			"description": "Should we send an email notification to the buyer",
			"routing": {
				"send": {
					"property": "send_notification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Orders Selling Ship"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tracking Number",
			"name": "tracking_number",
			"type": "string",
			"default": "",
			"description": "Tracking number provided by the shipping provider",
			"routing": {
				"send": {
					"property": "tracking_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Orders Selling Ship"
					]
				}
			}
		},
		{
			"displayName": "POST /my/orders/selling/{order_id}/refund_requests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Orders Selling Refund Requests"
					]
				}
			}
		},
		{
			"displayName": "Order Id",
			"name": "order_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"POST My Orders Selling Refund Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /my/payments/selling",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Payments Selling"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Payments Selling"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"default": 24,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "per_page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Payments Selling"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Payments Selling"
					]
				}
			}
		},
		{
			"displayName": "Created Start Date",
			"name": "created_start_date",
			"description": "Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created_start_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Payments Selling"
					]
				}
			}
		},
		{
			"displayName": "Created End Date",
			"name": "created_end_date",
			"description": "Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created_end_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Payments Selling"
					]
				}
			}
		},
		{
			"displayName": "Updated Start Date",
			"name": "updated_start_date",
			"description": "Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "updated_start_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Payments Selling"
					]
				}
			}
		},
		{
			"displayName": "Updated End Date",
			"name": "updated_end_date",
			"description": "Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "updated_end_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Payments Selling"
					]
				}
			}
		},
		{
			"displayName": "Order Id",
			"name": "order_id",
			"description": "Look up payments by order id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "order_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Payments Selling"
					]
				}
			}
		},
		{
			"displayName": "GET /my/payouts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Payouts"
					]
				}
			}
		},
		{
			"displayName": "GET /my/payouts/{id}/line_items",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Payouts Line Items"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Payouts Line Items"
					]
				}
			}
		},
		{
			"displayName": "GET /my/refund_requests/selling",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Refund Requests Selling"
					]
				}
			}
		},
		{
			"displayName": "PUT /my/refund_requests/selling/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"PUT My Refund Requests Selling"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"PUT My Refund Requests Selling"
					]
				}
			}
		},
		{
			"displayName": "GET /my/viewed_listings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Viewed Listings"
					]
				}
			}
		},
		{
			"displayName": "GET /my/wishlist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"GET My Wishlist"
					]
				}
			}
		},
		{
			"displayName": "DELETE /my/wishlist/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"DELETE My Wishlist"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"DELETE My Wishlist"
					]
				}
			}
		},
		{
			"displayName": "PUT /my/wishlist/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"PUT My Wishlist"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"My"
					],
					"operation": [
						"PUT My Wishlist"
					]
				}
			}
		},
];
