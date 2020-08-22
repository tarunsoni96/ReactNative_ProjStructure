import HelperMethods from "Helpers/Methods";

export const sendOtp = function(mobile) {
  return new Promise(function(resolve, reject) {
    const formData = JSON.stringify({
      mobile,
    });
    HelperMethods.makeNetworkCall(
      `/v1/auth/otp`,
      formData,
      (resp, isError) => {
        if (!isError) {
          resolve(resp);
        } else {
          reject(isError);
        }
      },
      "POST",
      true
    );
  });
};


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



export const createTier = function(title,description,price,startTime,endTime,priceTimePeriod,services,) {
  return new Promise(function(resolve, reject) {
    const formData = JSON.stringify({
      title, startTime, endTime,price, currency:'inr',priceTimer:priceTimePeriod,desc:description,services
      
    });

   
    HelperMethods.makeNetworkCall(
      `/v1/me/create_tier`,
      formData,
      (resp, isError) => {
        if (!isError) {
          resolve(resp);
        } else {
          reject(isError);
        }
      },
      "POST",
      false
    );
  });
};

export const fetchCreators = function(mobile) {
  return new Promise(function(resolve, reject) {
    HelperMethods.makeNetworkCall(
      `/v1/me/get/creators?page=1&offset=5`,
      {},
      (resp, isError) => {
        if (!isError) {
          resolve(resp);
        } else {
          reject(isError);
        }
      },
      "GET",
      true
    );
  });
};

export const searchCreators = function(query) {
  return new Promise(function(resolve, reject) {
    HelperMethods.makeNetworkCall(
      `/v1/me/search/creators?name=${query}`,
      {},
      (resp, isError) => {
        if (!isError) {
          resolve(resp);
        } else {
          reject(isError);
        }
      },
      "GET",
      true
    );
  });
};

export const checkUserStatus = function(mobile, token) {
  return new Promise(function(resolve, reject) {
    HelperMethods.makeNetworkCall(
      `/v1/me/state/onboarding?mobile=${mobile}&token=${token}`,
      {},
      (resp, isError) => {
        if (!isError) {
          resolve(resp);
        } else {
          reject(isError);
        }
      },
      "GET",
      true
    );
  });
};


export const getServices = function() {
  return new Promise(function(resolve, reject) {
    HelperMethods.makeNetworkCall(
      `/v1/me/get_services`,
      {},
      (resp, isError) => {
        if (!isError) {
          resolve(resp);
        } else {
          reject(isError);
        }
      },
      "GET",
      true
    );
  });
};


export const createProfile = function(name, email, userType, image,mobile) {
  return new Promise(function(resolve, reject) {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("userType", userType);
    formData.append("mediaFiles", image);
    formData.append("mobile", mobile);
    HelperMethods.makeNetworkCall(
      `/v1/me/create_profile`,
      formData,
      (resp, isError) => {
        if (!isError) {
          resolve(resp);
        } else {
          reject(isError);
        }
      },
      "POST",
      true,
      true
    );
  });
};

export const otpVerify = function(mobile, otp) {
  return new Promise(function(resolve, reject) {
    const formData = JSON.stringify({
      mobile,
      otp,
    });
    HelperMethods.makeNetworkCall(
      `/v1/auth/otp_verify`,
      formData,
      (resp, isError) => {
        if (!isError) {
          resolve(resp);
        } else {
          reject(isError);
        }
      },
      "POST",
      true
    );
  });
};
