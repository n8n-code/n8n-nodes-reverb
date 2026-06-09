import type { INodeProperties } from 'n8n-workflow';

export const handpickedDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Handpicked"
					]
				}
			},
			"options": [
				{
					"name": "GET Handpicked",
					"value": "GET Handpicked",
					"action": "Get results from a handpicked collection",
					"description": "Get results from a handpicked collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/handpicked/{{$parameter[\"slug\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /handpicked/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
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
						"Handpicked"
					],
					"operation": [
						"GET Handpicked"
					]
				}
			}
		},
];
