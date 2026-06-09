import type { INodeProperties } from 'n8n-workflow';

export const priceguideDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Priceguide"
					]
				}
			},
			"options": [
				{
					"name": "GET Priceguide Transactions Summary",
					"value": "GET Priceguide Transactions Summary",
					"action": "Get a summary of transactions for a given price guide",
					"description": "Get a summary of transactions for a given price guide",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/priceguide/{{$parameter[\"id\"]}}/transactions/summary"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /priceguide/{id}/transactions/summary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Priceguide"
					],
					"operation": [
						"GET Priceguide Transactions Summary"
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
						"Priceguide"
					],
					"operation": [
						"GET Priceguide Transactions Summary"
					]
				}
			}
		},
		{
			"displayName": "Number Of Months",
			"name": "number_of_months",
			"default": 3,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "number_of_months",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Priceguide"
					],
					"operation": [
						"GET Priceguide Transactions Summary"
					]
				}
			}
		},
		{
			"displayName": "Condition",
			"name": "condition",
			"default": "used",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "condition",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Priceguide"
					],
					"operation": [
						"GET Priceguide Transactions Summary"
					]
				}
			}
		},
];
