#!/bin/bash
# Obtain these keys from the Telstra Developer Portal
CLIENT_KEY="cbqBzkfoif8gDQz1pqI09lwL4cwcOJbo"
CLIENT_SECRET="Edh0fht5rmlPAz6a"

echo " curl -X POST -H 'Content-Type: application/x-www-form-urlencoded' \ -d 'grant_type=client_credentials&client_id=$CLIENT_KEY&client_secret=$CLIENT_SECRET&scope=NSMS' \ 'https://tapi.telstra.com/v2/oauth/token' "

curl -X POST -H 'Content-Type: application/x-www-form-urlencoded' -d 'grant_type=client_credentials&client_id=$CLIENT_KEY&client_secret=$CLIENT_SECRET&scope=NSMS' 'https://tapi.telstra.com/v2/oauth/token'
