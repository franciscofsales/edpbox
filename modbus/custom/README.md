Info:

 - Adds 'register_size'

Install:

```js
vv=2022.2.021
file=c-${vv}.zip
url=https://github.com/nikito7/edpbox/raw/dev/modbus/custom/${file}
mkdir -p /config/custom_components/modbus/
rm -rf /config/custom_components/modbus/*
cd /config/custom_components/modbus/
ls -a
pwd
wget $url
unzip $file
rm $file
ls -a
pwd
sed -i -e 's/\"name\": \"Modbus\",/\"name\": \"Modbus\",\n  \"version\": \"'${vv}'\",/g' manifest.json
ha core restart
```


