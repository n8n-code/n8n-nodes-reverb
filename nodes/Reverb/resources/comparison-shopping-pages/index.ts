import type { INodeProperties } from 'n8n-workflow';

export const comparisonShoppingPagesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Comparison Shopping Pages"
					]
				}
			},
			"options": [
				{
					"name": "GET Comparison Shopping Pages",
					"value": "GET Comparison Shopping Pages",
					"action": "Returns a set of comparison shopping pages based on the current params",
					"description": "Returns a set of comparison shopping pages based on the current params",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/comparison_shopping_pages"
						}
					}
				},
				{
					"name": "GET Comparison Shopping Pages Find",
					"value": "GET Comparison Shopping Pages Find",
					"action": "Show comparison shopping page",
					"description": "Show comparison shopping page",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/comparison_shopping_pages/find"
						}
					}
				},
				{
					"name": "GET Comparison Shopping Pages Listings",
					"value": "GET Comparison Shopping Pages Listings",
					"action": "Return new or used listings for a comparison shopping page",
					"description": "Return new or used listings for a comparison shopping page",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/comparison_shopping_pages/{{$parameter[\"id\"]}}/listings"
						}
					}
				},
				{
					"name": "GET Comparison Shopping Pages Reviews",
					"value": "GET Comparison Shopping Pages Reviews",
					"action": "View reviews of a comparison shopping page",
					"description": "View reviews of a comparison shopping page",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/comparison_shopping_pages/{{$parameter[\"id\"]}}/reviews"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /comparison_shopping_pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Comparison Shopping Pages"
					],
					"operation": [
						"GET Comparison Shopping Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /comparison_shopping_pages/find",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Comparison Shopping Pages"
					],
					"operation": [
						"GET Comparison Shopping Pages Find"
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
						"Comparison Shopping Pages"
					],
					"operation": [
						"GET Comparison Shopping Pages Find"
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
						"Comparison Shopping Pages"
					],
					"operation": [
						"GET Comparison Shopping Pages Find"
					]
				}
			}
		},
		{
			"displayName": "GET /comparison_shopping_pages/{id}/listings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Comparison Shopping Pages"
					],
					"operation": [
						"GET Comparison Shopping Pages Listings"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Comparison Shopping Pages"
					],
					"operation": [
						"GET Comparison Shopping Pages Listings"
					]
				}
			}
		},
		{
			"displayName": "Condition",
			"name": "condition",
			"required": true,
			"description": "Condition of the listing",
			"default": "",
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
						"Comparison Shopping Pages"
					],
					"operation": [
						"GET Comparison Shopping Pages Listings"
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
						"Comparison Shopping Pages"
					],
					"operation": [
						"GET Comparison Shopping Pages Listings"
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
						"Comparison Shopping Pages"
					],
					"operation": [
						"GET Comparison Shopping Pages Listings"
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
						"Comparison Shopping Pages"
					],
					"operation": [
						"GET Comparison Shopping Pages Listings"
					]
				}
			}
		},
		{
			"displayName": "GET /comparison_shopping_pages/{id}/reviews",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Comparison Shopping Pages"
					],
					"operation": [
						"GET Comparison Shopping Pages Reviews"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Comparison Shopping Pages"
					],
					"operation": [
						"GET Comparison Shopping Pages Reviews"
					]
				}
			}
		},
];
