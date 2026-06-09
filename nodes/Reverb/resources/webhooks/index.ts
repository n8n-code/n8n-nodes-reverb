import type { INodeProperties } from 'n8n-workflow';

export const webhooksDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					]
				}
			},
			"options": [
				{
					"name": "GET Webhooks Registrations",
					"value": "GET Webhooks Registrations",
					"action": "Get webhook registrations",
					"description": "Get webhook registrations",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/webhooks/registrations"
						}
					}
				},
				{
					"name": "POST Webhooks Registrations",
					"value": "POST Webhooks Registrations",
					"action": "Register a webhook",
					"description": "Register a webhook",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/webhooks/registrations"
						}
					}
				},
				{
					"name": "DELETE Webhooks Registrations",
					"value": "DELETE Webhooks Registrations",
					"action": "Remove a webhook",
					"description": "Remove a webhook",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/webhooks/registrations/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /webhooks/registrations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"GET Webhooks Registrations"
					]
				}
			}
		},
		{
			"displayName": "POST /webhooks/registrations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"POST Webhooks Registrations"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Topic",
			"name": "topic",
			"type": "options",
			"default": "listings/update",
			"description": "Valid values: listings/update, listings/publish, listings/bumps-ran-out, orders/create, orders/update, payments/create, payments/update, app/uninstalled",
			"options": [
				{
					"name": "Listings Update",
					"value": "listings/update"
				},
				{
					"name": "Listings Publish",
					"value": "listings/publish"
				},
				{
					"name": "Listings Bumps Ran Out",
					"value": "listings/bumps-ran-out"
				},
				{
					"name": "Orders Create",
					"value": "orders/create"
				},
				{
					"name": "Orders Update",
					"value": "orders/update"
				},
				{
					"name": "Payments Create",
					"value": "payments/create"
				},
				{
					"name": "Payments Update",
					"value": "payments/update"
				},
				{
					"name": "App Uninstalled",
					"value": "app/uninstalled"
				}
			],
			"routing": {
				"send": {
					"property": "topic",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"POST Webhooks Registrations"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Url",
			"name": "url",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"POST Webhooks Registrations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /webhooks/registrations/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"DELETE Webhooks Registrations"
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
						"Webhooks"
					],
					"operation": [
						"DELETE Webhooks Registrations"
					]
				}
			}
		},
];
