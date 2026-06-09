import type { INodeProperties } from 'n8n-workflow';

export const listingsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					]
				}
			},
			"options": [
				{
					"name": "GET Listings",
					"value": "GET Listings",
					"action": "Default search of listings includes only used & handmade. Add a filter to view all listings or use the /listings/all endpoint.",
					"description": "Default search of listings includes only used & handmade. Add a filter to view all listings or use the /listings/all endpoint.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listings"
						}
					}
				},
				{
					"name": "POST Listings",
					"value": "POST Listings",
					"action": "Create a listing",
					"description": "Create a listing",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/listings"
						}
					}
				},
				{
					"name": "GET Listings All",
					"value": "GET Listings All",
					"action": "All listings including used, handmade, and brand new",
					"description": "All listings including used, handmade, and brand new",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listings/all"
						}
					}
				},
				{
					"name": "GET Listings Facets Seller Location",
					"value": "GET Listings Facets Seller Location",
					"action": "Individual facets",
					"description": "Individual facets",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listings/facets/seller_location"
						}
					}
				},
				{
					"name": "GET Listings Negotiation",
					"value": "GET Listings Negotiation",
					"action": "Returns the latest negotiation for the requesting user given a listing id",
					"description": "Returns the latest negotiation for the requesting user given a listing id",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listings/{{$parameter[\"id\"]}}/negotiation"
						}
					}
				},
				{
					"name": "POST Listings Offer",
					"value": "POST Listings Offer",
					"action": "Make an offer to the seller of a listing",
					"description": "Make an offer to the seller of a listing",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/listings/{{$parameter[\"id\"]}}/offer"
						}
					}
				},
				{
					"name": "GET Listings Bump",
					"value": "GET Listings Bump",
					"action": "View available bump tiers and stats for a listing",
					"description": "View available bump tiers and stats for a listing",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listings/{{$parameter[\"listing_id\"]}}/bump"
						}
					}
				},
				{
					"name": "POST Listings Bump",
					"value": "POST Listings Bump",
					"action": "Bump a listing",
					"description": "Bump a listing",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/listings/{{$parameter[\"listing_id\"]}}/bump/{{$parameter[\"budget_type\"]}}"
						}
					}
				},
				{
					"name": "POST Listings Conversations",
					"value": "POST Listings Conversations",
					"action": "Start a conversation with a seller",
					"description": "Start a conversation with a seller",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/listings/{{$parameter[\"listing_id\"]}}/conversations"
						}
					}
				},
				{
					"name": "GET Listings Images",
					"value": "GET Listings Images",
					"action": "View the images associated with a particular listing",
					"description": "View the images associated with a particular listing",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listings/{{$parameter[\"listing_id\"]}}/images"
						}
					}
				},
				{
					"name": "DELETE Listings Images",
					"value": "DELETE Listings Images",
					"action": "Delete an image from a listing",
					"description": "Delete an image from a listing",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/listings/{{$parameter[\"listing_id\"]}}/images/{{$parameter[\"image_id\"]}}"
						}
					}
				},
				{
					"name": "GET Listings Sales",
					"value": "GET Listings Sales",
					"action": "See all sales that include a listing.",
					"description": "See all sales that include a listing.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listings/{{$parameter[\"listing_id\"]}}/sales"
						}
					}
				},
				{
					"name": "DELETE Listings",
					"value": "DELETE Listings",
					"action": "Delete a draft listing. Cannot be used on non-drafts.",
					"description": "Delete a draft listing. Cannot be used on non-drafts.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/listings/{{$parameter[\"slug\"]}}"
						}
					}
				},
				{
					"name": "PUT Listings",
					"value": "PUT Listings",
					"action": "Update a listing",
					"description": "Update a listing",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/listings/{{$parameter[\"slug\"]}}"
						}
					}
				},
				{
					"name": "GET Listings Edit",
					"value": "GET Listings Edit",
					"action": "Edit listing.",
					"description": "Edit listing.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listings/{{$parameter[\"slug\"]}}/edit"
						}
					}
				},
				{
					"name": "POST Listings Flag",
					"value": "POST Listings Flag",
					"action": "Flag a listing for inappropriate content or fraud",
					"description": "Flag a listing for inappropriate content or fraud",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/listings/{{$parameter[\"slug\"]}}/flag"
						}
					}
				},
				{
					"name": "GET Listings Reviews",
					"value": "GET Listings Reviews",
					"action": "View reviews of a listing",
					"description": "View reviews of a listing",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listings/{{$parameter[\"slug\"]}}/reviews"
						}
					}
				},
				{
					"name": "POST Listings Reviews",
					"value": "POST Listings Reviews",
					"action": "Create a review for a listing",
					"description": "Create a review for a listing",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/listings/{{$parameter[\"slug\"]}}/reviews"
						}
					}
				},
				{
					"name": "GET Listings Similar Listings",
					"value": "GET Listings Similar Listings",
					"action": "Listing details",
					"description": "Listing details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listings/{{$parameter[\"slug\"]}}/similar_listings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /listings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
					]
				}
			}
		},
		{
			"displayName": "Shop ID",
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings"
					]
				}
			}
		},
		{
			"displayName": "POST /listings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Categories",
			"name": "categories",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "categories",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Condition",
			"name": "condition",
			"type": "json",
			"default": "{}",
			"description": "Condition",
			"routing": {
				"send": {
					"property": "condition",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Product description. Please keep formatting to a minimum.",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Exclusive Channel",
			"name": "exclusive_channel",
			"type": "options",
			"default": "seller_site",
			"description": "Currently for users of seller sites only, this allows you to have a listing available only to your seller site by setting this to 'seller_site'",
			"options": [
				{
					"name": "Seller Site",
					"value": "seller_site"
				},
				{
					"name": "Reverb",
					"value": "reverb"
				},
				{
					"name": "None",
					"value": "none"
				}
			],
			"routing": {
				"send": {
					"property": "exclusive_channel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Finish",
			"name": "finish",
			"type": "string",
			"default": "",
			"description": "Finish, e.g. 'Sunburst'",
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
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Has Inventory",
			"name": "has_inventory",
			"type": "boolean",
			"default": true,
			"description": "Set true if selling more than one",
			"routing": {
				"send": {
					"property": "has_inventory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Inventory",
			"name": "inventory",
			"type": "number",
			"default": 0,
			"description": "Number of items available for sale. Reverb will increment and decrement automatically.",
			"routing": {
				"send": {
					"property": "inventory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "location",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Make",
			"name": "make",
			"type": "string",
			"default": "",
			"description": "ex: Fender, Gibson",
			"routing": {
				"send": {
					"property": "make",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Model",
			"name": "model",
			"type": "string",
			"default": "",
			"description": "ex: Stratocaster, SG",
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
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Multi Item",
			"name": "multi_item",
			"type": "boolean",
			"default": true,
			"description": "Specifies if the listing is a bundle of multiple individual items",
			"routing": {
				"send": {
					"property": "multi_item",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Offers Enabled",
			"name": "offers_enabled",
			"type": "boolean",
			"default": true,
			"description": "Whether the listing accepts negotiated offers (default: true)",
			"routing": {
				"send": {
					"property": "offers_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Origin Country Code",
			"name": "origin_country_code",
			"type": "string",
			"default": "",
			"description": "Country of origin/manufacture, ISO code (e.g: US)",
			"routing": {
				"send": {
					"property": "origin_country_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Photos",
			"name": "photos",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "An array of image URLs. Ex: ['http://my.site.com/image.jpg']",
			"routing": {
				"send": {
					"property": "photos",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Preorder Info",
			"name": "preorder_info",
			"type": "json",
			"default": "{}",
			"description": "Create or update a preorder listing. Requires opt-in. Please contact sales@reverb.com if you would like to activate this feature.",
			"routing": {
				"send": {
					"property": "preorder_info",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
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
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Prop 65 Warning",
			"name": "prop_65_warning",
			"type": "string",
			"default": "",
			"description": "If your listing contains chemicals that are required to be reported under California Prop 65, please provide your warning statement. We will add the required 'Warning' label and link to California's information page, so you only need to provide the body of the warning. For more information, see https://www.p65warnings.ca.gov/new-proposition-65-warnings",
			"routing": {
				"send": {
					"property": "prop_65_warning",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Publish",
			"name": "publish",
			"type": "boolean",
			"default": true,
			"description": "Publish your listing if draft",
			"routing": {
				"send": {
					"property": "publish",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Seller",
			"name": "seller",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "seller",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Seller Cost",
			"name": "seller_cost",
			"type": "string",
			"default": "",
			"description": "Cost of goods in your currency as a POSIX-compliant decimal number (internal use only, not shown to buyers)",
			"routing": {
				"send": {
					"property": "seller_cost",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Shipping",
			"name": "shipping",
			"type": "json",
			"default": "{\n  \"rates\": [\n    {\n      \"rate\": {}\n    }\n  ]\n}",
			"routing": {
				"send": {
					"property": "shipping",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Shipping Profile ID",
			"name": "shipping_profile_id",
			"type": "string",
			"default": "",
			"description": "id of a shop's shipping profile",
			"routing": {
				"send": {
					"property": "shipping_profile_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Shipping Profile Name",
			"name": "shipping_profile_name",
			"type": "string",
			"default": "",
			"description": "DEPRECATED, please use shipping_profile_id. Name of a shipping profile",
			"routing": {
				"send": {
					"property": "shipping_profile_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Sku",
			"name": "sku",
			"type": "string",
			"default": "",
			"description": "Unique identifier for product",
			"routing": {
				"send": {
					"property": "sku",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Sold As Is",
			"name": "sold_as_is",
			"type": "boolean",
			"default": true,
			"description": "This item is sold As-Is and cannot be returned",
			"routing": {
				"send": {
					"property": "sold_as_is",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Storage Location",
			"name": "storage_location",
			"type": "string",
			"default": "",
			"description": "Internal note used by sellers to back reference their catalog system when entering a listing",
			"routing": {
				"send": {
					"property": "storage_location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Tax Exempt",
			"name": "tax_exempt",
			"type": "boolean",
			"default": true,
			"description": "Listing is exempt from taxes / VAT",
			"routing": {
				"send": {
					"property": "tax_exempt",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"description": "Title of your listing",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Upc",
			"name": "upc",
			"type": "string",
			"default": "",
			"description": "Valid UPC code",
			"routing": {
				"send": {
					"property": "upc",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Upc Does Not Apply",
			"name": "upc_does_not_apply",
			"type": "boolean",
			"default": true,
			"description": "True if a brand new product has no UPC code, ie for a handmade or custom item",
			"routing": {
				"send": {
					"property": "upc_does_not_apply",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Videos",
			"name": "videos",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "List of YouTube video urls. Note: ONLY ONE ALLOWED",
			"routing": {
				"send": {
					"property": "videos",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "Year",
			"name": "year",
			"type": "string",
			"default": "",
			"description": "Supports many formats. Ex: 1979, mid-70s, late 90s",
			"routing": {
				"send": {
					"property": "year",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings"
					]
				}
			}
		},
		{
			"displayName": "GET /listings/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
					]
				}
			}
		},
		{
			"displayName": "Shop ID",
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
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
						"Listings"
					],
					"operation": [
						"GET Listings All"
					]
				}
			}
		},
		{
			"displayName": "GET /listings/facets/seller_location",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"GET Listings Facets Seller Location"
					]
				}
			}
		},
		{
			"displayName": "GET /listings/{id}/negotiation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"GET Listings Negotiation"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"GET Listings Negotiation"
					]
				}
			}
		},
		{
			"displayName": "POST /listings/{id}/offer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings Offer"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings Offer"
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
						"Listings"
					],
					"operation": [
						"POST Listings Offer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Price",
			"name": "price",
			"type": "string",
			"default": "",
			"description": "Offer price",
			"routing": {
				"send": {
					"property": "price",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings Offer"
					]
				}
			}
		},
		{
			"displayName": "Shipping Price",
			"name": "shipping_price",
			"type": "string",
			"default": "",
			"description": "Shipping price (sellers only)",
			"routing": {
				"send": {
					"property": "shipping_price",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings Offer"
					]
				}
			}
		},
		{
			"displayName": "GET /listings/{listing_id}/bump",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"GET Listings Bump"
					]
				}
			}
		},
		{
			"displayName": "Listing ID",
			"name": "listing_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"GET Listings Bump"
					]
				}
			}
		},
		{
			"displayName": "POST /listings/{listing_id}/bump/{budget_type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings Bump"
					]
				}
			}
		},
		{
			"displayName": "Listing ID",
			"name": "listing_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings Bump"
					]
				}
			}
		},
		{
			"displayName": "Budget Type",
			"name": "budget_type",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings Bump"
					]
				}
			}
		},
		{
			"displayName": "POST /listings/{listing_id}/conversations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings Conversations"
					]
				}
			}
		},
		{
			"displayName": "Listing ID",
			"name": "listing_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings Conversations"
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
						"Listings"
					],
					"operation": [
						"POST Listings Conversations"
					]
				}
			}
		},
		{
			"displayName": "GET /listings/{listing_id}/images",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"GET Listings Images"
					]
				}
			}
		},
		{
			"displayName": "Listing ID",
			"name": "listing_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"GET Listings Images"
					]
				}
			}
		},
		{
			"displayName": "DELETE /listings/{listing_id}/images/{image_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"DELETE Listings Images"
					]
				}
			}
		},
		{
			"displayName": "Listing ID",
			"name": "listing_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"DELETE Listings Images"
					]
				}
			}
		},
		{
			"displayName": "Image ID",
			"name": "image_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"DELETE Listings Images"
					]
				}
			}
		},
		{
			"displayName": "GET /listings/{listing_id}/sales",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"GET Listings Sales"
					]
				}
			}
		},
		{
			"displayName": "Listing ID",
			"name": "listing_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"GET Listings Sales"
					]
				}
			}
		},
		{
			"displayName": "DELETE /listings/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"DELETE Listings"
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
						"Listings"
					],
					"operation": [
						"DELETE Listings"
					]
				}
			}
		},
		{
			"displayName": "PUT /listings/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
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
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Categories",
			"name": "categories",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "categories",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Condition",
			"name": "condition",
			"type": "json",
			"default": "{}",
			"description": "Condition",
			"routing": {
				"send": {
					"property": "condition",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Product description. Please keep formatting to a minimum.",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Exclusive Channel",
			"name": "exclusive_channel",
			"type": "options",
			"default": "seller_site",
			"description": "Currently for users of seller sites only, this allows you to have a listing available only to your seller site by setting this to 'seller_site'",
			"options": [
				{
					"name": "Seller Site",
					"value": "seller_site"
				},
				{
					"name": "Reverb",
					"value": "reverb"
				},
				{
					"name": "None",
					"value": "none"
				}
			],
			"routing": {
				"send": {
					"property": "exclusive_channel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Finish",
			"name": "finish",
			"type": "string",
			"default": "",
			"description": "Finish, e.g. 'Sunburst'",
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
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Has Inventory",
			"name": "has_inventory",
			"type": "boolean",
			"default": true,
			"description": "Set true if selling more than one",
			"routing": {
				"send": {
					"property": "has_inventory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Inventory",
			"name": "inventory",
			"type": "number",
			"default": 0,
			"description": "Number of items available for sale. Reverb will increment and decrement automatically.",
			"routing": {
				"send": {
					"property": "inventory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "location",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Make",
			"name": "make",
			"type": "string",
			"default": "",
			"description": "ex: Fender, Gibson",
			"routing": {
				"send": {
					"property": "make",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Model",
			"name": "model",
			"type": "string",
			"default": "",
			"description": "ex: Stratocaster, SG",
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
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Multi Item",
			"name": "multi_item",
			"type": "boolean",
			"default": true,
			"description": "Specifies if the listing is a bundle of multiple individual items",
			"routing": {
				"send": {
					"property": "multi_item",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Offers Enabled",
			"name": "offers_enabled",
			"type": "boolean",
			"default": true,
			"description": "Whether the listing accepts negotiated offers (default: true)",
			"routing": {
				"send": {
					"property": "offers_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Origin Country Code",
			"name": "origin_country_code",
			"type": "string",
			"default": "",
			"description": "Country of origin/manufacture, ISO code (e.g: US)",
			"routing": {
				"send": {
					"property": "origin_country_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Photos",
			"name": "photos",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "An array of image URLs. Ex: ['http://my.site.com/image.jpg']",
			"routing": {
				"send": {
					"property": "photos",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Preorder Info",
			"name": "preorder_info",
			"type": "json",
			"default": "{}",
			"description": "Create or update a preorder listing. Requires opt-in. Please contact sales@reverb.com if you would like to activate this feature.",
			"routing": {
				"send": {
					"property": "preorder_info",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
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
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Prop 65 Warning",
			"name": "prop_65_warning",
			"type": "string",
			"default": "",
			"description": "If your listing contains chemicals that are required to be reported under California Prop 65, please provide your warning statement. We will add the required 'Warning' label and link to California's information page, so you only need to provide the body of the warning. For more information, see https://www.p65warnings.ca.gov/new-proposition-65-warnings",
			"routing": {
				"send": {
					"property": "prop_65_warning",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Publish",
			"name": "publish",
			"type": "boolean",
			"default": true,
			"description": "Publish your listing if draft",
			"routing": {
				"send": {
					"property": "publish",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Seller",
			"name": "seller",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "seller",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Seller Cost",
			"name": "seller_cost",
			"type": "string",
			"default": "",
			"description": "Cost of goods in your currency as a POSIX-compliant decimal number (internal use only, not shown to buyers)",
			"routing": {
				"send": {
					"property": "seller_cost",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Shipping",
			"name": "shipping",
			"type": "json",
			"default": "{\n  \"rates\": [\n    {\n      \"rate\": {}\n    }\n  ]\n}",
			"routing": {
				"send": {
					"property": "shipping",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Shipping Profile ID",
			"name": "shipping_profile_id",
			"type": "string",
			"default": "",
			"description": "id of a shop's shipping profile",
			"routing": {
				"send": {
					"property": "shipping_profile_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Shipping Profile Name",
			"name": "shipping_profile_name",
			"type": "string",
			"default": "",
			"description": "DEPRECATED, please use shipping_profile_id. Name of a shipping profile",
			"routing": {
				"send": {
					"property": "shipping_profile_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Sku",
			"name": "sku",
			"type": "string",
			"default": "",
			"description": "Unique identifier for product",
			"routing": {
				"send": {
					"property": "sku",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Sold As Is",
			"name": "sold_as_is",
			"type": "boolean",
			"default": true,
			"description": "This item is sold As-Is and cannot be returned",
			"routing": {
				"send": {
					"property": "sold_as_is",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Storage Location",
			"name": "storage_location",
			"type": "string",
			"default": "",
			"description": "Internal note used by sellers to back reference their catalog system when entering a listing",
			"routing": {
				"send": {
					"property": "storage_location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Tax Exempt",
			"name": "tax_exempt",
			"type": "boolean",
			"default": true,
			"description": "Listing is exempt from taxes / VAT",
			"routing": {
				"send": {
					"property": "tax_exempt",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"description": "Title of your listing",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Upc",
			"name": "upc",
			"type": "string",
			"default": "",
			"description": "Valid UPC code",
			"routing": {
				"send": {
					"property": "upc",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Upc Does Not Apply",
			"name": "upc_does_not_apply",
			"type": "boolean",
			"default": true,
			"description": "True if a brand new product has no UPC code, ie for a handmade or custom item",
			"routing": {
				"send": {
					"property": "upc_does_not_apply",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Videos",
			"name": "videos",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "List of YouTube video urls. Note: ONLY ONE ALLOWED",
			"routing": {
				"send": {
					"property": "videos",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "Year",
			"name": "year",
			"type": "string",
			"default": "",
			"description": "Supports many formats. Ex: 1979, mid-70s, late 90s",
			"routing": {
				"send": {
					"property": "year",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"PUT Listings"
					]
				}
			}
		},
		{
			"displayName": "GET /listings/{slug}/edit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"GET Listings Edit"
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
						"Listings"
					],
					"operation": [
						"GET Listings Edit"
					]
				}
			}
		},
		{
			"displayName": "POST /listings/{slug}/flag",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings Flag"
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
						"Listings"
					],
					"operation": [
						"POST Listings Flag"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "User input description specifying what is flag-worthy about this listing",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings Flag"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Reason",
			"name": "reason",
			"type": "string",
			"default": "",
			"description": "Valid reasons: 'Sexuality/nudity', 'Hateful or inappropriate speech', 'Item not as described or potential fraud', 'Trademark infringement', 'Other'",
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
						"Listings"
					],
					"operation": [
						"POST Listings Flag"
					]
				}
			}
		},
		{
			"displayName": "GET /listings/{slug}/reviews",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"GET Listings Reviews"
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
						"Listings"
					],
					"operation": [
						"GET Listings Reviews"
					]
				}
			}
		},
		{
			"displayName": "POST /listings/{slug}/reviews",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"POST Listings Reviews"
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
						"Listings"
					],
					"operation": [
						"POST Listings Reviews"
					]
				}
			}
		},
		{
			"displayName": "GET /listings/{slug}/similar_listings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Listings"
					],
					"operation": [
						"GET Listings Similar Listings"
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
						"Listings"
					],
					"operation": [
						"GET Listings Similar Listings"
					]
				}
			}
		},
];
