# Caches in AEM Connector & I/O Runtime

CIF data like the result for a product or catalog query can be cached at I/O Runtime and within the AEM CIF Connector.

On I/O Runtime web actions can make use of I/O Runtime caching capabilities. The AEM CIF Connector implements three different caches: 
* HTTP cache 
* Catalog Cache
* Cart Cache

## HTTP Cache (I/O Runtime)

Caching on I/O Runtime gateway works via standard `Cache-Control` header set by the CIF web actions. For more details on the `Cache-Control` refer to [Cache-Control](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9).

I/O Runtime will injects an addtional `X-GW-Cache`response headers to indicate the caching behavior. This header can have the following values:

* HIT = cache hit, response was found and delivered from cache
* MISS = cache miss, response is cacheable but was not found in cache
* BYPASS = cache not used, for example for POST requests

For more details on how to set HTTP headers from Openwhisk actions refer to [Web Actions](https://github.com/apache/incubator-openwhisk/blob/master/docs/webactions.md#web-actions). 

Note that an Openwhisk action has to be deployed as a `webaction` to be able to return valid HTTP responses.   

## HTTP Cache (AEM Connector)
 
When querying CIF HTTP endpoints, the AEM CIF Connector uses an HTTP Client that can cache CIF responses based on the `Cache-Control` header sent/set by the CIF endpoint actions.

The following parameters can be configured in Adobe Experience Manager Web Console for the HTTP Cache:
* **Enable HTTP caching** - Enables/disables HTTP caching in the connector
* **Max cached entries** - The maximum number of HTTP responses that can be cached at any time given time
* **Max cached object size** - The maximum response body size that will be eligible for caching

To benefit from HTTP caching, a CIF service (i.e. an Openwhisk action) has to correctly set the `Cache-Control` header in the HTTP response.


## Catalog cache

Context: the AEM CIF connector implements a Sling resource provider in order to map categories and products data into synthetic resources. For example, it is possible to configure the connector such that categories and products data is available under `/var/commerce/products/cloudcommerce` with say, for example a Men's category and a product from that category respectively mapped at `/var/commerce/products/cloudcommerce/Men` and `/var/commerce/products/cloudcommerce/Men/product-sku`.

In order to speedup the resolution of these categories and products paths, the connector internally maintains a "catalog cache" that is automatically and periodically populated with all the possible category paths. Note that this cache only applies to the Sling resource provider and to the resolution of synthetic resources like for example everything under `/var/commerce/products/cloudcommerce`.
 
The following parameters can be configured in Adobe Experience Manager Web Console for the catalog cache:
* **Enable/disable catalog caching** - Enables/disables catalog caching in the Sling resource provider
* **Catalog caching time in minutes** - The caching time (in minutes) of the catalog categories
structure in the Sling resource provider
* **Catalog paging limit** - The number of categories that are queried at once by the catalog cache when it automatically (re-)populates the cache. 
* **Enable/disable cache scheduler** - Enables/disables the periodic update of the cache. This should only be disabled for testing purposes.

## Cart Cache
Cart Cache is a short lived cached. It was designed to avoid unnecessary `/GET` Cart API requests after updating the cart. 
The cart entry time to live period can be configured in Adobe Experience Manager Web Console:
  * **CCIF Cart Cache Entry time to live** - CIF Cart Cache Entry time to live in milliseconds
