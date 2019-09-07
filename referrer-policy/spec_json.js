var SPEC_JSON = {"subresource_schema": {"supported_delivery_type": {"img-tag": ["attr"], "sharedworker-classic": [], "xhr": [], "a-tag": ["attr", "rel-noref"], "area-tag": ["attr"], "iframe-tag": ["attr"], "worker-module": [], "script-tag": ["attr"], "fetch": [], "worker-classic": []}}, "excluded_tests": [{"delivery_value": "*", "origin": ["cross-http", "cross-https"], "delivery_type": "*", "name": "cross-origin-workers", "expectation": "*", "expansion": "*", "redirection": "*", "source_context_list": "*", "source_scheme": "*", "subresource": ["worker-classic", "worker-module", "sharedworker-classic"]}, {"delivery_value": "*", "origin": ["same-https", "cross-https"], "delivery_type": "*", "name": "upgraded-protocol-workers", "expectation": "*", "expansion": "*", "redirection": "*", "source_context_list": "*", "source_scheme": "http", "subresource": ["worker-classic", "worker-module", "sharedworker-classic"]}, {"delivery_value": "*", "origin": ["same-http", "cross-http"], "delivery_type": "*", "name": "mixed-content-insecure-subresources", "expectation": "*", "expansion": "*", "redirection": "*", "source_context_list": "*", "source_scheme": "https", "subresource": "*"}, {"delivery_value": "*", "origin": "*", "delivery_type": "*", "name": "area-tag", "expectation": "*", "expansion": "*", "redirection": "*", "source_context_list": "*", "source_scheme": "*", "subresource": "area-tag"}, {"delivery_value": "*", "origin": "*", "delivery_type": "*", "name": "worker-requests-with-swap-origin-redirect", "expectation": "*", "expansion": "*", "redirection": "swap-origin", "source_context_list": "*", "source_scheme": "*", "subresource": ["worker-classic", "worker-module", "sharedworker-classic"]}, {"delivery_value": "*", "origin": "*", "delivery_type": "*", "name": "overhead-for-redirection", "expectation": "*", "expansion": "*", "redirection": ["keep-origin", "swap-origin"], "source_context_list": "*", "source_scheme": "*", "subresource": ["a-tag", "area-tag"]}, {"delivery_value": "*", "origin": "*", "delivery_type": "*", "name": "source-https-unsupported-by-web-platform-tests-runners", "expectation": "*", "expansion": "*", "redirection": "*", "source_context_list": "*", "source_scheme": "https", "subresource": "*"}, {"delivery_value": [null, "no-referrer-when-downgrade", "same-origin", "origin", "origin-when-cross-origin", "strict-origin", "strict-origin-when-cross-origin", "unsafe-url"], "origin": "*", "delivery_type": "rel-noref", "name": "<link rel=noreferrer>'s delivery_value should be no-referrer", "expectation": "*", "expansion": "*", "redirection": "*", "source_context_list": "*", "source_scheme": "*", "subresource": "*"}], "specification": [{"test_expansion": [{"delivery_value": null, "origin": ["same-http", "cross-http"], "delivery_type": "*", "name": "insecure-protocol", "expectation": "stripped-referrer", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "http", "subresource": "*"}, {"delivery_value": null, "origin": ["same-https", "cross-https"], "delivery_type": "*", "name": "upgrade-protocol", "expectation": "stripped-referrer", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "http", "subresource": "*"}, {"delivery_value": null, "origin": ["same-http", "cross-http"], "delivery_type": "*", "name": "downgrade-protocol", "expectation": "omitted", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "https", "subresource": "*"}, {"delivery_value": null, "origin": ["same-https", "cross-https"], "delivery_type": "*", "name": "secure-protocol", "expectation": "stripped-referrer", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "https", "subresource": "*"}], "description": "Check that referrer URL follows no-referrer-when-downgrade policy when no explicit Referrer Policy is set.", "specification_url": "https://w3c.github.io/webappsec-referrer-policy/#referrer-policies", "name": "unset-referrer-policy", "title": "Referrer Policy is not explicitly defined"}, {"test_expansion": [{"delivery_value": "no-referrer", "origin": "*", "delivery_type": "*", "name": "generic", "expectation": "omitted", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "*", "subresource": "*"}], "description": "Check that sub-resource never gets the referrer URL.", "specification_url": "https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-no-referrer", "name": "no-referrer", "title": "Referrer Policy is set to 'no-referrer'"}, {"test_expansion": [{"delivery_value": "no-referrer-when-downgrade", "origin": ["same-http", "cross-http"], "delivery_type": "*", "name": "insecure-protocol", "expectation": "stripped-referrer", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "http", "subresource": "*"}, {"delivery_value": "no-referrer-when-downgrade", "origin": ["same-https", "cross-https"], "delivery_type": "*", "name": "upgrade-protocol", "expectation": "stripped-referrer", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "http", "subresource": "*"}, {"delivery_value": "no-referrer-when-downgrade", "origin": ["same-http", "cross-http"], "delivery_type": "*", "name": "downgrade-protocol", "expectation": "omitted", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "https", "subresource": "*"}, {"delivery_value": "no-referrer-when-downgrade", "origin": ["same-https", "cross-https"], "delivery_type": "*", "name": "secure-protocol", "expectation": "stripped-referrer", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "https", "subresource": "*"}], "description": "Check that non a priori insecure subresource gets the full Referrer URL. A priori insecure subresource gets no referrer information.", "specification_url": "https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-no-referrer-when-downgrade", "name": "no-referrer-when-downgrade", "title": "Referrer Policy is set to 'no-referrer-when-downgrade'"}, {"test_expansion": [{"delivery_value": "origin", "origin": "*", "delivery_type": "*", "name": "generic", "expectation": "origin", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "*", "subresource": "*"}], "description": "Check that all subresources in all casses get only the origin portion of the referrer URL.", "specification_url": "https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-origin", "name": "origin", "title": "Referrer Policy is set to 'origin'"}, {"test_expansion": [{"delivery_value": "same-origin", "origin": "same-http", "delivery_type": "*", "name": "same-origin-insecure", "expectation": "stripped-referrer", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "http", "subresource": "*"}, {"delivery_value": "same-origin", "origin": "same-https", "delivery_type": "*", "name": "same-origin-secure-default", "expectation": "stripped-referrer", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "https", "subresource": "*"}, {"delivery_value": "same-origin", "origin": ["same-http", "same-https"], "delivery_type": "*", "name": "same-origin-insecure", "expectation": "omitted", "expansion": "override", "redirection": "swap-origin", "source_context_list": "*", "source_scheme": "*", "subresource": "*"}, {"delivery_value": "same-origin", "origin": ["cross-http", "cross-https"], "delivery_type": "*", "name": "cross-origin", "expectation": "omitted", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "*", "subresource": "*"}], "description": "Check that cross-origin subresources get no referrer information and same-origin get the stripped referrer URL.", "specification_url": "https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-same-origin", "name": "same-origin", "title": "Referrer Policy is set to 'same-origin'"}, {"test_expansion": [{"delivery_value": "origin-when-cross-origin", "origin": "same-http", "delivery_type": "*", "name": "same-origin-insecure", "expectation": "stripped-referrer", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "http", "subresource": "*"}, {"delivery_value": "origin-when-cross-origin", "origin": "same-https", "delivery_type": "*", "name": "same-origin-secure-default", "expectation": "stripped-referrer", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "https", "subresource": "*"}, {"delivery_value": "origin-when-cross-origin", "origin": "same-https", "delivery_type": "*", "name": "same-origin-upgrade", "expectation": "origin", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "http", "subresource": "*"}, {"delivery_value": "origin-when-cross-origin", "origin": "same-http", "delivery_type": "*", "name": "same-origin-downgrade", "expectation": "origin", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "https", "subresource": "*"}, {"delivery_value": "origin-when-cross-origin", "origin": ["same-http", "same-https"], "delivery_type": "*", "name": "same-origin-insecure", "expectation": "origin", "expansion": "override", "redirection": "swap-origin", "source_context_list": "*", "source_scheme": "*", "subresource": "*"}, {"delivery_value": "origin-when-cross-origin", "origin": ["cross-http", "cross-https"], "delivery_type": "*", "name": "cross-origin", "expectation": "origin", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "*", "subresource": "*"}], "description": "Check that cross-origin subresources get the origin portion of the referrer URL and same-origin get the stripped referrer URL.", "specification_url": "https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-origin-when-cross-origin", "name": "origin-when-cross-origin", "title": "Referrer Policy is set to 'origin-when-cross-origin'"}, {"test_expansion": [{"delivery_value": "strict-origin", "origin": ["same-http", "cross-http"], "delivery_type": "*", "name": "insecure-protocol", "expectation": "origin", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "http", "subresource": "*"}, {"delivery_value": "strict-origin", "origin": ["same-https", "cross-https"], "delivery_type": "*", "name": "upgrade-protocol", "expectation": "origin", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "http", "subresource": "*"}, {"delivery_value": "strict-origin", "origin": ["same-http", "cross-http"], "delivery_type": "*", "name": "downgrade-protocol", "expectation": "omitted", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "https", "subresource": "*"}, {"delivery_value": "strict-origin", "origin": ["same-https", "cross-https"], "delivery_type": "*", "name": "secure-protocol", "expectation": "origin", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "https", "subresource": "*"}], "description": "Check that non a priori insecure subresource gets only the origin portion of the referrer URL. A priori insecure subresource gets no referrer information.", "specification_url": "https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-strict-origin", "name": "strict-origin", "title": "Referrer Policy is set to 'strict-origin'"}, {"test_expansion": [{"delivery_value": "strict-origin-when-cross-origin", "origin": "same-http", "delivery_type": "*", "name": "same-insecure", "expectation": "stripped-referrer", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "http", "subresource": "*"}, {"delivery_value": "strict-origin-when-cross-origin", "origin": "same-http", "delivery_type": "*", "name": "same-insecure", "expectation": "origin", "expansion": "override", "redirection": "swap-origin", "source_context_list": "*", "source_scheme": "http", "subresource": "*"}, {"delivery_value": "strict-origin-when-cross-origin", "origin": "cross-http", "delivery_type": "*", "name": "cross-insecure", "expectation": "origin", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "http", "subresource": "*"}, {"delivery_value": "strict-origin-when-cross-origin", "origin": ["same-https", "cross-https"], "delivery_type": "*", "name": "upgrade-protocol", "expectation": "origin", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "http", "subresource": "*"}, {"delivery_value": "strict-origin-when-cross-origin", "origin": ["same-http", "cross-http"], "delivery_type": "*", "name": "downgrade-protocol", "expectation": "omitted", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "https", "subresource": "*"}, {"delivery_value": "strict-origin-when-cross-origin", "origin": "same-https", "delivery_type": "*", "name": "same-secure", "expectation": "stripped-referrer", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "https", "subresource": "*"}, {"delivery_value": "strict-origin-when-cross-origin", "origin": "same-https", "delivery_type": "*", "name": "same-secure", "expectation": "origin", "expansion": "override", "redirection": "swap-origin", "source_context_list": "*", "source_scheme": "https", "subresource": "*"}, {"delivery_value": "strict-origin-when-cross-origin", "origin": "cross-https", "delivery_type": "*", "name": "cross-secure", "expectation": "origin", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "https", "subresource": "*"}], "description": "Check that a priori insecure subresource gets no referrer information. Otherwise, cross-origin subresources get the origin portion of the referrer URL and same-origin get the stripped referrer URL.", "specification_url": "https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-strict-origin-when-cross-origin", "name": "strict-origin-when-cross-origin", "title": "Referrer Policy is set to 'strict-origin-when-cross-origin'"}, {"test_expansion": [{"delivery_value": "unsafe-url", "origin": "*", "delivery_type": "*", "name": "generic", "expectation": "stripped-referrer", "expansion": "default", "redirection": "*", "source_context_list": "*", "source_scheme": "*", "subresource": "*"}], "description": "Check that all sub-resources get the stripped referrer URL.", "specification_url": "https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-unsafe-url", "name": "unsafe-url", "title": "Referrer Policy is set to 'unsafe-url'"}], "test_expansion_schema": {"delivery_value": [null, "no-referrer", "no-referrer-when-downgrade", "same-origin", "origin", "origin-when-cross-origin", "strict-origin", "strict-origin-when-cross-origin", "unsafe-url"], "origin": ["same-http", "same-https", "cross-http", "cross-https"], "delivery_type": ["attr", "rel-noref", "http-rp", "meta"], "subresource": ["iframe-tag", "img-tag", "script-tag", "a-tag", "area-tag", "xhr", "worker-classic", "worker-module", "sharedworker-classic", "fetch"], "expectation": ["omitted", "origin", "stripped-referrer"], "expansion": ["default", "override"], "redirection": ["no-redirect", "keep-origin", "swap-origin"], "source_context_list": ["top", "req", "srcdoc-inherit", "srcdoc", "iframe", "worker-classic", "worker-classic-data", "worker-module", "worker-module-data"], "source_scheme": ["http", "https"]}, "source_context_list_schema": {"srcdoc-inherit": {"subresourcePolicyDeliveries": [], "description": "srcdoc iframe should inherit parent Document's policy", "sourceContextList": [{"sourceContextType": "top", "policyDeliveries": ["policy"]}, {"sourceContextType": "srcdoc"}]}, "worker-module": {"subresourcePolicyDeliveries": [], "sourceContextList": [{"sourceContextType": "top", "policyDeliveries": ["anotherPolicy"]}, {"sourceContextType": "worker-module", "policyDeliveries": ["policy"]}]}, "worker-module-data": {"subresourcePolicyDeliveries": [], "sourceContextList": [{"sourceContextType": "top", "policyDeliveries": ["anotherPolicy"]}, {"sourceContextType": "worker-module-data", "policyDeliveries": ["policy"]}]}, "worker-classic-data": {"subresourcePolicyDeliveries": [], "sourceContextList": [{"sourceContextType": "top", "policyDeliveries": ["anotherPolicy"]}, {"sourceContextType": "worker-classic-data", "policyDeliveries": ["policy"]}]}, "top": {"subresourcePolicyDeliveries": [], "description": "Policy set by the top-level Document", "sourceContextList": [{"sourceContextType": "top", "policyDeliveries": ["policy"]}]}, "req": {"subresourcePolicyDeliveries": ["nonNullPolicy"], "description": "Subresource request's policy should override Document's policy", "sourceContextList": [{"sourceContextType": "top", "policyDeliveries": ["anotherPolicy"]}]}, "worker-classic": {"subresourcePolicyDeliveries": [], "sourceContextList": [{"sourceContextType": "top", "policyDeliveries": ["anotherPolicy"]}, {"sourceContextType": "worker-classic", "policyDeliveries": ["policy"]}]}, "iframe": {"subresourcePolicyDeliveries": [], "description": "external iframe's policy should override parent Document's policy", "sourceContextList": [{"sourceContextType": "top", "policyDeliveries": ["anotherPolicy"]}, {"sourceContextType": "iframe", "policyDeliveries": ["policy"]}]}, "srcdoc": {"subresourcePolicyDeliveries": [], "description": "srcdoc iframe's policy should override parent Document's policy", "sourceContextList": [{"sourceContextType": "top", "policyDeliveries": ["anotherPolicy"]}, {"sourceContextType": "srcdoc", "policyDeliveries": ["nonNullPolicy"]}]}}, "delivery_key": "referrerPolicy", "source_context_schema": {"supported_delivery_type": {"iframe": ["meta", "http-rp"], "worker-module-data": [], "worker-classic-data": [], "top": ["meta", "http-rp"], "worker-classic": ["http-rp"], "worker-module": ["http-rp"], "srcdoc": ["meta"]}, "supported_subresource": {"iframe": "*", "worker-module-data": ["xhr", "fetch"], "worker-classic-data": ["xhr", "fetch"], "top": "*", "worker-classic": ["xhr", "fetch", "worker-classic", "worker-module"], "worker-module": ["xhr", "fetch", "worker-classic", "worker-module"], "srcdoc": "*"}}};