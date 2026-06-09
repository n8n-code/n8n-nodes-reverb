import type { INodeProperties } from 'n8n-workflow';

export const cspsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Csps"
					]
				}
			},
			"options": [
				{
					"name": "GET Csps",
					"value": "GET Csps",
					"action": "Returns a set of comparison shopping pages based on the current params",
					"description": "Returns a set of comparison shopping pages based on the current params",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/csps"
						}
					}
				},
				{
					"name": "GET Csps Categories",
					"value": "GET Csps Categories",
					"action": "GET Csps Categories",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/csps/categories"
						}
					}
				},
				{
					"name": "GET Csps Find",
					"value": "GET Csps Find",
					"action": "Show comparison shopping page",
					"description": "Show comparison shopping page",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/csps/find"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /csps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Csps"
					],
					"operation": [
						"GET Csps"
					]
				}
			}
		},
		{
			"displayName": "GET /csps/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Csps"
					],
					"operation": [
						"GET Csps Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /csps/find",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Csps"
					],
					"operation": [
						"GET Csps Find"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"description": "ID of the comparison shopping page",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Csps"
					],
					"operation": [
						"GET Csps Find"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"description": "Slug of the comparison shopping page",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Csps"
					],
					"operation": [
						"GET Csps Find"
					]
				}
			}
		},
];
