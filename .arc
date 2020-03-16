@app
begin-app

@static
folder build

@http
get /api
post /adu

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
