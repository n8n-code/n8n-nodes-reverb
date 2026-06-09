import type { INodeProperties } from 'n8n-workflow';

export const listingConditionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Listing Conditions"
					]
				}
			},
			"options": [
				{
					"name": "GET Listing Conditions",
					"value": "GET Listing Conditions",
					"action": "List of supported product conditions",
					"description": "List of supported product conditions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listing_conditions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /listing_conditions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Listing Conditions"
					],
					"operation": [
						"GET Listing Conditions"
					]
				}
			}
		},
];
