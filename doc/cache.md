#Caches in AEM Connector 
AEM Connector implements different purposes caches:
* Catalog Cache 
* HTTP cache 
* Cart Cache

##Catalog cache

Used when authoring pages, the cache for the catalog data is a long lived cache as usually this type of data rarely changes.
    
However the cached catalog is periodically refreshed. The refresh interval can be configured in Adobe Experience Manager Web Console:
* **Catalog caching time in minutes** - The caching time (in minutes) of the catalog categories
structure in the resource resolver mapper

##HTTP Cache
 
AEM Connector implements a full HTTP Client that can cache CIF responses based on `Cache-Control` header. 
The following parameters can be configured in Adobe Experience Manager Web Console for the HTTP Cache:
* **Enable HTTP caching** - Enables/disables HTTP caching in the connector
* **Max cached entries** - The maximum number of HTTP responses that can be cached
* **Max cached object size** - The maximum response body size that will be eligible for caching

To enable AEM Connector HTTP cache, or any other client which implements `Cache-Control` (i.e browser client) 
a CIF service (i.e runtime action) has to correctly set the `Cache-Control` header in the response. 
For more details on the `Cache-Control` refer to [Cache-Control](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9).
For more details on how to return http header from open whisk actions refer to [Web Actions](https://github.com/apache/incubator-openwhisk/blob/master/docs/webactions.md#web-actions). 

Note that an open whisk action has to be deployed as a `webaction` to be able to return valid HTTP responses.   


##Cart Cache
Cart Cache is a short lived cached. It was designed to avoid unnecessary `/GET` Cart API requests after updating the cart. 
The cart entry time to live period can be configured in Adobe Experience Manager Web Console:
  * **CCIF Cart Cache Entry time to live** - CIF Cart Cache Entry time to live in milliseconds


