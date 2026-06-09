import type { INodeProperties } from 'n8n-workflow';

export const shippingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Shipping"
					]
				}
			},
			"options": [
				{
					"name": "GET Shipping Providers",
					"value": "GET Shipping Providers",
					"action": "List of supported shipping providers",
					"description": "List of supported shipping providers",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shipping/providers"
						}
					}
				},
				{
					"name": "GET Shipping Regions",
					"value": "GET Shipping Regions",
					"action": "GET Shipping Regions",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shipping/regions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /shipping/providers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shipping"
					],
					"operation": [
						"GET Shipping Providers"
					]
				}
			}
		},
		{
			"displayName": "GET /shipping/regions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shipping"
					],
					"operation": [
						"GET Shipping Regions"
					]
				}
			}
		},
];
