/**
 * Cisco PSIRT openVuln API
 * The Cisco Product Security Incident Response Team (PSIRT) openVuln API is a RESTful API that allows customers to obtain Cisco Security Vulnerability information in different machine-consumable formats. APIs are important for customers because they allow their technical staff and programmers to build tools that help them do their job more effectively (in this case, to keep up with security vulnerability information). For more information about the Cisco PSIRT openVuln API visit https://developer.cisco.com/site/PSIRT/discover/overview  For detail steps on how to use the API go to:https://developer.cisco.com/site/PSIRT/get-started/getting-started.gsp  This is a beta release of a swagger YAML for the Cisco PSIRT openVuln API.  To access the API sign in with your Cisco CCO account at http://apiconsole.cisco.com and register an application to recieve a client_id and a client_secret  You can then get your token using curl or any other method you prefer.  'curl -s -k -H \"Content-Type: application/x-www-form-urlencoded\" -X POST -d \"client_id=<your_client_id>\" -d \"client_secret=<your_client_secret>\" -d \"grant_type=client_credentials\" https://cloudsso.cisco.com/as/token.oauth2'  You will receive an access token as demonstrated in the following example:  '{\"access_token\":\"I7omWtBDAieSiUX3shOxNJfuy4J6\",\"token_type\":\"Bearer\",\"expires_in\":3599}'  In Swagger, click on Change Authentication  enter the text \"I7omWtBDAieSiUX3shOxNJfuy4J6\" (which is the token you received)  then click on \"Try this operation\" 
 *
 * OpenAPI spec version: 0.0.3
 * Contact: os@cisco.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CiscoPsirtOpenVulnApi) {
      root.CiscoPsirtOpenVulnApi = {};
    }
    root.CiscoPsirtOpenVulnApi.DefaultApi = factory(root.CiscoPsirtOpenVulnApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 0.0.3
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the securityAdvisoriesCvrfAdvisoryAdvisoryIdGet operation.
     * @callback module:api/DefaultApi~securityAdvisoriesCvrfAdvisoryAdvisoryIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to obtain an advisory in CVRF format for a given advisory ID &#x60;advisory_id&#x60; (i.e., cisco-sa-20150819-pcp) 
     * @param {String} advisoryId advisory ID
     * @param {module:api/DefaultApi~securityAdvisoriesCvrfAdvisoryAdvisoryIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.securityAdvisoriesCvrfAdvisoryAdvisoryIdGet = function(advisoryId, callback) {
      var postBody = null;

      // verify the required parameter 'advisoryId' is set
      if (advisoryId == undefined || advisoryId == null) {
        throw new Error("Missing the required parameter 'advisoryId' when calling securityAdvisoriesCvrfAdvisoryAdvisoryIdGet");
      }


      var pathParams = {
        'advisory_id': advisoryId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['psirt_openvuln_api_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/security/advisories/cvrf/advisory/{advisory_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the securityAdvisoriesCvrfAllGet operation.
     * @callback module:api/DefaultApi~securityAdvisoriesCvrfAllGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to obtain all advisories in Common Vulnerability Reporting Format (CVRF). For more information about CVRF go to https://communities.cisco.com/docs/DOC-63156 . By default the output is in JSON. To obtain the output in XML use the .xml extension. For example, /advisories/cvrf/all.xml 
     * @param {module:api/DefaultApi~securityAdvisoriesCvrfAllGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.securityAdvisoriesCvrfAllGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['psirt_openvuln_api_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/security/advisories/cvrf/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the securityAdvisoriesCvrfCveCveIdGet operation.
     * @callback module:api/DefaultApi~securityAdvisoriesCvrfCveCveIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to obtain an advisory in CVRF format for a given Common Vulnerability Enumerator (CVE). The &#x60;cve_id&#x60; format is CVE-YYYY-NNNN. For more information about CVE visit http://cve.mitre.org/ 
     * @param {String} cveId CVE Identifier (i.e., CVE-YYYY-NNNN)
     * @param {module:api/DefaultApi~securityAdvisoriesCvrfCveCveIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.securityAdvisoriesCvrfCveCveIdGet = function(cveId, callback) {
      var postBody = null;

      // verify the required parameter 'cveId' is set
      if (cveId == undefined || cveId == null) {
        throw new Error("Missing the required parameter 'cveId' when calling securityAdvisoriesCvrfCveCveIdGet");
      }


      var pathParams = {
        'cve_id': cveId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['psirt_openvuln_api_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/security/advisories/cvrf/cve/{cve_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the securityAdvisoriesCvrfLatestNumberGet operation.
     * @callback module:api/DefaultApi~securityAdvisoriesCvrfLatestNumberGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to obtain all the latest security advisories in CVRF format given an absolute number. For instance, the latest 10 or latest 5. 
     * @param {Number} _number An absolute number to obtain the latest security advisories.
     * @param {module:api/DefaultApi~securityAdvisoriesCvrfLatestNumberGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.securityAdvisoriesCvrfLatestNumberGet = function(_number, callback) {
      var postBody = null;

      // verify the required parameter '_number' is set
      if (_number == undefined || _number == null) {
        throw new Error("Missing the required parameter '_number' when calling securityAdvisoriesCvrfLatestNumberGet");
      }


      var pathParams = {
        'number': _number
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['psirt_openvuln_api_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/security/advisories/cvrf/latest/{number}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the securityAdvisoriesCvrfProductGet operation.
     * @callback module:api/DefaultApi~securityAdvisoriesCvrfProductGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to obtain all the advisories that affects the given product name. 
     * @param {String} product An product name to obtain security advisories that matches given product name.
     * @param {module:api/DefaultApi~securityAdvisoriesCvrfProductGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.securityAdvisoriesCvrfProductGet = function(product, callback) {
      var postBody = null;

      // verify the required parameter 'product' is set
      if (product == undefined || product == null) {
        throw new Error("Missing the required parameter 'product' when calling securityAdvisoriesCvrfProductGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'product': product
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['psirt_openvuln_api_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/security/advisories/cvrf/product', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the securityAdvisoriesCvrfSeveritySeverityFirstpublishedGet operation.
     * @callback module:api/DefaultApi~securityAdvisoriesCvrfSeveritySeverityFirstpublishedGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to obtain all security advisories for a given security impact rating (critical, high, medium, or low) in CVRF format and additionally filter based of firstpublished start date and enddate 
     * @param {module:model/String} severity Used to obtain all advisories that have a security impact rating of critical
     * @param {Date} startDate 
     * @param {Date} endDate 
     * @param {module:api/DefaultApi~securityAdvisoriesCvrfSeveritySeverityFirstpublishedGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.securityAdvisoriesCvrfSeveritySeverityFirstpublishedGet = function(severity, startDate, endDate, callback) {
      var postBody = null;

      // verify the required parameter 'severity' is set
      if (severity == undefined || severity == null) {
        throw new Error("Missing the required parameter 'severity' when calling securityAdvisoriesCvrfSeveritySeverityFirstpublishedGet");
      }

      // verify the required parameter 'startDate' is set
      if (startDate == undefined || startDate == null) {
        throw new Error("Missing the required parameter 'startDate' when calling securityAdvisoriesCvrfSeveritySeverityFirstpublishedGet");
      }

      // verify the required parameter 'endDate' is set
      if (endDate == undefined || endDate == null) {
        throw new Error("Missing the required parameter 'endDate' when calling securityAdvisoriesCvrfSeveritySeverityFirstpublishedGet");
      }


      var pathParams = {
        'severity': severity
      };
      var queryParams = {
        'startDate': startDate,
        'endDate': endDate
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['psirt_openvuln_api_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/security/advisories/cvrf/severity/{severity}/firstpublished', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the securityAdvisoriesCvrfSeveritySeverityGet operation.
     * @callback module:api/DefaultApi~securityAdvisoriesCvrfSeveritySeverityGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to obtain all security advisories for a given security impact rating (critical, high, medium, or low) in CVRF format. 
     * @param {module:model/String} severity Critical, High, Medium, Low
     * @param {module:api/DefaultApi~securityAdvisoriesCvrfSeveritySeverityGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.securityAdvisoriesCvrfSeveritySeverityGet = function(severity, callback) {
      var postBody = null;

      // verify the required parameter 'severity' is set
      if (severity == undefined || severity == null) {
        throw new Error("Missing the required parameter 'severity' when calling securityAdvisoriesCvrfSeveritySeverityGet");
      }


      var pathParams = {
        'severity': severity
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['psirt_openvuln_api_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/security/advisories/cvrf/severity/{severity}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the securityAdvisoriesCvrfSeveritySeverityLastpublishedGet operation.
     * @callback module:api/DefaultApi~securityAdvisoriesCvrfSeveritySeverityLastpublishedGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to obtain all security advisories for a given security impact rating (critical, high, medium, or low) in CVRF format. 
     * @param {module:model/String} severity Used to obtain all advisories that have a security impact rating of critical
     * @param {Date} startDate 
     * @param {Date} endDate 
     * @param {module:api/DefaultApi~securityAdvisoriesCvrfSeveritySeverityLastpublishedGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.securityAdvisoriesCvrfSeveritySeverityLastpublishedGet = function(severity, startDate, endDate, callback) {
      var postBody = null;

      // verify the required parameter 'severity' is set
      if (severity == undefined || severity == null) {
        throw new Error("Missing the required parameter 'severity' when calling securityAdvisoriesCvrfSeveritySeverityLastpublishedGet");
      }

      // verify the required parameter 'startDate' is set
      if (startDate == undefined || startDate == null) {
        throw new Error("Missing the required parameter 'startDate' when calling securityAdvisoriesCvrfSeveritySeverityLastpublishedGet");
      }

      // verify the required parameter 'endDate' is set
      if (endDate == undefined || endDate == null) {
        throw new Error("Missing the required parameter 'endDate' when calling securityAdvisoriesCvrfSeveritySeverityLastpublishedGet");
      }


      var pathParams = {
        'severity': severity
      };
      var queryParams = {
        'startDate': startDate,
        'endDate': endDate
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['psirt_openvuln_api_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/security/advisories/cvrf/severity/{severity}/lastpublished', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the securityAdvisoriesCvrfYearYearGet operation.
     * @callback module:api/DefaultApi~securityAdvisoriesCvrfYearYearGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to obtain all security advisories that have were orginally published in a specific year &#x60;YYYY&#x60;. 
     * @param {String} year The four digit year.
     * @param {module:api/DefaultApi~securityAdvisoriesCvrfYearYearGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.securityAdvisoriesCvrfYearYearGet = function(year, callback) {
      var postBody = null;

      // verify the required parameter 'year' is set
      if (year == undefined || year == null) {
        throw new Error("Missing the required parameter 'year' when calling securityAdvisoriesCvrfYearYearGet");
      }


      var pathParams = {
        'year': year
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['psirt_openvuln_api_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/security/advisories/cvrf/year/{year}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the securityAdvisoriesIosGet operation.
     * @callback module:api/DefaultApi~securityAdvisoriesIosGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to obtain all advisories that affects the given ios version 
     * @param {String} version IOS version to obtain security advisories
     * @param {module:api/DefaultApi~securityAdvisoriesIosGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.securityAdvisoriesIosGet = function(version, callback) {
      var postBody = null;

      // verify the required parameter 'version' is set
      if (version == undefined || version == null) {
        throw new Error("Missing the required parameter 'version' when calling securityAdvisoriesIosGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'version': version
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['psirt_openvuln_api_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/security/advisories/ios', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the securityAdvisoriesIosxeGet operation.
     * @callback module:api/DefaultApi~securityAdvisoriesIosxeGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to obtain all advisories that affects the given ios version 
     * @param {String} version IOS version to obtain security advisories
     * @param {module:api/DefaultApi~securityAdvisoriesIosxeGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.securityAdvisoriesIosxeGet = function(version, callback) {
      var postBody = null;

      // verify the required parameter 'version' is set
      if (version == undefined || version == null) {
        throw new Error("Missing the required parameter 'version' when calling securityAdvisoriesIosxeGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'version': version
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['psirt_openvuln_api_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/security/advisories/iosxe', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the securityAdvisoriesOvalAdvisoryAdvisoryIdGet operation.
     * @callback module:api/DefaultApi~securityAdvisoriesOvalAdvisoryAdvisoryIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to obtain OVAL definitions for a given advisory ID &#x60;advisory_id&#x60; (i.e., cisco-sa-20150819-pcp) 
     * @param {String} advisoryId advisory ID
     * @param {module:api/DefaultApi~securityAdvisoriesOvalAdvisoryAdvisoryIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.securityAdvisoriesOvalAdvisoryAdvisoryIdGet = function(advisoryId, callback) {
      var postBody = null;

      // verify the required parameter 'advisoryId' is set
      if (advisoryId == undefined || advisoryId == null) {
        throw new Error("Missing the required parameter 'advisoryId' when calling securityAdvisoriesOvalAdvisoryAdvisoryIdGet");
      }


      var pathParams = {
        'advisory_id': advisoryId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['psirt_openvuln_api_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/security/advisories/oval/advisory/{advisory_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the securityAdvisoriesOvalAllGet operation.
     * @callback module:api/DefaultApi~securityAdvisoriesOvalAllGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to obtain all Open Vulnerability and Assessment Language (OVAL) definitions available for Cisco security vulnerabilities. For more information about OVAL go to https://communities.cisco.com/docs/DOC-63158 . By default the output is in JSON. To obtain the output in XML use the .xml extension. For example, /advisories/oval/all.xml 
     * @param {module:api/DefaultApi~securityAdvisoriesOvalAllGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.securityAdvisoriesOvalAllGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['psirt_openvuln_api_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/security/advisories/oval/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the securityAdvisoriesOvalCveCveIdGet operation.
     * @callback module:api/DefaultApi~securityAdvisoriesOvalCveCveIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to obtain OVAL definitions for a given CVE Identifier. The &#x60;cve_id&#x60; format is CVE-YYYY-NNNN. 
     * @param {String} cveId CVE Identifier (i.e., CVE-YYYY-NNNN)
     * @param {module:api/DefaultApi~securityAdvisoriesOvalCveCveIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.securityAdvisoriesOvalCveCveIdGet = function(cveId, callback) {
      var postBody = null;

      // verify the required parameter 'cveId' is set
      if (cveId == undefined || cveId == null) {
        throw new Error("Missing the required parameter 'cveId' when calling securityAdvisoriesOvalCveCveIdGet");
      }


      var pathParams = {
        'cve_id': cveId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['psirt_openvuln_api_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/security/advisories/oval/cve/{cve_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the securityAdvisoriesOvalLatestNumberGet operation.
     * @callback module:api/DefaultApi~securityAdvisoriesOvalLatestNumberGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to obtain all the latest OVAL definitions given an absolute number. For instance, the latest 10 or latest 5. 
     * @param {Number} _number The latest OVAL definitions (absolute number).
     * @param {module:api/DefaultApi~securityAdvisoriesOvalLatestNumberGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.securityAdvisoriesOvalLatestNumberGet = function(_number, callback) {
      var postBody = null;

      // verify the required parameter '_number' is set
      if (_number == undefined || _number == null) {
        throw new Error("Missing the required parameter '_number' when calling securityAdvisoriesOvalLatestNumberGet");
      }


      var pathParams = {
        'number': _number
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['psirt_openvuln_api_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/security/advisories/oval/latest/{number}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the securityAdvisoriesOvalProductGet operation.
     * @callback module:api/DefaultApi~securityAdvisoriesOvalProductGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to obtain all the oval advisories that affects the given product name. 
     * @param {String} product An product name to obtain security advisories that matches given product name.
     * @param {module:api/DefaultApi~securityAdvisoriesOvalProductGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.securityAdvisoriesOvalProductGet = function(product, callback) {
      var postBody = null;

      // verify the required parameter 'product' is set
      if (product == undefined || product == null) {
        throw new Error("Missing the required parameter 'product' when calling securityAdvisoriesOvalProductGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'product': product
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['psirt_openvuln_api_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/security/advisories/oval/product', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the securityAdvisoriesOvalSeveritySeverityFirstpublishedGet operation.
     * @callback module:api/DefaultApi~securityAdvisoriesOvalSeveritySeverityFirstpublishedGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to obtain all security advisories for a given security impact rating (critical, high, medium, or low) in OVAL format. 
     * @param {module:model/String} severity Critical, High, Medium, Low
     * @param {Date} startDate 
     * @param {Date} endDate 
     * @param {module:api/DefaultApi~securityAdvisoriesOvalSeveritySeverityFirstpublishedGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.securityAdvisoriesOvalSeveritySeverityFirstpublishedGet = function(severity, startDate, endDate, callback) {
      var postBody = null;

      // verify the required parameter 'severity' is set
      if (severity == undefined || severity == null) {
        throw new Error("Missing the required parameter 'severity' when calling securityAdvisoriesOvalSeveritySeverityFirstpublishedGet");
      }

      // verify the required parameter 'startDate' is set
      if (startDate == undefined || startDate == null) {
        throw new Error("Missing the required parameter 'startDate' when calling securityAdvisoriesOvalSeveritySeverityFirstpublishedGet");
      }

      // verify the required parameter 'endDate' is set
      if (endDate == undefined || endDate == null) {
        throw new Error("Missing the required parameter 'endDate' when calling securityAdvisoriesOvalSeveritySeverityFirstpublishedGet");
      }


      var pathParams = {
        'severity': severity
      };
      var queryParams = {
        'startDate': startDate,
        'endDate': endDate
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['psirt_openvuln_api_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/security/advisories/oval/severity/{severity}/firstpublished', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the securityAdvisoriesOvalSeveritySeverityGet operation.
     * @callback module:api/DefaultApi~securityAdvisoriesOvalSeveritySeverityGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to obtain all OVAL definitions for a given security impact rating (critical, high, medium, or low). 
     * @param {module:model/String} severity Used to obtain all OVAL definitions for advisories that have a security impact rating of critical
     * @param {module:api/DefaultApi~securityAdvisoriesOvalSeveritySeverityGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.securityAdvisoriesOvalSeveritySeverityGet = function(severity, callback) {
      var postBody = null;

      // verify the required parameter 'severity' is set
      if (severity == undefined || severity == null) {
        throw new Error("Missing the required parameter 'severity' when calling securityAdvisoriesOvalSeveritySeverityGet");
      }


      var pathParams = {
        'severity': severity
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['psirt_openvuln_api_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/security/advisories/oval/severity/{severity}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the securityAdvisoriesOvalSeveritySeverityLastpublishedGet operation.
     * @callback module:api/DefaultApi~securityAdvisoriesOvalSeveritySeverityLastpublishedGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to obtain all security advisories for a given security impact rating (critical, high, medium, or low) in OVAL format. 
     * @param {module:model/String} severity Critical, High, Medium, Low
     * @param {Date} startDate 
     * @param {Date} endDate 
     * @param {module:api/DefaultApi~securityAdvisoriesOvalSeveritySeverityLastpublishedGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.securityAdvisoriesOvalSeveritySeverityLastpublishedGet = function(severity, startDate, endDate, callback) {
      var postBody = null;

      // verify the required parameter 'severity' is set
      if (severity == undefined || severity == null) {
        throw new Error("Missing the required parameter 'severity' when calling securityAdvisoriesOvalSeveritySeverityLastpublishedGet");
      }

      // verify the required parameter 'startDate' is set
      if (startDate == undefined || startDate == null) {
        throw new Error("Missing the required parameter 'startDate' when calling securityAdvisoriesOvalSeveritySeverityLastpublishedGet");
      }

      // verify the required parameter 'endDate' is set
      if (endDate == undefined || endDate == null) {
        throw new Error("Missing the required parameter 'endDate' when calling securityAdvisoriesOvalSeveritySeverityLastpublishedGet");
      }


      var pathParams = {
        'severity': severity
      };
      var queryParams = {
        'startDate': startDate,
        'endDate': endDate
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['psirt_openvuln_api_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/security/advisories/oval/severity/{severity}/lastpublished', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
