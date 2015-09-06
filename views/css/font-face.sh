#!/bin/bash
echo Build font face with name $2 for $1
echo "@font-face {" >> font-faces.css
echo "     font-family: $2;"
echpo "src: url(/css/$1);"
