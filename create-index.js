import algoliasearch from 'algoliasearch'

const client = algoliasearch('8TGDBU65PJ', '<replace with admin key>')

const index = client.initIndex('sampleproduct');

index.setSettings({
  // Select the attributes you want to search in
  searchableAttributes: [
    'brand', 'name', 'categories', 'description'
  ],
  // Define business metrics for ranking and sorting
  customRanking: [
    'desc(popularity)'
  ],
  // Set up some attributes to filter results on
  attributesForFaceting: [
    'categories', 'searchable(brand)', 'price'
  ]
});