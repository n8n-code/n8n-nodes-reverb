import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { articlesDescription } from './resources/articles';
import { categoriesDescription } from './resources/categories';
import { comparisonShoppingPagesDescription } from './resources/comparison-shopping-pages';
import { conversationsDescription } from './resources/conversations';
import { countriesDescription } from './resources/countries';
import { cspsDescription } from './resources/csps';
import { curatedSetsDescription } from './resources/curated-sets';
import { currenciesDescription } from './resources/currencies';
import { feedbackDescription } from './resources/feedback';
import { handpickedDescription } from './resources/handpicked';
import { listingConditionsDescription } from './resources/listing-conditions';
import { listingsDescription } from './resources/listings';
import { myDescription } from './resources/my';
import { ordersDescription } from './resources/orders';
import { paymentMethodsDescription } from './resources/payment-methods';
import { priceguideDescription } from './resources/priceguide';
import { productsDescription } from './resources/products';
import { salesDescription } from './resources/sales';
import { shippingDescription } from './resources/shipping';
import { shopDescription } from './resources/shop';
import { shopsDescription } from './resources/shops';
import { wantsDescription } from './resources/wants';
import { webhooksDescription } from './resources/webhooks';

export class Reverb implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Reverb',
		name: 'N8nDevReverb',
		icon: { light: 'file:./reverb.svg', dark: 'file:./reverb.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Reverb',
		defaults: { name: 'Reverb' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevReverbApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Articles",
					"value": "Articles",
					"description": ""
				},
				{
					"name": "Categories",
					"value": "Categories",
					"description": ""
				},
				{
					"name": "Comparison Shopping Pages",
					"value": "Comparison Shopping Pages",
					"description": ""
				},
				{
					"name": "Conversations",
					"value": "Conversations",
					"description": ""
				},
				{
					"name": "Countries",
					"value": "Countries",
					"description": ""
				},
				{
					"name": "Csps",
					"value": "Csps",
					"description": ""
				},
				{
					"name": "Curated Sets",
					"value": "Curated Sets",
					"description": ""
				},
				{
					"name": "Currencies",
					"value": "Currencies",
					"description": ""
				},
				{
					"name": "Feedback",
					"value": "Feedback",
					"description": ""
				},
				{
					"name": "Handpicked",
					"value": "Handpicked",
					"description": ""
				},
				{
					"name": "Listing Conditions",
					"value": "Listing Conditions",
					"description": ""
				},
				{
					"name": "Listings",
					"value": "Listings",
					"description": ""
				},
				{
					"name": "My",
					"value": "My",
					"description": ""
				},
				{
					"name": "Orders",
					"value": "Orders",
					"description": ""
				},
				{
					"name": "Payment Methods",
					"value": "Payment Methods",
					"description": ""
				},
				{
					"name": "Priceguide",
					"value": "Priceguide",
					"description": ""
				},
				{
					"name": "Products",
					"value": "Products",
					"description": ""
				},
				{
					"name": "Sales",
					"value": "Sales",
					"description": ""
				},
				{
					"name": "Shipping",
					"value": "Shipping",
					"description": ""
				},
				{
					"name": "Shop",
					"value": "Shop",
					"description": ""
				},
				{
					"name": "Shops",
					"value": "Shops",
					"description": ""
				},
				{
					"name": "Wants",
					"value": "Wants",
					"description": ""
				},
				{
					"name": "Webhooks",
					"value": "Webhooks",
					"description": ""
				}
			],
			"default": ""
		},
		...articlesDescription,
		...categoriesDescription,
		...comparisonShoppingPagesDescription,
		...conversationsDescription,
		...countriesDescription,
		...cspsDescription,
		...curatedSetsDescription,
		...currenciesDescription,
		...feedbackDescription,
		...handpickedDescription,
		...listingConditionsDescription,
		...listingsDescription,
		...myDescription,
		...ordersDescription,
		...paymentMethodsDescription,
		...priceguideDescription,
		...productsDescription,
		...salesDescription,
		...shippingDescription,
		...shopDescription,
		...shopsDescription,
		...wantsDescription,
		...webhooksDescription
		],
	};
}
