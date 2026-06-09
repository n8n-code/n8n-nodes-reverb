import type { INodeProperties } from 'n8n-workflow';

export const shopsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Shops"
					]
				}
			},
			"options": [
				{
					"name": "GET Shops Storefronts",
					"value": "GET Shops Storefronts",
					"action": "Get storefront details on a shop.",
					"description": "Get storefront details on a shop.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shops/{{$parameter[\"id\"]}}/storefronts"
						}
					}
				},
				{
					"name": "GET Shops Shipping Profiles",
					"value": "GET Shops Shipping Profiles",
					"action": "List of shipping profiles for your shop",
					"description": "List of shipping profiles for your shop",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shops/{{$parameter[\"shop_id\"]}}/shipping_profiles"
						}
					}
				},
				{
					"name": "GET Shops",
					"value": "GET Shops",
					"action": "Get details on a shop.",
					"description": "Get details on a shop.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shops/{{$parameter[\"slug\"]}}"
						}
					}
				},
				{
					"name": "GET Shops Feedback",
					"value": "GET Shops Feedback",
					"action": "Get seller's feedback",
					"description": "Get seller's feedback",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shops/{{$parameter[\"slug\"]}}/feedback"
						}
					}
				},
				{
					"name": "GET Shops Feedback Buyer",
					"value": "GET Shops Feedback Buyer",
					"action": "Get seller's feedback as a buyer",
					"description": "Get seller's feedback as a buyer",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shops/{{$parameter[\"slug\"]}}/feedback/buyer"
						}
					}
				},
				{
					"name": "GET Shops Feedback Seller",
					"value": "GET Shops Feedback Seller",
					"action": "Get seller's feedback as a seller",
					"description": "Get seller's feedback as a seller",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shops/{{$parameter[\"slug\"]}}/feedback/seller"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /shops/{id}/storefronts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shops"
					],
					"operation": [
						"GET Shops Storefronts"
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
						"Shops"
					],
					"operation": [
						"GET Shops Storefronts"
					]
				}
			}
		},
		{
			"displayName": "GET /shops/{shop_id}/shipping_profiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shops"
					],
					"operation": [
						"GET Shops Shipping Profiles"
					]
				}
			}
		},
		{
			"displayName": "Shop Id",
			"name": "shop_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Shops"
					],
					"operation": [
						"GET Shops Shipping Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /shops/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shops"
					],
					"operation": [
						"GET Shops"
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
						"Shops"
					],
					"operation": [
						"GET Shops"
					]
				}
			}
		},
		{
			"displayName": "Include Listing Count",
			"name": "include_listing_count",
			"description": "Include the live listing count in the response.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_listing_count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shops"
					],
					"operation": [
						"GET Shops"
					]
				}
			}
		},
		{
			"displayName": "GET /shops/{slug}/feedback",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shops"
					],
					"operation": [
						"GET Shops Feedback"
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
						"Shops"
					],
					"operation": [
						"GET Shops Feedback"
					]
				}
			}
		},
		{
			"displayName": "GET /shops/{slug}/feedback/buyer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shops"
					],
					"operation": [
						"GET Shops Feedback Buyer"
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
						"Shops"
					],
					"operation": [
						"GET Shops Feedback Buyer"
					]
				}
			}
		},
		{
			"displayName": "GET /shops/{slug}/feedback/seller",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shops"
					],
					"operation": [
						"GET Shops Feedback Seller"
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
						"Shops"
					],
					"operation": [
						"GET Shops Feedback Seller"
					]
				}
			}
		},
];
