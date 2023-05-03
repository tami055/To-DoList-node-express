console.log('hi');

const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');

sdk.auth('rnd_bVtXtBNqRyVa5AQupmi5UGtXi5eD');
sdk.getServices({limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));