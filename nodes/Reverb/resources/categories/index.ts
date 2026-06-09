import type { INodeProperties } from 'n8n-workflow';

export const categoriesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					]
				}
			},
			"options": [
				{
					"name": "GET Categories",
					"value": "GET Categories",
					"action": "List of supported product categories",
					"description": "List of supported product categories",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/categories"
						}
					}
				},
				{
					"name": "GET Categories Flat",
					"value": "GET Categories Flat",
					"action": "GET Categories Flat",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/categories/flat"
						}
					}
				},
				{
					"name": "GET Categories Taxonomy",
					"value": "GET Categories Taxonomy",
					"action": "Full taxonomy tree of categories including middle categories",
					"description": "Full taxonomy tree of categories including middle categories",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/categories/taxonomy"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					],
					"operation": [
						"GET Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /categories/flat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					],
					"operation": [
						"GET Categories Flat"
					]
				}
			}
		},
		{
			"displayName": "GET /categories/taxonomy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					],
					"operation": [
						"GET Categories Taxonomy"
					]
				}
			}
		},
];
