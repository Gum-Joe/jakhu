#!/usr/bin/bash

# Patches dir
mkdir patches
mkdir patches/Jakhu
# Create Jakhu patches
echo 'Generating patches for Jakhu'
echo
COM=`git rev-list HEAD --count`
git format-patch -$COM -o ../patches/Jakhu
