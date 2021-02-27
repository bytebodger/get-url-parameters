import { allow } from '@toolz/allow';

export const getUrlParameters = (convertDataTypes = true) => {
   allow.setFailureBehavior(allow.failureBehavior.WARN);
   allow.aBoolean(convertDataTypes);
   let urlParams = new URLSearchParams(window.location.search);
   let processedUrlParams = {};
   for (let entry of urlParams.entries()) {
      const key = entry[0];
      let value = entry[1];
      if (convertDataTypes) {
         if (value.toLowerCase() === 'true')
            value = true;
         else if (value.toLowerCase() === 'false')
            value = false;
         else if (value.toLowerCase() === 'null')
            value = null;
         else if (!isNaN(parseFloat(value)))
            value = parseFloat(value);
      }
      processedUrlParams[key] = value;
   }
   return processedUrlParams;
};
