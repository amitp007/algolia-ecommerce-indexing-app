import algoliasearch from 'algoliasearch'
import fetch from 'node-fetch';


const client = algoliasearch('8TGDBU65PJ', 'bde633be0db9af6239dde7361f3fb4b2')

const index = client.initIndex('sampleproduct')

fetch('https://alg.li/doc-ecommerce.json')
  .then(function(response) {
    return response.json()
  })
  .then(function(products) {
    return index.saveObjects(products, {
      autoGenerateObjectIDIfNotExist: true
    })
  })
