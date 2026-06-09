import type { INodeProperties } from 'n8n-workflow';

export const articlesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					]
				}
			},
			"options": [
				{
					"name": "GET Articles",
					"value": "GET Articles",
					"action": "GET Articles",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/articles"
						}
					}
				},
				{
					"name": "GET Articles Categories",
					"value": "GET Articles Categories",
					"action": "List of all article categories",
					"description": "List of all article categories",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/articles/categories"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /articles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"GET Articles"
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
						"Articles"
					],
					"operation": [
						"GET Articles"
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
						"Articles"
					],
					"operation": [
						"GET Articles"
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
						"Articles"
					],
					"operation": [
						"GET Articles"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"description": "What's being searched for",
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
						"Articles"
					],
					"operation": [
						"GET Articles"
					]
				}
			}
		},
		{
			"displayName": "Exclude Featured",
			"name": "exclude_featured",
			"description": "Number of featured articles to exclude",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "exclude_featured",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"GET Articles"
					]
				}
			}
		},
		{
			"displayName": "GET /articles/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Articles"
					],
					"operation": [
						"GET Articles Categories"
					]
				}
			}
		},
];
