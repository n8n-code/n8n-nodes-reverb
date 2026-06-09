import type { INodeProperties } from 'n8n-workflow';

export const paymentMethodsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods"
					]
				}
			},
			"options": [
				{
					"name": "GET Payment Methods",
					"value": "GET Payment Methods",
					"action": "Get list of payment methods",
					"description": "Get list of payment methods",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/payment_methods"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /payment_methods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Methods"
					],
					"operation": [
						"GET Payment Methods"
					]
				}
			}
		},
];
