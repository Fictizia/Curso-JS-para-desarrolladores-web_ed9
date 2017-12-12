# Conectando con la API de terremotos del USGS

## Link de la API.
https://earthquake.usgs.gov/fdsnws/event/1

## Parámetros que se pueden pedir
- Localización: format=geojson
- Magnitud mínima: minmagnitude=7
- A partir de cuándo: starttime=AAAAMMDD

## Ejemplo

https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minmagnitude=7&starttime=20170101

Devuelve la localización de los terremotos de magnitud 7 o más ocurridos desde el 1 de enero de 2017 hasta la fecha.
