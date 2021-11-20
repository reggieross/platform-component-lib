#!/bin/bash
set -euf -o pipefail

aws codeartifact login --tool npm --repository ui-components --domain "nglic-dev" --domain-owner "$AWS_ACCOUNT_ID_DEV"
