import type { INodeProperties } from 'n8n-workflow';

export const curatedSetsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Curated Sets"
					]
				}
			},
			"options": [
				{
					"name": "GET Curated Sets",
					"value": "GET Curated Sets",
					"action": "GET Curated Sets",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/curated_sets/{{$parameter[\"slug\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /curated_sets/{slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Curated Sets"
					],
					"operation": [
						"GET Curated Sets"
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
						"Curated Sets"
					],
					"operation": [
						"GET Curated Sets"
					]
				}
			}
		},
];
