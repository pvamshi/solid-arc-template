
@app
solid-playground

@http
get /api

@static
spa true

@aws
# profile default
region us-west-2
architecture arm64
runtime typescript # sets TS as the the default runtime for your entire project

@plugins
architect/plugin-typescript
