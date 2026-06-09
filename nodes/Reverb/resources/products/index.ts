import type { INodeProperties } from 'n8n-workflow';

export const productsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					]
				}
			},
			"options": [
				{
					"name": "GET Products Reviews",
					"value": "GET Products Reviews",
					"action": "View a review",
					"description": "View a review",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/products/reviews/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "PUT Products Reviews",
					"value": "PUT Products Reviews",
					"action": "Update a review",
					"description": "Update a review",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/products/reviews/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "POST Products Reviews",
					"value": "POST Products Reviews",
					"action": "Create a review for a product",
					"description": "Create a review for a product",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/products/{{$parameter[\"slug\"]}}/reviews"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /products/reviews/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"GET Products Reviews"
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
						"Products"
					],
					"operation": [
						"GET Products Reviews"
					]
				}
			}
		},
		{
			"displayName": "PUT /products/reviews/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"PUT Products Reviews"
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
						"Products"
					],
					"operation": [
						"PUT Products Reviews"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": "",
			"description": "Content of the review",
			"routing": {
				"send": {
					"property": "body",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"PUT Products Reviews"
					]
				}
			}
		},
		{
			"displayName": "Rating",
			"name": "rating",
			"type": "number",
			"default": 0,
			"description": "Rating from 1 to 5",
			"routing": {
				"send": {
					"property": "rating",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"PUT Products Reviews"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"description": "Title for the review",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"PUT Products Reviews"
					]
				}
			}
		},
		{
			"displayName": "POST /products/{slug}/reviews",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"POST Products Reviews"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"POST Products Reviews"
					]
				}
			}
		},
];
