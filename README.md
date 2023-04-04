# 🚀 Bunny CDN Purge Cache
This simple action purges the CDN cache of a specific pullzone via API access

## Input variables

See [action.yml](./action.yml) for more detailed information.

* `accessKey` - API key
* `zoneID` - Pull zone ID

## Example usage

```yaml
uses: eayllon/bunnycdn-purge-cache@main
with:
  accessKey: ${{ secrets.BUNNY_API_KEY }}
  zoneID: ${{ secrets.BUNNY_ZONE_ID }}
```

## Dev notes

Checking in *node_modules* directory can cause problems, use [vercel/ncc](https://github.com/vercel/ncc) to compile this action code and modules into one file used for distribution ```ncc build src/app.js -o .```
