import type { INodeProperties } from 'n8n-workflow';

export const currenciesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Currencies"
					]
				}
			},
			"options": [
				{
					"name": "GET Currencies Display",
					"value": "GET Currencies Display",
					"action": "List of supported display currencies for browsing listings",
					"description": "List of supported display currencies for browsing listings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/currencies/display"
						}
					}
				},
				{
					"name": "GET Currencies Listing",
					"value": "GET Currencies Listing",
					"action": "List of supported listing currencies for shops",
					"description": "List of supported listing currencies for shops",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/currencies/listing"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /currencies/display",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Currencies"
					],
					"operation": [
						"GET Currencies Display"
					]
				}
			}
		},
		{
			"displayName": "GET /currencies/listing",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Currencies"
					],
					"operation": [
						"GET Currencies Listing"
					]
				}
			}
		},
];
