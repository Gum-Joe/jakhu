#!/bin/bash
echo "Updating package db.."
echo "+ apt-get update"
sudo apt-get update
if [[ ! "git --version" ]]; then
  #statements
  echo "Installing git.."
  echo "+ apt-get install git-core"
  sudo apt-get install git-core
fi
if [[ ! "curl --version" ]]; then
  #statements
  echo "Installing curl.."
  echo "+ apt-get install curl"
  sudo apt-get install git-core
fi
