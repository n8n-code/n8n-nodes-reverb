import type { INodeProperties } from 'n8n-workflow';

export const conversationsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					]
				}
			},
			"options": [
				{
					"name": "POST Conversations Offer",
					"value": "POST Conversations Offer",
					"action": "Make an offer to the other participant in the conversation",
					"description": "Make an offer to the other participant in the conversation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/conversations/{{$parameter[\"conversation_id\"]}}/offer"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /conversations/{conversation_id}/offer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conversations"
					],
					"operation": [
						"POST Conversations Offer"
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
						"Conversations"
					],
					"operation": [
						"POST Conversations Offer"
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
						"Conversations"
					],
					"operation": [
						"POST Conversations Offer"
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
						"Conversations"
					],
					"operation": [
						"POST Conversations Offer"
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
						"Conversations"
					],
					"operation": [
						"POST Conversations Offer"
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
						"Conversations"
					],
					"operation": [
						"POST Conversations Offer"
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
						"Conversations"
					],
					"operation": [
						"POST Conversations Offer"
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
						"Conversations"
					],
					"operation": [
						"POST Conversations Offer"
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
						"Conversations"
					],
					"operation": [
						"POST Conversations Offer"
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
						"Conversations"
					],
					"operation": [
						"POST Conversations Offer"
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
						"Conversations"
					],
					"operation": [
						"POST Conversations Offer"
					]
				}
			}
		},
];
