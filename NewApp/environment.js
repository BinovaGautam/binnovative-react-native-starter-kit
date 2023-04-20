//environment file with all the environment variables

var _Environments = {
 
  production: {
    env: "production",
    API_URL: "https://perfumecart.ae/api/v1",
    SOCKET_URL: "https://perfumecart.ae",
    COUNTRY_PHONE_CODE: "+91",
    COUNTRY_CODE: "IN",
    CURRENCY_CODE: "INR",
    LOGS: true,
  },
  development: {
    env: "development",
    API_URL: "https://dev.perfumecart.ae/api/v1",
    SOCKET_URL: "https://dev.perfumecart.ae",
    COUNTRY_PHONE_CODE: "+91",
    COUNTRY_CODE: "IN",
    CURRENCY_CODE: "INR",
    LOGS: true,
  }
};

function getEnvironment() {
  var env = "production";  
  return _Environments[env];
}

var Environment = getEnvironment();
module.exports = Environment;