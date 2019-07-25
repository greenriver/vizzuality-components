// 20190725151726
// http://api.resourcewatch.org/v1/dataset/c856396d-d0f2-4aae-9671-4903b2ebed4d/layer

const response = {
  "data": [
    {
      "id": "2fa6a658-5d73-4e92-82e5-f0f6a04c452e",
      "type": "layer",
      "attributes": {
        "name": "2018 Host Countries of Refugees and Internally Displaced Persons (millions of people)",
        "slug": "2018-Host-Countries-of-Refugees-and-Internally-Displaced-Persons-millions-of-people",
        "dataset": "c856396d-d0f2-4aae-9671-4903b2ebed4d",
        "description": "Total number of refugees, internally displaced persons, stateless persons, asylum seekers, and others of concern by the country in which they were granted asylum in 2018.",
        "application": [
          "rw"
        ],
        "iso": [

        ],
        "provider": "cartodb",
        "userId": "5980838ae24e6a1dae3dd446",
        "default": true,
        "protected": false,
        "published": true,
        "env": "production",
        "layerConfig": {
          "account": "wri-rw",
          "timelineLabel": "2018",
          "order": 2018,
          "timeline": true,
          "body": {
            "maxzoom": 18,
            "minzoom": 3,
            "layers": [
              {
                "type": "mapnik",
                "options": {
                  "sql": "SELECT wri.cartodb_id, wri.the_geom_webmercator, wri.name, sub.* FROM (SELECT data.country_territory_of_asylum_residence, data.year, SUM(data.total_population) AS total  FROM soc_043_refugees_internally_displaced_persons data WHERE data.total_population IS NOT NULL AND data.year=2018 GROUP BY data.country_territory_of_asylum_residence, data.year) sub LEFT OUTER JOIN wri_countries_a wri ON wri.name ILIKE TRIM(sub.country_territory_of_asylum_residence) UNION SELECT wri.cartodb_id, wri.the_geom_webmercator, wri.name, sub.* FROM (SELECT data.country_territory_of_asylum_residence, data.year, SUM(data.total_population) AS total  FROM soc_043_refugees_internally_displaced_persons data WHERE data.total_population IS NOT NULL AND data.year=2018 GROUP BY data.country_territory_of_asylum_residence, data.year) sub  INNER JOIN rw_aliasing_countries aliasing ON TRIM(sub.country_territory_of_asylum_residence) ILIKE aliasing.alias INNER JOIN wri_countries_a wri ON wri.iso_a3 = aliasing.iso",
                  "cartocss": "#layer {polygon-opacity:1; line-width:0.3; line-color:#adadad; line-opacity:1;} [total>=5000000]{polygon-fill:#006d2c;} [total>=1000000][total<5000000]{polygon-fill:#2ca25f;} [total>=500000][total<1000000]{polygon-fill:#66c2a4;} [total>=100000][total<500000]{polygon-fill:#b2e2e2;} [total<100000]{polygon-fill:#edf8fb;}",
                  "cartocss_version": "2.3.0"
                }
              }
            ]
          }
        },
        "legendConfig": {
          "type": "choropleth",
          "items": [
            {
              "id": 0,
              "name": "<0.1",
              "color": "#edf8fb"
            },
            {
              "id": 1,
              "name": "<0.5",
              "color": "#b2e2e2"
            },
            {
              "id": 2,
              "name": "<1",
              "color": "#66c2a4"
            },
            {
              "id": 3,
              "name": "<5",
              "color": "#2ca25f"
            },
            {
              "id": 4,
              "name": "<7.5",
              "color": "#006d2c"
            }
          ]
        },
        "interactionConfig": {
          "output": [
            {
              "column": "country_territory_of_asylum_residence",
              "format": null,
              "prefix": "",
              "property": "Country of Asylum Residence",
              "suffix": "",
              "type": "string"
            },
            {
              "column": "year",
              "format": null,
              "prefix": "",
              "property": "Year",
              "suffix": "",
              "type": "number"
            },
            {
              "column": "total",
              "format": "0,0",
              "prefix": "",
              "property": "Total number of people granted asylum",
              "suffix": ""
            }
          ]
        },
        "applicationConfig": {

        },
        "staticImageConfig": {

        },
        "updatedAt": "2019-06-28T14:13:14.576Z"
      }
    },
    {
      "id": "4360b45c-dd79-44f3-8bcc-4531f0652773",
      "type": "layer",
      "attributes": {
        "name": "2017 Host Countries of Refugees and Internally Displaced Persons (millions of people)",
        "slug": "2017-Host-Countries-of-Refugees-and-Internally-Displaced-Persons-millions-of-people",
        "dataset": "c856396d-d0f2-4aae-9671-4903b2ebed4d",
        "description": "Total number of refugees, internally displaced persons, stateless persons, asylum seekers, and others of concern by the country in which they were granted asylum in 2017.",
        "application": [
          "rw"
        ],
        "iso": [

        ],
        "provider": "cartodb",
        "userId": "5980838ae24e6a1dae3dd446",
        "default": false,
        "protected": false,
        "published": true,
        "env": "production",
        "layerConfig": {
          "body": {
            "layers": [
              {
                "options": {
                  "cartocss_version": "2.3.0",
                  "cartocss": "#layer {polygon-opacity:1; line-width:0.3; line-color:#adadad; line-opacity:1;} [total>=5000000]{polygon-fill:#006d2c;} [total>=1000000][total<5000000]{polygon-fill:#2ca25f;} [total>=500000][total<1000000]{polygon-fill:#66c2a4;} [total>=100000][total<500000]{polygon-fill:#b2e2e2;} [total<100000]{polygon-fill:#edf8fb;}",
                  "sql": "SELECT wri.cartodb_id, wri.the_geom_webmercator, wri.name, sub.* FROM (SELECT data.country_territory_of_asylum_residence, data.year, SUM(data.total_population) AS total  FROM soc_043_refugees_internally_displaced_persons data WHERE data.total_population IS NOT NULL AND data.year=2017 GROUP BY data.country_territory_of_asylum_residence, data.year) sub LEFT OUTER JOIN wri_countries_a wri ON wri.name ILIKE TRIM(sub.country_territory_of_asylum_residence) UNION SELECT wri.cartodb_id, wri.the_geom_webmercator, wri.name, sub.* FROM (SELECT data.country_territory_of_asylum_residence, data.year, SUM(data.total_population) AS total  FROM soc_043_refugees_internally_displaced_persons data WHERE data.total_population IS NOT NULL AND data.year=2017 GROUP BY data.country_territory_of_asylum_residence, data.year) sub  INNER JOIN rw_aliasing_countries aliasing ON TRIM(sub.country_territory_of_asylum_residence) ILIKE aliasing.alias INNER JOIN wri_countries_a wri ON wri.iso_a3 = aliasing.iso"
                },
                "type": "mapnik"
              }
            ],
            "minzoom": 3,
            "maxzoom": 18
          },
          "timeline": true,
          "order": 2017,
          "timelineLabel": "2017",
          "account": "wri-rw"
        },
        "legendConfig": {
          "items": [
            {
              "color": "#edf8fb",
              "name": "<0.1",
              "id": 0
            },
            {
              "color": "#b2e2e2",
              "name": "<0.5",
              "id": 1
            },
            {
              "color": "#66c2a4",
              "name": "<1",
              "id": 2
            },
            {
              "color": "#2ca25f",
              "name": "<5",
              "id": 3
            },
            {
              "color": "#006d2c",
              "name": "<7.5",
              "id": 4
            }
          ],
          "type": "choropleth"
        },
        "interactionConfig": {
          "output": [
            {
              "column": "country_territory_of_asylum_residence",
              "format": null,
              "prefix": "",
              "property": "Country of Asylum Residence",
              "suffix": "",
              "type": "string"
            },
            {
              "column": "year",
              "format": null,
              "prefix": "",
              "property": "Year",
              "suffix": "",
              "type": "number"
            },
            {
              "column": "total",
              "format": null,
              "prefix": "",
              "property": "Total number of people granted asylum",
              "suffix": ""
            }
          ]
        },
        "applicationConfig": {

        },
        "staticImageConfig": {

        },
        "updatedAt": "2019-06-28T14:36:12.886Z"
      }
    },
    {
      "id": "39bcce98-b634-4afe-a6ba-ffbc1b2f6225",
      "type": "layer",
      "attributes": {
        "name": "2016 Host Countries of Refugees and Internally Displaced Persons (millions of people)",
        "slug": "2016-Host-Countries-of-Refugees-and-Internally-Displaced-Persons-millions-of-people",
        "dataset": "c856396d-d0f2-4aae-9671-4903b2ebed4d",
        "description": "Total number of refugees, internally displaced persons, stateless persons, asylum seekers, and others of concern by the country in which they were granted asylum in 2016.",
        "application": [
          "rw"
        ],
        "iso": [

        ],
        "provider": "cartodb",
        "userId": "5980838ae24e6a1dae3dd446",
        "default": false,
        "protected": false,
        "published": true,
        "env": "production",
        "layerConfig": {
          "body": {
            "layers": [
              {
                "options": {
                  "cartocss_version": "2.3.0",
                  "cartocss": "#layer {polygon-opacity:1; line-width:0.3; line-color:#adadad; line-opacity:1;} [total>=5000000]{polygon-fill:#006d2c;} [total>=1000000][total<5000000]{polygon-fill:#2ca25f;} [total>=500000][total<1000000]{polygon-fill:#66c2a4;} [total>=100000][total<500000]{polygon-fill:#b2e2e2;} [total<100000]{polygon-fill:#edf8fb;}",
                  "sql": "SELECT wri.cartodb_id, wri.the_geom_webmercator, wri.name, sub.* FROM (SELECT data.country_territory_of_asylum_residence, data.year, SUM(data.total_population) AS total  FROM soc_043_refugees_internally_displaced_persons data WHERE data.total_population IS NOT NULL AND data.year=2016 GROUP BY data.country_territory_of_asylum_residence, data.year) sub LEFT OUTER JOIN wri_countries_a wri ON wri.name ILIKE TRIM(sub.country_territory_of_asylum_residence) UNION SELECT wri.cartodb_id, wri.the_geom_webmercator, wri.name, sub.* FROM (SELECT data.country_territory_of_asylum_residence, data.year, SUM(data.total_population) AS total  FROM soc_043_refugees_internally_displaced_persons data WHERE data.total_population IS NOT NULL AND data.year=2016 GROUP BY data.country_territory_of_asylum_residence, data.year) sub  INNER JOIN rw_aliasing_countries aliasing ON TRIM(sub.country_territory_of_asylum_residence) ILIKE aliasing.alias INNER JOIN wri_countries_a wri ON wri.iso_a3 = aliasing.iso"
                },
                "type": "mapnik"
              }
            ],
            "minzoom": 3,
            "maxzoom": 18
          },
          "timeline": true,
          "order": 2016,
          "timelineLabel": "2016",
          "account": "wri-rw"
        },
        "legendConfig": {
          "items": [
            {
              "color": "#edf8fb",
              "name": "<0.1",
              "id": 0
            },
            {
              "color": "#b2e2e2",
              "name": "<0.5",
              "id": 1
            },
            {
              "color": "#66c2a4",
              "name": "<1",
              "id": 2
            },
            {
              "color": "#2ca25f",
              "name": "<5",
              "id": 3
            },
            {
              "color": "#006d2c",
              "name": "<7.5",
              "id": 4
            }
          ],
          "type": "choropleth"
        },
        "interactionConfig": {
          "output": [
            {
              "column": "country_territory_of_asylum_residence",
              "format": null,
              "prefix": "",
              "property": "Country of Asylum Residence",
              "suffix": "",
              "type": "string"
            },
            {
              "column": "year",
              "format": null,
              "prefix": "",
              "property": "Year",
              "suffix": "",
              "type": "number"
            },
            {
              "column": "total",
              "format": null,
              "prefix": "",
              "property": "Total number of people granted asylum",
              "suffix": ""
            }
          ]
        },
        "applicationConfig": {

        },
        "staticImageConfig": {

        },
        "updatedAt": "2019-06-28T14:36:40.860Z"
      }
    },
    {
      "id": "0f914455-f719-43ff-bc2b-cd18394f5df7",
      "type": "layer",
      "attributes": {
        "name": "2015 Host Countries of Refugees and Internally Displaced Persons (millions of people)",
        "slug": "2015-Host-Countries-of-Refugees-and-Internally-Displaced-Persons-millions-of-people",
        "dataset": "c856396d-d0f2-4aae-9671-4903b2ebed4d",
        "description": "Total number of refugees, internally displaced persons, stateless persons, asylum seekers, and others of concern by the country in which they were granted asylum in 2015.",
        "application": [
          "rw"
        ],
        "iso": [

        ],
        "provider": "cartodb",
        "userId": "5980838ae24e6a1dae3dd446",
        "default": false,
        "protected": false,
        "published": true,
        "env": "production",
        "layerConfig": {
          "body": {
            "layers": [
              {
                "options": {
                  "cartocss_version": "2.3.0",
                  "cartocss": "#layer {polygon-opacity:1; line-width:0.3; line-color:#adadad; line-opacity:1;} [total>=5000000]{polygon-fill:#006d2c;} [total>=1000000][total<5000000]{polygon-fill:#2ca25f;} [total>=500000][total<1000000]{polygon-fill:#66c2a4;} [total>=100000][total<500000]{polygon-fill:#b2e2e2;} [total<100000]{polygon-fill:#edf8fb;}",
                  "sql": "SELECT wri.cartodb_id, wri.the_geom_webmercator, wri.name, sub.* FROM (SELECT data.country_territory_of_asylum_residence, data.year, SUM(data.total_population) AS total  FROM soc_043_refugees_internally_displaced_persons data WHERE data.total_population IS NOT NULL AND data.year=2015 GROUP BY data.country_territory_of_asylum_residence, data.year) sub LEFT OUTER JOIN wri_countries_a wri ON wri.name ILIKE TRIM(sub.country_territory_of_asylum_residence) UNION SELECT wri.cartodb_id, wri.the_geom_webmercator, wri.name, sub.* FROM (SELECT data.country_territory_of_asylum_residence, data.year, SUM(data.total_population) AS total  FROM soc_043_refugees_internally_displaced_persons data WHERE data.total_population IS NOT NULL AND data.year=2015 GROUP BY data.country_territory_of_asylum_residence, data.year) sub  INNER JOIN rw_aliasing_countries aliasing ON TRIM(sub.country_territory_of_asylum_residence) ILIKE aliasing.alias INNER JOIN wri_countries_a wri ON wri.iso_a3 = aliasing.iso"
                },
                "type": "mapnik"
              }
            ],
            "minzoom": 3,
            "maxzoom": 18
          },
          "timeline": true,
          "order": 2015,
          "timelineLabel": "2015",
          "account": "wri-rw"
        },
        "legendConfig": {
          "items": [
            {
              "color": "#edf8fb",
              "name": "<0.1",
              "id": 0
            },
            {
              "color": "#b2e2e2",
              "name": "<0.5",
              "id": 1
            },
            {
              "color": "#66c2a4",
              "name": "<1",
              "id": 2
            },
            {
              "color": "#2ca25f",
              "name": "<5",
              "id": 3
            },
            {
              "color": "#006d2c",
              "name": "<7.5",
              "id": 4
            }
          ],
          "type": "choropleth"
        },
        "interactionConfig": {
          "output": [
            {
              "column": "country_territory_of_asylum_residence",
              "format": null,
              "prefix": "",
              "property": "Country of Asylum Residence",
              "suffix": "",
              "type": "string"
            },
            {
              "column": "year",
              "format": null,
              "prefix": "",
              "property": "Year",
              "suffix": "",
              "type": "number"
            },
            {
              "column": "total",
              "format": null,
              "prefix": "",
              "property": "Total number of people granted asylum",
              "suffix": ""
            }
          ]
        },
        "applicationConfig": {

        },
        "staticImageConfig": {

        },
        "updatedAt": "2019-06-28T14:37:03.530Z"
      }
    },
    {
      "id": "ec1da945-aa15-4811-b64b-70feea15fb45",
      "type": "layer",
      "attributes": {
        "name": "2010 Host Countries of Refugees and Internally Displaced Persons (millions of people)",
        "slug": "2010-Host-Countries-of-Refugees-and-Internally-Displaced-Persons-millions-of-people",
        "dataset": "c856396d-d0f2-4aae-9671-4903b2ebed4d",
        "description": "Total number of refugees, internally displaced persons, stateless persons, asylum seekers, and others of concern by the country in which they were granted asylum in 2010.",
        "application": [
          "rw"
        ],
        "iso": [

        ],
        "provider": "cartodb",
        "userId": "5980838ae24e6a1dae3dd446",
        "default": false,
        "protected": false,
        "published": true,
        "env": "production",
        "layerConfig": {
          "body": {
            "layers": [
              {
                "options": {
                  "cartocss_version": "2.3.0",
                  "cartocss": "#layer {polygon-opacity:1; line-width:0.3; line-color:#adadad; line-opacity:1;} [total>=5000000]{polygon-fill:#006d2c;} [total>=1000000][total<5000000]{polygon-fill:#2ca25f;} [total>=500000][total<1000000]{polygon-fill:#66c2a4;} [total>=100000][total<500000]{polygon-fill:#b2e2e2;} [total<100000]{polygon-fill:#edf8fb;}",
                  "sql": "SELECT wri.cartodb_id, wri.the_geom_webmercator, wri.name, sub.* FROM (SELECT data.country_territory_of_asylum_residence, data.year, SUM(data.total_population) AS total  FROM soc_043_refugees_internally_displaced_persons data WHERE data.total_population IS NOT NULL AND data.year=2010 GROUP BY data.country_territory_of_asylum_residence, data.year) sub LEFT OUTER JOIN wri_countries_a wri ON wri.name ILIKE TRIM(sub.country_territory_of_asylum_residence) UNION SELECT wri.cartodb_id, wri.the_geom_webmercator, wri.name, sub.* FROM (SELECT data.country_territory_of_asylum_residence, data.year, SUM(data.total_population) AS total  FROM soc_043_refugees_internally_displaced_persons data WHERE data.total_population IS NOT NULL AND data.year=2010 GROUP BY data.country_territory_of_asylum_residence, data.year) sub  INNER JOIN rw_aliasing_countries aliasing ON TRIM(sub.country_territory_of_asylum_residence) ILIKE aliasing.alias INNER JOIN wri_countries_a wri ON wri.iso_a3 = aliasing.iso"
                },
                "type": "mapnik"
              }
            ],
            "minzoom": 3,
            "maxzoom": 18
          },
          "timeline": true,
          "order": 2010,
          "timelineLabel": "2010",
          "account": "wri-rw"
        },
        "legendConfig": {
          "items": [
            {
              "color": "#edf8fb",
              "name": "<0.1",
              "id": 0
            },
            {
              "color": "#b2e2e2",
              "name": "<0.5",
              "id": 1
            },
            {
              "color": "#66c2a4",
              "name": "<1",
              "id": 2
            },
            {
              "color": "#2ca25f",
              "name": "<5",
              "id": 3
            },
            {
              "color": "#006d2c",
              "name": "<7.5",
              "id": 4
            }
          ],
          "type": "choropleth"
        },
        "interactionConfig": {
          "output": [
            {
              "column": "country_territory_of_asylum_residence",
              "format": null,
              "prefix": "",
              "property": "Country of Asylum Residence",
              "suffix": "",
              "type": "string"
            },
            {
              "column": "year",
              "format": null,
              "prefix": "",
              "property": "Year",
              "suffix": "",
              "type": "number"
            },
            {
              "column": "total",
              "format": null,
              "prefix": "",
              "property": "Total number of people granted asylum",
              "suffix": ""
            }
          ]
        },
        "applicationConfig": {

        },
        "staticImageConfig": {

        },
        "updatedAt": "2019-06-28T14:37:21.442Z"
      }
    },
    {
      "id": "cf84c39f-4806-458f-b62f-42d30ba89c77",
      "type": "layer",
      "attributes": {
        "name": "2005 Host Countries of Refugees and Internally Displaced Persons (millions of people)",
        "slug": "2005-Host-Countries-of-Refugees-and-Internally-Displaced-Persons-millions-of-people",
        "dataset": "c856396d-d0f2-4aae-9671-4903b2ebed4d",
        "description": "Total number of refugees, internally displaced persons, stateless persons, asylum seekers, and others of concern by the country in which they were granted asylum in 2005.",
        "application": [
          "rw"
        ],
        "iso": [

        ],
        "provider": "cartodb",
        "userId": "5980838ae24e6a1dae3dd446",
        "default": false,
        "protected": false,
        "published": true,
        "env": "production",
        "layerConfig": {
          "body": {
            "layers": [
              {
                "options": {
                  "cartocss_version": "2.3.0",
                  "cartocss": "#layer {polygon-opacity:1; line-width:0.3; line-color:#adadad; line-opacity:1;} [total>=5000000]{polygon-fill:#006d2c;} [total>=1000000][total<5000000]{polygon-fill:#2ca25f;} [total>=500000][total<1000000]{polygon-fill:#66c2a4;} [total>=100000][total<500000]{polygon-fill:#b2e2e2;} [total<100000]{polygon-fill:#edf8fb;}",
                  "sql": "SELECT wri.cartodb_id, wri.the_geom_webmercator, wri.name, sub.* FROM (SELECT data.country_territory_of_asylum_residence, data.year, SUM(data.total_population) AS total  FROM soc_043_refugees_internally_displaced_persons data WHERE data.total_population IS NOT NULL AND data.year=2005 GROUP BY data.country_territory_of_asylum_residence, data.year) sub LEFT OUTER JOIN wri_countries_a wri ON wri.name ILIKE TRIM(sub.country_territory_of_asylum_residence) UNION SELECT wri.cartodb_id, wri.the_geom_webmercator, wri.name, sub.* FROM (SELECT data.country_territory_of_asylum_residence, data.year, SUM(data.total_population) AS total  FROM soc_043_refugees_internally_displaced_persons data WHERE data.total_population IS NOT NULL AND data.year=2005 GROUP BY data.country_territory_of_asylum_residence, data.year) sub  INNER JOIN rw_aliasing_countries aliasing ON TRIM(sub.country_territory_of_asylum_residence) ILIKE aliasing.alias INNER JOIN wri_countries_a wri ON wri.iso_a3 = aliasing.iso"
                },
                "type": "mapnik"
              }
            ],
            "minzoom": 3,
            "maxzoom": 18
          },
          "timeline": true,
          "order": 2005,
          "timelineLabel": "2005",
          "account": "wri-rw"
        },
        "legendConfig": {
          "items": [
            {
              "color": "#edf8fb",
              "name": "<0.1",
              "id": 0
            },
            {
              "color": "#b2e2e2",
              "name": "<0.5",
              "id": 1
            },
            {
              "color": "#66c2a4",
              "name": "<1",
              "id": 2
            },
            {
              "color": "#2ca25f",
              "name": "<5",
              "id": 3
            },
            {
              "color": "#006d2c",
              "name": "<7.5",
              "id": 4
            }
          ],
          "type": "choropleth"
        },
        "interactionConfig": {
          "output": [
            {
              "column": "country_territory_of_asylum_residence",
              "format": null,
              "prefix": "",
              "property": "Country of Asylum Residence",
              "suffix": "",
              "type": "string"
            },
            {
              "column": "year",
              "format": null,
              "prefix": "",
              "property": "Year",
              "suffix": "",
              "type": "number"
            },
            {
              "column": "total",
              "format": null,
              "prefix": "",
              "property": "Total number of people granted asylum",
              "suffix": ""
            }
          ]
        },
        "applicationConfig": {

        },
        "staticImageConfig": {

        },
        "updatedAt": "2019-06-28T14:41:00.418Z"
      }
    },
    {
      "id": "e85af5eb-fedc-459b-98e1-f4ca5484348f",
      "type": "layer",
      "attributes": {
        "name": "2000 Host Countries of Refugees and Internally Displaced Persons (millions of people)",
        "slug": "2000-Host-Countries-of-Refugees-and-Internally-Displaced-Persons-millions-of-people",
        "dataset": "c856396d-d0f2-4aae-9671-4903b2ebed4d",
        "description": "Total number of refugees, internally displaced persons, stateless persons, asylum seekers, and others of concern by the country in which they were granted asylum in 2000.",
        "application": [
          "rw"
        ],
        "iso": [

        ],
        "provider": "cartodb",
        "userId": "5980838ae24e6a1dae3dd446",
        "default": false,
        "protected": false,
        "published": true,
        "env": "production",
        "layerConfig": {
          "body": {
            "layers": [
              {
                "options": {
                  "cartocss_version": "2.3.0",
                  "cartocss": "#layer {polygon-opacity:1; line-width:0.3; line-color:#adadad; line-opacity:1;} [total>=5000000]{polygon-fill:#006d2c;} [total>=1000000][total<5000000]{polygon-fill:#2ca25f;} [total>=500000][total<1000000]{polygon-fill:#66c2a4;} [total>=100000][total<500000]{polygon-fill:#b2e2e2;} [total<100000]{polygon-fill:#edf8fb;}",
                  "sql": "SELECT wri.cartodb_id, wri.the_geom_webmercator, wri.name, sub.* FROM (SELECT data.country_territory_of_asylum_residence, data.year, SUM(data.total_population) AS total  FROM soc_043_refugees_internally_displaced_persons data WHERE data.total_population IS NOT NULL AND data.year=2000 GROUP BY data.country_territory_of_asylum_residence, data.year) sub LEFT OUTER JOIN wri_countries_a wri ON wri.name ILIKE TRIM(sub.country_territory_of_asylum_residence) UNION SELECT wri.cartodb_id, wri.the_geom_webmercator, wri.name, sub.* FROM (SELECT data.country_territory_of_asylum_residence, data.year, SUM(data.total_population) AS total  FROM soc_043_refugees_internally_displaced_persons data WHERE data.total_population IS NOT NULL AND data.year=2000 GROUP BY data.country_territory_of_asylum_residence, data.year) sub  INNER JOIN rw_aliasing_countries aliasing ON TRIM(sub.country_territory_of_asylum_residence) ILIKE aliasing.alias INNER JOIN wri_countries_a wri ON wri.iso_a3 = aliasing.iso"
                },
                "type": "mapnik"
              }
            ],
            "minzoom": 3,
            "maxzoom": 18
          },
          "timeline": true,
          "order": 2000,
          "timelineLabel": "2000",
          "account": "wri-rw"
        },
        "legendConfig": {
          "items": [
            {
              "color": "#edf8fb",
              "name": "<0.1",
              "id": 0
            },
            {
              "color": "#b2e2e2",
              "name": "<0.5",
              "id": 1
            },
            {
              "color": "#66c2a4",
              "name": "<1",
              "id": 2
            },
            {
              "color": "#2ca25f",
              "name": "<5",
              "id": 3
            },
            {
              "color": "#006d2c",
              "name": "<7.5",
              "id": 4
            }
          ],
          "type": "choropleth"
        },
        "interactionConfig": {
          "output": [
            {
              "type": "string",
              "suffix": "",
              "property": "Country of Asylum Residence",
              "prefix": "",
              "format": null,
              "column": "country_territory_of_asylum_residence"
            },
            {
              "type": "number",
              "suffix": "",
              "property": "Year",
              "prefix": "",
              "format": null,
              "column": "year"
            },
            {
              "suffix": "",
              "property": "Total number of people granted asylum",
              "prefix": "",
              "format": null,
              "column": "total"
            }
          ]
        },
        "applicationConfig": {

        },
        "staticImageConfig": {

        },
        "updatedAt": "2019-06-28T14:51:17.578Z"
      }
    },
    {
      "id": "35f4c632-2975-4ea2-8d78-4fd224d76837",
      "type": "layer",
      "attributes": {
        "name": "1995 Host Countries of Refugees and Internally Displaced Persons (millions of people)",
        "slug": "1995-Host-Countries-of-Refugees-and-Internally-Displaced-Persons-millions-of-people",
        "dataset": "c856396d-d0f2-4aae-9671-4903b2ebed4d",
        "description": "Total number of refugees, internally displaced persons, stateless persons, asylum seekers, and others of concern by the country in which they were granted asylum in 1995.",
        "application": [
          "rw"
        ],
        "iso": [

        ],
        "provider": "cartodb",
        "userId": "5980838ae24e6a1dae3dd446",
        "default": false,
        "protected": false,
        "published": true,
        "env": "production",
        "layerConfig": {
          "body": {
            "layers": [
              {
                "options": {
                  "cartocss_version": "2.3.0",
                  "cartocss": "#layer {polygon-opacity:1; line-width:0.3; line-color:#adadad; line-opacity:1;} [total>=5000000]{polygon-fill:#006d2c;} [total>=1000000][total<5000000]{polygon-fill:#2ca25f;} [total>=500000][total<1000000]{polygon-fill:#66c2a4;} [total>=100000][total<500000]{polygon-fill:#b2e2e2;} [total<100000]{polygon-fill:#edf8fb;}",
                  "sql": "SELECT wri.cartodb_id, wri.the_geom_webmercator, wri.name, sub.* FROM (SELECT data.country_territory_of_asylum_residence, data.year, SUM(data.total_population) AS total  FROM soc_043_refugees_internally_displaced_persons data WHERE data.total_population IS NOT NULL AND data.year=1995 GROUP BY data.country_territory_of_asylum_residence, data.year) sub LEFT OUTER JOIN wri_countries_a wri ON wri.name ILIKE TRIM(sub.country_territory_of_asylum_residence) UNION SELECT wri.cartodb_id, wri.the_geom_webmercator, wri.name, sub.* FROM (SELECT data.country_territory_of_asylum_residence, data.year, SUM(data.total_population) AS total  FROM soc_043_refugees_internally_displaced_persons data WHERE data.total_population IS NOT NULL AND data.year=1995 GROUP BY data.country_territory_of_asylum_residence, data.year) sub  INNER JOIN rw_aliasing_countries aliasing ON TRIM(sub.country_territory_of_asylum_residence) ILIKE aliasing.alias INNER JOIN wri_countries_a wri ON wri.iso_a3 = aliasing.iso"
                },
                "type": "mapnik"
              }
            ],
            "minzoom": 3,
            "maxzoom": 18
          },
          "timeline": true,
          "order": 1995,
          "timelineLabel": "1995",
          "account": "wri-rw"
        },
        "legendConfig": {
          "items": [
            {
              "color": "#edf8fb",
              "name": "<0.1",
              "id": 0
            },
            {
              "color": "#b2e2e2",
              "name": "<0.5",
              "id": 1
            },
            {
              "color": "#66c2a4",
              "name": "<1",
              "id": 2
            },
            {
              "color": "#2ca25f",
              "name": "<5",
              "id": 3
            },
            {
              "color": "#006d2c",
              "name": "<7.5",
              "id": 4
            }
          ],
          "type": "choropleth"
        },
        "interactionConfig": {
          "output": [
            {
              "column": "country_territory_of_asylum_residence",
              "format": null,
              "prefix": "",
              "property": "Country of Asylum Residence",
              "suffix": "",
              "type": "string"
            },
            {
              "column": "year",
              "format": null,
              "prefix": "",
              "property": "Year",
              "suffix": "",
              "type": "number"
            },
            {
              "column": "total",
              "format": null,
              "prefix": "",
              "property": "Total number of people granted asylum",
              "suffix": ""
            }
          ]
        },
        "applicationConfig": {

        },
        "staticImageConfig": {

        },
        "updatedAt": "2019-06-28T14:53:39.066Z"
      }
    },
    {
      "id": "c737ad84-5331-45df-9088-14d9ea1d1581",
      "type": "layer",
      "attributes": {
        "name": "1990 Host Countries of Refugees and Internally Displaced Persons (millions of people)",
        "slug": "1990-Host-Countries-of-Refugees-and-Internally-Displaced-Persons-millions-of-people",
        "dataset": "c856396d-d0f2-4aae-9671-4903b2ebed4d",
        "description": "Total number of refugees, internally displaced persons, stateless persons, asylum seekers, and others of concern by the country in which they were granted asylum in 1990.",
        "application": [
          "rw"
        ],
        "iso": [

        ],
        "provider": "cartodb",
        "userId": "5980838ae24e6a1dae3dd446",
        "default": false,
        "protected": false,
        "published": true,
        "env": "production",
        "layerConfig": {
          "body": {
            "layers": [
              {
                "options": {
                  "cartocss_version": "2.3.0",
                  "cartocss": "#layer {polygon-opacity:1; line-width:0.3; line-color:#adadad; line-opacity:1;} [total>=5000000]{polygon-fill:#006d2c;} [total>=1000000][total<5000000]{polygon-fill:#2ca25f;} [total>=500000][total<1000000]{polygon-fill:#66c2a4;} [total>=100000][total<500000]{polygon-fill:#b2e2e2;} [total<100000]{polygon-fill:#edf8fb;}",
                  "sql": "SELECT wri.cartodb_id, wri.the_geom_webmercator, wri.name, sub.* FROM (SELECT data.country_territory_of_asylum_residence, data.year, SUM(data.total_population) AS total  FROM soc_043_refugees_internally_displaced_persons data WHERE data.total_population IS NOT NULL AND data.year=1990 GROUP BY data.country_territory_of_asylum_residence, data.year) sub LEFT OUTER JOIN wri_countries_a wri ON wri.name ILIKE TRIM(sub.country_territory_of_asylum_residence) UNION SELECT wri.cartodb_id, wri.the_geom_webmercator, wri.name, sub.* FROM (SELECT data.country_territory_of_asylum_residence, data.year, SUM(data.total_population) AS total  FROM soc_043_refugees_internally_displaced_persons data WHERE data.total_population IS NOT NULL AND data.year=1990 GROUP BY data.country_territory_of_asylum_residence, data.year) sub  INNER JOIN rw_aliasing_countries aliasing ON TRIM(sub.country_territory_of_asylum_residence) ILIKE aliasing.alias INNER JOIN wri_countries_a wri ON wri.iso_a3 = aliasing.iso"
                },
                "type": "mapnik"
              }
            ],
            "minzoom": 3,
            "maxzoom": 18
          },
          "timeline": true,
          "order": 1990,
          "timelineLabel": "1990",
          "account": "wri-rw"
        },
        "legendConfig": {
          "items": [
            {
              "color": "#edf8fb",
              "name": "<0.1",
              "id": 0
            },
            {
              "color": "#b2e2e2",
              "name": "<0.5",
              "id": 1
            },
            {
              "color": "#66c2a4",
              "name": "<1",
              "id": 2
            },
            {
              "color": "#2ca25f",
              "name": "<5",
              "id": 3
            },
            {
              "color": "#006d2c",
              "name": "<7.5",
              "id": 4
            }
          ],
          "type": "choropleth"
        },
        "interactionConfig": {
          "output": [
            {
              "type": "string",
              "suffix": "",
              "property": "Country of Asylum Residence",
              "prefix": "",
              "format": null,
              "column": "country_territory_of_asylum_residence"
            },
            {
              "type": "number",
              "suffix": "",
              "property": "Year",
              "prefix": "",
              "format": null,
              "column": "year"
            },
            {
              "suffix": "",
              "property": "Total number of people granted asylum",
              "prefix": "",
              "format": null,
              "column": "total"
            }
          ]
        },
        "applicationConfig": {

        },
        "staticImageConfig": {

        },
        "updatedAt": "2019-06-28T14:54:47.450Z"
      }
    },
    {
      "id": "e6ef6f96-77f6-466f-af2c-b8975f45d32f",
      "type": "layer",
      "attributes": {
        "name": "1985 Host Countries of Refugees and Internally Displaced Persons (millions of people)",
        "slug": "1985-Host-Countries-of-Refugees-and-Internally-Displaced-Persons-millions-of-people",
        "dataset": "c856396d-d0f2-4aae-9671-4903b2ebed4d",
        "description": "Total number of refugees, internally displaced persons, stateless persons, asylum seekers, and others of concern by the country in which they were granted asylum in 1985.",
        "application": [
          "rw"
        ],
        "iso": [

        ],
        "provider": "cartodb",
        "userId": "5980838ae24e6a1dae3dd446",
        "default": false,
        "protected": false,
        "published": true,
        "env": "production",
        "layerConfig": {
          "body": {
            "layers": [
              {
                "options": {
                  "cartocss_version": "2.3.0",
                  "cartocss": "#layer {polygon-opacity:1; line-width:0.3; line-color:#adadad; line-opacity:1;} [total>=5000000]{polygon-fill:#006d2c;} [total>=1000000][total<5000000]{polygon-fill:#2ca25f;} [total>=500000][total<1000000]{polygon-fill:#66c2a4;} [total>=100000][total<500000]{polygon-fill:#b2e2e2;} [total<100000]{polygon-fill:#edf8fb;}",
                  "sql": "SELECT wri.cartodb_id, wri.the_geom_webmercator, wri.name, sub.* FROM (SELECT data.country_territory_of_asylum_residence, data.year, SUM(data.total_population) AS total  FROM soc_043_refugees_internally_displaced_persons data WHERE data.total_population IS NOT NULL AND data.year=1985 GROUP BY data.country_territory_of_asylum_residence, data.year) sub LEFT OUTER JOIN wri_countries_a wri ON wri.name ILIKE TRIM(sub.country_territory_of_asylum_residence) UNION SELECT wri.cartodb_id, wri.the_geom_webmercator, wri.name, sub.* FROM (SELECT data.country_territory_of_asylum_residence, data.year, SUM(data.total_population) AS total  FROM soc_043_refugees_internally_displaced_persons data WHERE data.total_population IS NOT NULL AND data.year=1985 GROUP BY data.country_territory_of_asylum_residence, data.year) sub  INNER JOIN rw_aliasing_countries aliasing ON TRIM(sub.country_territory_of_asylum_residence) ILIKE aliasing.alias INNER JOIN wri_countries_a wri ON wri.iso_a3 = aliasing.iso"
                },
                "type": "mapnik"
              }
            ],
            "minzoom": 3,
            "maxzoom": 18
          },
          "timeline": true,
          "order": 1985,
          "timelineLabel": "1985",
          "account": "wri-rw"
        },
        "legendConfig": {
          "items": [
            {
              "color": "#edf8fb",
              "name": "<0.1",
              "id": 0
            },
            {
              "color": "#b2e2e2",
              "name": "<0.5",
              "id": 1
            },
            {
              "color": "#66c2a4",
              "name": "<1",
              "id": 2
            },
            {
              "color": "#2ca25f",
              "name": "<5",
              "id": 3
            },
            {
              "color": "#006d2c",
              "name": "<7.5",
              "id": 4
            }
          ],
          "type": "choropleth"
        },
        "interactionConfig": {
          "output": [
            {
              "type": "string",
              "suffix": "",
              "property": "Country of Asylum Residence",
              "prefix": "",
              "format": null,
              "column": "country_territory_of_asylum_residence"
            },
            {
              "type": "number",
              "suffix": "",
              "property": "Year",
              "prefix": "",
              "format": null,
              "column": "year"
            },
            {
              "suffix": "",
              "property": "Total number of people granted asylum",
              "prefix": "",
              "format": null,
              "column": "total"
            }
          ]
        },
        "applicationConfig": {

        },
        "staticImageConfig": {

        },
        "updatedAt": "2019-06-28T15:11:26.778Z"
      }
    }
  ],
  "links": {
    "self": "http://api.resourcewatch.org/v1/dataset/c856396d-d0f2-4aae-9671-4903b2ebed4d/layer?page[number]=1&page[size]=10",
    "first": "http://api.resourcewatch.org/v1/dataset/c856396d-d0f2-4aae-9671-4903b2ebed4d/layer?page[number]=1&page[size]=10",
    "last": "http://api.resourcewatch.org/v1/dataset/c856396d-d0f2-4aae-9671-4903b2ebed4d/layer?page[number]=2&page[size]=10",
    "prev": "http://api.resourcewatch.org/v1/dataset/c856396d-d0f2-4aae-9671-4903b2ebed4d/layer?page[number]=1&page[size]=10",
    "next": "http://api.resourcewatch.org/v1/dataset/c856396d-d0f2-4aae-9671-4903b2ebed4d/layer?page[number]=2&page[size]=10"
  },
  "meta": {
    "total-pages": 2,
    "total-items": 16,
    "size": 10
  }
}

export const layers = response.data

export default {
  layers
}
