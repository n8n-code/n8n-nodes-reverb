import type { INodeProperties } from 'n8n-workflow';

export const countriesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Countries"
					]
				}
			},
			"options": [
				{
					"name": "GET Countries",
					"value": "GET Countries",
					"action": "Retrieve a list of country codes with corresponding subregions",
					"description": "Retrieve a list of country codes with corresponding subregions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/countries"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /countries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Countries"
					],
					"operation": [
						"GET Countries"
					]
				}
			}
		},
];
