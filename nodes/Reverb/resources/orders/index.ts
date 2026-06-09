import type { INodeProperties } from 'n8n-workflow';

export const ordersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					]
				}
			},
			"options": [
				{
					"name": "GET Orders Feedback Buyer",
					"value": "GET Orders Feedback Buyer",
					"action": "Feedback details for an order's buyer",
					"description": "Feedback details for an order's buyer",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/orders/{{$parameter[\"order_id\"]}}/feedback/buyer"
						}
					}
				},
				{
					"name": "POST Orders Feedback Buyer",
					"value": "POST Orders Feedback Buyer",
					"action": "Add feedback about an order's buyer",
					"description": "Add feedback about an order's buyer",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/orders/{{$parameter[\"order_id\"]}}/feedback/buyer"
						}
					}
				},
				{
					"name": "GET Orders Feedback Seller",
					"value": "GET Orders Feedback Seller",
					"action": "Feedback details for an order's seller",
					"description": "Feedback details for an order's seller",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/orders/{{$parameter[\"order_id\"]}}/feedback/seller"
						}
					}
				},
				{
					"name": "POST Orders Feedback Seller",
					"value": "POST Orders Feedback Seller",
					"action": "Add feedback about an order's seller",
					"description": "Add feedback about an order's seller",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/orders/{{$parameter[\"order_id\"]}}/feedback/seller"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /orders/{order_id}/feedback/buyer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"GET Orders Feedback Buyer"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "order_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"GET Orders Feedback Buyer"
					]
				}
			}
		},
		{
			"displayName": "POST /orders/{order_id}/feedback/buyer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"POST Orders Feedback Buyer"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "order_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"POST Orders Feedback Buyer"
					]
				}
			}
		},
		{
			"displayName": "GET /orders/{order_id}/feedback/seller",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"GET Orders Feedback Seller"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "order_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"GET Orders Feedback Seller"
					]
				}
			}
		},
		{
			"displayName": "POST /orders/{order_id}/feedback/seller",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"POST Orders Feedback Seller"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "order_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"POST Orders Feedback Seller"
					]
				}
			}
		},
];
