import type { INodeProperties } from 'n8n-workflow';

export const salesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Sales"
					]
				}
			},
			"options": [
				{
					"name": "GET Sales Reverb",
					"value": "GET Sales Reverb",
					"action": "View upcoming and live Reverb official sales.",
					"description": "View upcoming and live Reverb official sales.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sales/reverb"
						}
					}
				},
				{
					"name": "GET Sales Seller",
					"value": "GET Sales Seller",
					"action": "View your created sales.",
					"description": "View your created sales.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sales/seller"
						}
					}
				},
				{
					"name": "DELETE Sales Listings",
					"value": "DELETE Sales Listings",
					"action": "Remove a listing from a sale",
					"description": "Remove a listing from a sale",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sales/{{$parameter[\"sale_id\"]}}/listings"
						}
					}
				},
				{
					"name": "POST Sales Listings",
					"value": "POST Sales Listings",
					"action": "Add listings to a sale",
					"description": "Add listings to a sale",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sales/{{$parameter[\"sale_id\"]}}/listings"
						}
					}
				},
				{
					"name": "GET Sales",
					"value": "GET Sales",
					"action": "GET Sales",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sales/{{$parameter[\"slug\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sales/reverb",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sales"
					],
					"operation": [
						"GET Sales Reverb"
					]
				}
			}
		},
		{
			"displayName": "GET /sales/seller",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sales"
					],
					"operation": [
						"GET Sales Seller"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sales/{sale_id}/listings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sales"
					],
					"operation": [
						"DELETE Sales Listings"
					]
				}
			}
		},
		{
			"displayName": "Sale ID",
			"name": "sale_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Sales"
					],
					"operation": [
						"DELETE Sales Listings"
					]
				}
			}
		},
		{
			"displayName": "POST /sales/{sale_id}/listings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sales"
					],
					"operation": [
						"POST Sales Listings"
					]
				}
			}
		},
		{
			"displayName": "Sale ID",
			"name": "sale_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Sales"
					],
					"operation": [
						"POST Sales Listings"
					]
				}
			}
		},
		{
			"displayName": "GET /sales/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sales"
					],
					"operation": [
						"GET Sales"
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
						"Sales"
					],
					"operation": [
						"GET Sales"
					]
				}
			}
		},
];
