import type { INodeProperties } from 'n8n-workflow';

export const feedbackDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Feedback"
					]
				}
			},
			"options": [
				{
					"name": "GET Feedback",
					"value": "GET Feedback",
					"action": "Feedback details",
					"description": "Feedback details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/feedback/{{$parameter[\"feedback_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /feedback/{feedback_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Feedback"
					],
					"operation": [
						"GET Feedback"
					]
				}
			}
		},
		{
			"displayName": "Feedback Id",
			"name": "feedback_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Feedback"
					],
					"operation": [
						"GET Feedback"
					]
				}
			}
		},
];
