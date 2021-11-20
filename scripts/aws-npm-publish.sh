#!/bin/bash
set -euf -o pipefail

npm run build
npm publish
