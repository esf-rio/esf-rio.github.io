#!/bin/bash

mv docs docs.bak
cd website
npm run build
mv dist ../docs