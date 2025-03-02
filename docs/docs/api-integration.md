# API Integration

The Web App uses the [CoinGecko API](https://www.coingecko.com/en/api) to fetch live cryptocurrency prices. We use the `simple/price` endpoint to retrieve the price of specific coins in USD. This API returns a JSON object with the cryptocurrency IDs as keys and their USD prices as values.

Example API call:

```javascript
const { data } = await axios.get(
  "https://api.coingecko.com/api/v3/simple/price",
  {
    params: {
      ids: "bitcoin,ethereum,cardano",
      vs_currencies: "usd",
    },
  }
);
```
