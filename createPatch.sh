#!/usr/bin/bash

# Patches dir
mkdir patches
mkdir patches/web-os
# Create web-os patches
echo 'Generating patches for web-os'
echo
COM=`git rev-list HEAD --count`
git format-patch -$COM -o ../patches/web-os
