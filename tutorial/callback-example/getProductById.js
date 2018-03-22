
'use strict';

const HttpClient = require('node-rest-client').Client;

// This should point to some commerce backend URL to GET products
const url = 'https://my-commerce-backend/products/';

let sampleProductData = {
    pid: '123',
    name: 'A simple name',
    price: {
        currencyCode: 'USD',
        value: 10
    }
}

function main(args) {

    let httpClient = new HttpClient();
    
    return new Promise((resolve, reject) => {
        httpClient.get(url + args.id, function (data, response) {
            return resolve(buildResponse(data));
        }).on('error', function (err) {
            // To have this example working even without a valid URL, we simulate some "response" here
            return resolve(buildResponse(sampleProductData));
        });
    });
}

function buildResponse(backendProduct) {
    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: mapProduct(backendProduct)
    };
}

/**
 * Example conversion of a commerce backend product into a CIF product
 * 
 * @param backendProduct The JSON product data coming from the commerce system backend.
 * @returns a CIF product.
 */
function mapProduct(backendProduct) {
    return {
        id: backendProduct.pid,
        name: {
            en: backendProduct.name
        },
        prices: [
            {
                currency: backendProduct.price.currencyCode,
                centAmount: backendProduct.price.value * 100
            }
        ]
    };
}

module.exports.main = main;
