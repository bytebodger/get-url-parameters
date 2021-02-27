# get-url-parameters

`get-url-parameters` is a utility that function that retrieves query string variables and attempts to convert them into native JS data types.

## Usage

After installation, import the package:

```javascript
import { getUrlParameters } from '@toolz/get-url-parameters';
```

### getUrlParameters()

The function returns an object containing any query string parameters and attempts to convert those values into native JS data types.

```javascript
const API = {
   arguments: {
      convertDataTypes: {
         optional,
         format: Boolean,
         defaultValue: true,
      },
   },
   returns: Object,
}
```

**Examples:**

```javascript
// URL = /foo?name=adam&age=42&isKool=true&criminalRecord=null&pi=3.14
const urlParameters = getUrlParameters();
/*
   urlParameters = {
      name: 'adam',
      age: 42,
      isKool: true,
      criminalRecord: null,
      pi: 3.14,
   }
 */
```
