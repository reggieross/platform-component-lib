#!/bin/bash
set -euf -o pipefail

aws codeartifact login --tool npm --repository ui-components --domain "$DOMAIN-$STAGE" --domain-owner "$AWS_ACCOUNT_ID" --profile deployment
