#!/bin/bash

# Build SamplePlugin for TiddlyWiki5

tiddlywiki \
	./*wiki \
	--verbose \
	--build \
	|| exit 1

# mv *wiki/output/readme.md readme.md
mv *wiki/output/readme.md readme.md
mv *wiki/output/index.html index.html
git add index.html
git add readme.md
d=$(date "+%Y-%m-%d %H:%M")
git commit -m "Build latest version $d"
