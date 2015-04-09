#!/bin/bash

mv *wiki/output/license.md license.md
mv *wiki/output/readme.md readme.md
mv *wiki/output/index.html index.html
git add index.html
git add readme.md
git add license.md
d=$(date "+%Y-%m-%d %H:%M")
git commit -m "Build latest version $d"
