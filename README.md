# Adobe CIF Cloud API and data model

This repo contains the API reference and data model documentation files for the upcomming Adobe Commerce Integration Framework (CIF) Cloud API.

## API

The CIF Cloud API is the heart of all programmatic interactions with Adobe's commerce integrations. The goal of the CIF Cloud API is to provide a comprehensive and extendable commerce storefront API. The API defines endpoints and data models suitable for all channels of customer facing shopping experiences. 

Using the CIF Cloud API, you can:

* Retrieve product information for a single product or a collection of products and use it on any website or device.
* Invoke a product search and filter to search results.
* Create omni channel checkout experiences with flexible control over the shopping cart and checkout flow.
* Create and login customer users to build personalized experiences.

CIF Cloud services are exposed via REST style APIs. All API access via Adobe I/O Runtime is over HTTPS. All CIF services return the information that you request as JSON data format.

The CIF Cloud API is not a full CRUD commerce admin or management API, for example it is not designed for data import / export use cases.

### API Specification

The API and data models are specified in [swagger.yaml](/api/swagger.yaml) / [swagger.json](/api/swagger.json). Review directly in [Swagger UI](http://petstore.swagger.io/?url=https://raw.githubusercontent.com/Adobe-Marketing-Cloud/commerce-cif-doc/master/api/swagger.yaml) or [Swagger Editor](http://editor.swagger.io/).

### JSON model examples

The [examples](examples) folder contains some JSON model examples that can help during the development of the CIF Cloud API. Check the README in that folder for more information about the examples.

## Adobe I/O Runtime

The CIF Cloud services architecture is based on [Apache OpenWhisk](https://openwhisk.apache.org) & [Adobe I/O Runtime](https://www.adobe.io/apis/cloudplatform/runtime.html). The main building blocks of the new commerce services are serverless functions (OpenWhisk actions). These actions run on Adobe I/O Runtime inside an isolated container, stateless and serverless interacting with the commerce backend system or other endpoints via their APIs. 

## Get started

To get started, you can follow the [tutorial](tutorial) that guides you into developing one particular API endpoint.

## Documentation

### Product Search

The product search service supports a flexible approach to query & filter product data by full-text search or attributes. This [document](doc/product_search.md) has a vararity of examples.

## Contributing

Contributions are welcome! Read the [Contributing Guide](CONTRIBUTING.md) for more information.
