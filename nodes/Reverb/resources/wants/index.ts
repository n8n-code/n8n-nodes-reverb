import type { INodeProperties } from 'n8n-workflow';

export const wantsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Wants"
					]
				}
			},
			"options": [
				{
					"name": "GET Wants",
					"value": "GET Wants",
					"action": "A list of wanted items by the user",
					"description": "A list of wanted items by the user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/wants"
						}
					}
				},
				{
					"name": "DELETE Wants",
					"value": "DELETE Wants",
					"action": "Unmark an item wanted.",
					"description": "Unmark an item wanted.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/wants/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "PUT Wants",
					"value": "PUT Wants",
					"action": "Mark an item wanted. Returns 200 on success or 422 on failure.",
					"description": "Mark an item wanted. Returns 200 on success or 422 on failure.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/wants/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /wants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wants"
					],
					"operation": [
						"GET Wants"
					]
				}
			}
		},
		{
			"displayName": "DELETE /wants/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wants"
					],
					"operation": [
						"DELETE Wants"
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
						"Wants"
					],
					"operation": [
						"DELETE Wants"
					]
				}
			}
		},
		{
			"displayName": "PUT /wants/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wants"
					],
					"operation": [
						"PUT Wants"
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
						"Wants"
					],
					"operation": [
						"PUT Wants"
					]
				}
			}
		},
];
