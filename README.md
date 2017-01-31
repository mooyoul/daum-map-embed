# daum-map-embed

Iframe으로 임베딩 가능한 [다음 지도](https://map.daum.net)


## Usage

> https://mooyoul.github.io/daum-map-embed/?width=640&height=480&center=lat,lng&marker[0][center]=lat,lng&marker[0][label]=message

Example: https://mooyoul.github.io/daum-map-embed/?width=600&height=400&center=33.450701,126.570667&marker[0][center]=33.450701,126.570667&marker[0][label]=foo&marker[1][center]=33.449401,126.571667


Name | Type | Required | Example | Note
---- | ---- | -------- | ------- | ----
center | String | Required | 33.450701,126.570667 | Center LatLng value of Map
zoom | Integer | Optional | 3 | Zoom level, defaults to 3
marker[] | Object[] | optional | - | marker information
marker[][center] | String | optional | 33.450701,126.570667 | LatLng value of Marker
marker[][label] | String | optional | some text (url-encoded: `some%2Dtext`) | Marker label


## Build

```bash
$ npm install
$ npm run build

```

# LICENSE

MIT. See full license on [mooyoul.mit-license.org](https://mooyoul.mit-license.org/)

