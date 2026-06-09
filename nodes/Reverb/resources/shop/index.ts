import type { INodeProperties } from 'n8n-workflow';

export const shopDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Shop"
					]
				}
			},
			"options": [
				{
					"name": "GET Shop",
					"value": "GET Shop",
					"action": "Get your own shop details",
					"description": "Get your own shop details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shop"
						}
					}
				},
				{
					"name": "PUT Shop",
					"value": "PUT Shop",
					"action": "Update your shop profile",
					"description": "Update your shop profile",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/shop"
						}
					}
				},
				{
					"name": "GET Shop Listing Conditions",
					"value": "GET Shop Listing Conditions",
					"action": "List of supported product conditions",
					"description": "List of supported product conditions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shop/listing_conditions"
						}
					}
				},
				{
					"name": "GET Shop Payment Methods",
					"value": "GET Shop Payment Methods",
					"action": "Get accepted payment methods",
					"description": "Get accepted payment methods",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shop/payment_methods"
						}
					}
				},
				{
					"name": "DELETE Shop Vacation",
					"value": "DELETE Shop Vacation",
					"action": "Disable vacation mode. All listings will be re-enabled.",
					"description": "Disable vacation mode. All listings will be re-enabled.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/shop/vacation"
						}
					}
				},
				{
					"name": "GET Shop Vacation",
					"value": "GET Shop Vacation",
					"action": "Returns shop vacation status",
					"description": "Returns shop vacation status",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shop/vacation"
						}
					}
				},
				{
					"name": "POST Shop Vacation",
					"value": "POST Shop Vacation",
					"action": "Enable vacation mode. All listings will be unavailable until vacation mode is turned off.",
					"description": "Enable vacation mode. All listings will be unavailable until vacation mode is turned off.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shop/vacation"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /shop",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shop"
					],
					"operation": [
						"GET Shop"
					]
				}
			}
		},
		{
			"displayName": "PUT /shop",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shop"
					],
					"operation": [
						"PUT Shop"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shop"
					],
					"operation": [
						"PUT Shop"
					]
				}
			}
		},
		{
			"displayName": "Currency",
			"name": "currency",
			"type": "options",
			"default": "USD",
			"options": [
				{
					"name": "USD",
					"value": "USD"
				},
				{
					"name": "CAD",
					"value": "CAD"
				},
				{
					"name": "EUR",
					"value": "EUR"
				},
				{
					"name": "GBP",
					"value": "GBP"
				},
				{
					"name": "AUD",
					"value": "AUD"
				},
				{
					"name": "JPY",
					"value": "JPY"
				},
				{
					"name": "NZD",
					"value": "NZD"
				},
				{
					"name": "MXN",
					"value": "MXN"
				}
			],
			"routing": {
				"send": {
					"property": "currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shop"
					],
					"operation": [
						"PUT Shop"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shop"
					],
					"operation": [
						"PUT Shop"
					]
				}
			}
		},
		{
			"displayName": "Legal Country Code",
			"name": "legal_country_code",
			"type": "options",
			"default": "AD",
			"options": [
				{
					"name": "AD",
					"value": "AD"
				},
				{
					"name": "AE",
					"value": "AE"
				},
				{
					"name": "AF",
					"value": "AF"
				},
				{
					"name": "AG",
					"value": "AG"
				},
				{
					"name": "AI",
					"value": "AI"
				},
				{
					"name": "AL",
					"value": "AL"
				},
				{
					"name": "AM",
					"value": "AM"
				},
				{
					"name": "AO",
					"value": "AO"
				},
				{
					"name": "AR",
					"value": "AR"
				},
				{
					"name": "AS",
					"value": "AS"
				},
				{
					"name": "AT",
					"value": "AT"
				},
				{
					"name": "AU",
					"value": "AU"
				},
				{
					"name": "AW",
					"value": "AW"
				},
				{
					"name": "AX",
					"value": "AX"
				},
				{
					"name": "AZ",
					"value": "AZ"
				},
				{
					"name": "BA",
					"value": "BA"
				},
				{
					"name": "BB",
					"value": "BB"
				},
				{
					"name": "BD",
					"value": "BD"
				},
				{
					"name": "BE",
					"value": "BE"
				},
				{
					"name": "BF",
					"value": "BF"
				},
				{
					"name": "BG",
					"value": "BG"
				},
				{
					"name": "BH",
					"value": "BH"
				},
				{
					"name": "BI",
					"value": "BI"
				},
				{
					"name": "BJ",
					"value": "BJ"
				},
				{
					"name": "BL",
					"value": "BL"
				},
				{
					"name": "BM",
					"value": "BM"
				},
				{
					"name": "BN",
					"value": "BN"
				},
				{
					"name": "BO",
					"value": "BO"
				},
				{
					"name": "BQ",
					"value": "BQ"
				},
				{
					"name": "BR",
					"value": "BR"
				},
				{
					"name": "BS",
					"value": "BS"
				},
				{
					"name": "BT",
					"value": "BT"
				},
				{
					"name": "BV",
					"value": "BV"
				},
				{
					"name": "BW",
					"value": "BW"
				},
				{
					"name": "BY",
					"value": "BY"
				},
				{
					"name": "BZ",
					"value": "BZ"
				},
				{
					"name": "CA",
					"value": "CA"
				},
				{
					"name": "CC",
					"value": "CC"
				},
				{
					"name": "CD",
					"value": "CD"
				},
				{
					"name": "CF",
					"value": "CF"
				},
				{
					"name": "CG",
					"value": "CG"
				},
				{
					"name": "CH",
					"value": "CH"
				},
				{
					"name": "CI",
					"value": "CI"
				},
				{
					"name": "CK",
					"value": "CK"
				},
				{
					"name": "CL",
					"value": "CL"
				},
				{
					"name": "CM",
					"value": "CM"
				},
				{
					"name": "CN",
					"value": "CN"
				},
				{
					"name": "CO",
					"value": "CO"
				},
				{
					"name": "CR",
					"value": "CR"
				},
				{
					"name": "CV",
					"value": "CV"
				},
				{
					"name": "CW",
					"value": "CW"
				},
				{
					"name": "CX",
					"value": "CX"
				},
				{
					"name": "CY",
					"value": "CY"
				},
				{
					"name": "CZ",
					"value": "CZ"
				},
				{
					"name": "DE",
					"value": "DE"
				},
				{
					"name": "DJ",
					"value": "DJ"
				},
				{
					"name": "DK",
					"value": "DK"
				},
				{
					"name": "DM",
					"value": "DM"
				},
				{
					"name": "DO",
					"value": "DO"
				},
				{
					"name": "DZ",
					"value": "DZ"
				},
				{
					"name": "EC",
					"value": "EC"
				},
				{
					"name": "EE",
					"value": "EE"
				},
				{
					"name": "EG",
					"value": "EG"
				},
				{
					"name": "EH",
					"value": "EH"
				},
				{
					"name": "ER",
					"value": "ER"
				},
				{
					"name": "ES",
					"value": "ES"
				},
				{
					"name": "ET",
					"value": "ET"
				},
				{
					"name": "FI",
					"value": "FI"
				},
				{
					"name": "FJ",
					"value": "FJ"
				},
				{
					"name": "FK",
					"value": "FK"
				},
				{
					"name": "FM",
					"value": "FM"
				},
				{
					"name": "FO",
					"value": "FO"
				},
				{
					"name": "FR",
					"value": "FR"
				},
				{
					"name": "GA",
					"value": "GA"
				},
				{
					"name": "GB",
					"value": "GB"
				},
				{
					"name": "GD",
					"value": "GD"
				},
				{
					"name": "GE",
					"value": "GE"
				},
				{
					"name": "GF",
					"value": "GF"
				},
				{
					"name": "GG",
					"value": "GG"
				},
				{
					"name": "GH",
					"value": "GH"
				},
				{
					"name": "GI",
					"value": "GI"
				},
				{
					"name": "GL",
					"value": "GL"
				},
				{
					"name": "GM",
					"value": "GM"
				},
				{
					"name": "GN",
					"value": "GN"
				},
				{
					"name": "GP",
					"value": "GP"
				},
				{
					"name": "GQ",
					"value": "GQ"
				},
				{
					"name": "GR",
					"value": "GR"
				},
				{
					"name": "GS",
					"value": "GS"
				},
				{
					"name": "GT",
					"value": "GT"
				},
				{
					"name": "GU",
					"value": "GU"
				},
				{
					"name": "GW",
					"value": "GW"
				},
				{
					"name": "GY",
					"value": "GY"
				},
				{
					"name": "HK",
					"value": "HK"
				},
				{
					"name": "HM",
					"value": "HM"
				},
				{
					"name": "HN",
					"value": "HN"
				},
				{
					"name": "HR",
					"value": "HR"
				},
				{
					"name": "HT",
					"value": "HT"
				},
				{
					"name": "HU",
					"value": "HU"
				},
				{
					"name": "ID",
					"value": "ID"
				},
				{
					"name": "IE",
					"value": "IE"
				},
				{
					"name": "IL",
					"value": "IL"
				},
				{
					"name": "IM",
					"value": "IM"
				},
				{
					"name": "IN",
					"value": "IN"
				},
				{
					"name": "IO",
					"value": "IO"
				},
				{
					"name": "IQ",
					"value": "IQ"
				},
				{
					"name": "IS",
					"value": "IS"
				},
				{
					"name": "IT",
					"value": "IT"
				},
				{
					"name": "JE",
					"value": "JE"
				},
				{
					"name": "JM",
					"value": "JM"
				},
				{
					"name": "JO",
					"value": "JO"
				},
				{
					"name": "JP",
					"value": "JP"
				},
				{
					"name": "KE",
					"value": "KE"
				},
				{
					"name": "KG",
					"value": "KG"
				},
				{
					"name": "KH",
					"value": "KH"
				},
				{
					"name": "KI",
					"value": "KI"
				},
				{
					"name": "KM",
					"value": "KM"
				},
				{
					"name": "KN",
					"value": "KN"
				},
				{
					"name": "KR",
					"value": "KR"
				},
				{
					"name": "KW",
					"value": "KW"
				},
				{
					"name": "KY",
					"value": "KY"
				},
				{
					"name": "KZ",
					"value": "KZ"
				},
				{
					"name": "LA",
					"value": "LA"
				},
				{
					"name": "LB",
					"value": "LB"
				},
				{
					"name": "LC",
					"value": "LC"
				},
				{
					"name": "LI",
					"value": "LI"
				},
				{
					"name": "LK",
					"value": "LK"
				},
				{
					"name": "LR",
					"value": "LR"
				},
				{
					"name": "LS",
					"value": "LS"
				},
				{
					"name": "LT",
					"value": "LT"
				},
				{
					"name": "LU",
					"value": "LU"
				},
				{
					"name": "LV",
					"value": "LV"
				},
				{
					"name": "LY",
					"value": "LY"
				},
				{
					"name": "MA",
					"value": "MA"
				},
				{
					"name": "MC",
					"value": "MC"
				},
				{
					"name": "MD",
					"value": "MD"
				},
				{
					"name": "ME",
					"value": "ME"
				},
				{
					"name": "MF",
					"value": "MF"
				},
				{
					"name": "MG",
					"value": "MG"
				},
				{
					"name": "MH",
					"value": "MH"
				},
				{
					"name": "MK",
					"value": "MK"
				},
				{
					"name": "ML",
					"value": "ML"
				},
				{
					"name": "MM",
					"value": "MM"
				},
				{
					"name": "MN",
					"value": "MN"
				},
				{
					"name": "MO",
					"value": "MO"
				},
				{
					"name": "MP",
					"value": "MP"
				},
				{
					"name": "MQ",
					"value": "MQ"
				},
				{
					"name": "MR",
					"value": "MR"
				},
				{
					"name": "MS",
					"value": "MS"
				},
				{
					"name": "MT",
					"value": "MT"
				},
				{
					"name": "MU",
					"value": "MU"
				},
				{
					"name": "MV",
					"value": "MV"
				},
				{
					"name": "MW",
					"value": "MW"
				},
				{
					"name": "MX",
					"value": "MX"
				},
				{
					"name": "MY",
					"value": "MY"
				},
				{
					"name": "MZ",
					"value": "MZ"
				},
				{
					"name": "NA",
					"value": "NA"
				},
				{
					"name": "NC",
					"value": "NC"
				},
				{
					"name": "NE",
					"value": "NE"
				},
				{
					"name": "NF",
					"value": "NF"
				},
				{
					"name": "NG",
					"value": "NG"
				},
				{
					"name": "NI",
					"value": "NI"
				},
				{
					"name": "NL",
					"value": "NL"
				},
				{
					"name": "NO",
					"value": "NO"
				},
				{
					"name": "NP",
					"value": "NP"
				},
				{
					"name": "NR",
					"value": "NR"
				},
				{
					"name": "NU",
					"value": "NU"
				},
				{
					"name": "NZ",
					"value": "NZ"
				},
				{
					"name": "OM",
					"value": "OM"
				},
				{
					"name": "PA",
					"value": "PA"
				},
				{
					"name": "PE",
					"value": "PE"
				},
				{
					"name": "PF",
					"value": "PF"
				},
				{
					"name": "PG",
					"value": "PG"
				},
				{
					"name": "PH",
					"value": "PH"
				},
				{
					"name": "PK",
					"value": "PK"
				},
				{
					"name": "PL",
					"value": "PL"
				},
				{
					"name": "PM",
					"value": "PM"
				},
				{
					"name": "PN",
					"value": "PN"
				},
				{
					"name": "PS",
					"value": "PS"
				},
				{
					"name": "PT",
					"value": "PT"
				},
				{
					"name": "PW",
					"value": "PW"
				},
				{
					"name": "PY",
					"value": "PY"
				},
				{
					"name": "QA",
					"value": "QA"
				},
				{
					"name": "RE",
					"value": "RE"
				},
				{
					"name": "RO",
					"value": "RO"
				},
				{
					"name": "RS",
					"value": "RS"
				},
				{
					"name": "RU",
					"value": "RU"
				},
				{
					"name": "RW",
					"value": "RW"
				},
				{
					"name": "SA",
					"value": "SA"
				},
				{
					"name": "SB",
					"value": "SB"
				},
				{
					"name": "SC",
					"value": "SC"
				},
				{
					"name": "SE",
					"value": "SE"
				},
				{
					"name": "SG",
					"value": "SG"
				},
				{
					"name": "SH",
					"value": "SH"
				},
				{
					"name": "SI",
					"value": "SI"
				},
				{
					"name": "SJ",
					"value": "SJ"
				},
				{
					"name": "SK",
					"value": "SK"
				},
				{
					"name": "SL",
					"value": "SL"
				},
				{
					"name": "SM",
					"value": "SM"
				},
				{
					"name": "SN",
					"value": "SN"
				},
				{
					"name": "SO",
					"value": "SO"
				},
				{
					"name": "SR",
					"value": "SR"
				},
				{
					"name": "SS",
					"value": "SS"
				},
				{
					"name": "ST",
					"value": "ST"
				},
				{
					"name": "SV",
					"value": "SV"
				},
				{
					"name": "SX",
					"value": "SX"
				},
				{
					"name": "SZ",
					"value": "SZ"
				},
				{
					"name": "TC",
					"value": "TC"
				},
				{
					"name": "TD",
					"value": "TD"
				},
				{
					"name": "TF",
					"value": "TF"
				},
				{
					"name": "TG",
					"value": "TG"
				},
				{
					"name": "TH",
					"value": "TH"
				},
				{
					"name": "TJ",
					"value": "TJ"
				},
				{
					"name": "TK",
					"value": "TK"
				},
				{
					"name": "TL",
					"value": "TL"
				},
				{
					"name": "TM",
					"value": "TM"
				},
				{
					"name": "TN",
					"value": "TN"
				},
				{
					"name": "TO",
					"value": "TO"
				},
				{
					"name": "TR",
					"value": "TR"
				},
				{
					"name": "TT",
					"value": "TT"
				},
				{
					"name": "TV",
					"value": "TV"
				},
				{
					"name": "TW",
					"value": "TW"
				},
				{
					"name": "TZ",
					"value": "TZ"
				},
				{
					"name": "UA",
					"value": "UA"
				},
				{
					"name": "UG",
					"value": "UG"
				},
				{
					"name": "UM",
					"value": "UM"
				},
				{
					"name": "US",
					"value": "US"
				},
				{
					"name": "UY",
					"value": "UY"
				},
				{
					"name": "UZ",
					"value": "UZ"
				},
				{
					"name": "VA",
					"value": "VA"
				},
				{
					"name": "VC",
					"value": "VC"
				},
				{
					"name": "VE",
					"value": "VE"
				},
				{
					"name": "VG",
					"value": "VG"
				},
				{
					"name": "VI",
					"value": "VI"
				},
				{
					"name": "VN",
					"value": "VN"
				},
				{
					"name": "VU",
					"value": "VU"
				},
				{
					"name": "WF",
					"value": "WF"
				},
				{
					"name": "WS",
					"value": "WS"
				},
				{
					"name": "YE",
					"value": "YE"
				},
				{
					"name": "YT",
					"value": "YT"
				},
				{
					"name": "ZA",
					"value": "ZA"
				},
				{
					"name": "ZM",
					"value": "ZM"
				},
				{
					"name": "ZW",
					"value": "ZW"
				}
			],
			"routing": {
				"send": {
					"property": "legal_country_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shop"
					],
					"operation": [
						"PUT Shop"
					]
				}
			}
		},
		{
			"displayName": "Legal Country Code Confirmed",
			"name": "legal_country_code_confirmed",
			"type": "options",
			"default": true,
			"options": [
				{
					"name": "True",
					"value": true
				}
			],
			"routing": {
				"send": {
					"property": "legal_country_code_confirmed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shop"
					],
					"operation": [
						"PUT Shop"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shop"
					],
					"operation": [
						"PUT Shop"
					]
				}
			}
		},
		{
			"displayName": "Payment Policy",
			"name": "payment_policy",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "payment_policy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shop"
					],
					"operation": [
						"PUT Shop"
					]
				}
			}
		},
		{
			"displayName": "Return Policy",
			"name": "return_policy",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "return_policy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shop"
					],
					"operation": [
						"PUT Shop"
					]
				}
			}
		},
		{
			"displayName": "Shipping Policy",
			"name": "shipping_policy",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "shipping_policy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shop"
					],
					"operation": [
						"PUT Shop"
					]
				}
			}
		},
		{
			"displayName": "Shop Type",
			"name": "shop_type",
			"type": "options",
			"default": "individual",
			"options": [
				{
					"name": "Individual",
					"value": "individual"
				},
				{
					"name": "Business",
					"value": "business"
				}
			],
			"routing": {
				"send": {
					"property": "shop_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shop"
					],
					"operation": [
						"PUT Shop"
					]
				}
			}
		},
		{
			"displayName": "Website",
			"name": "website",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "website",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shop"
					],
					"operation": [
						"PUT Shop"
					]
				}
			}
		},
		{
			"displayName": "GET /shop/listing_conditions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shop"
					],
					"operation": [
						"GET Shop Listing Conditions"
					]
				}
			}
		},
		{
			"displayName": "GET /shop/payment_methods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shop"
					],
					"operation": [
						"GET Shop Payment Methods"
					]
				}
			}
		},
		{
			"displayName": "DELETE /shop/vacation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shop"
					],
					"operation": [
						"DELETE Shop Vacation"
					]
				}
			}
		},
		{
			"displayName": "GET /shop/vacation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shop"
					],
					"operation": [
						"GET Shop Vacation"
					]
				}
			}
		},
		{
			"displayName": "POST /shop/vacation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shop"
					],
					"operation": [
						"POST Shop Vacation"
					]
				}
			}
		},
];
