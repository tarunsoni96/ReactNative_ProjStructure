import HelperMethods from "Helpers/Methods";


export const apiFuncPost = function(obj,url,skipToken = false) {
  return new Promise(function(resolve, reject) {
    const formData = JSON.stringify({
      ...obj
    });
   
    HelperMethods.makeNetworkCall(
      url || `/v1/auth/payment_details`,
      formData,
      (resp, isError) => {
        if (!isError) {
          resolve(resp);
        } else {
          reject(isError);
        }
      },
      "POST",
      skipToken
    );
  });
};


export const apiFuncGet = function(url,skipToken = true) {
  return new Promise(function(resolve, reject) {
    HelperMethods.makeNetworkCall(
      url || `/v1/auth/payment_details`,
      {},
      (resp, isError) => {
        if (!isError) {
          resolve(resp);
        } else {
          reject(isError);
        }
      },
      "GET",
      skipToken
    );
  });
};

