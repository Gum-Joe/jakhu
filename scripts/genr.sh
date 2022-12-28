#!/bin/bash
echo '#!/bin/bash' >> etc/resources/linux/$1.sh
echo '#!/bin/bash' >> etc/resources/windows/$1.sh
echo '#!/bin/bash' >> etc/resources/osx/$1.sh
# chmod
chmod +x etc/resources/linux/$1.sh
chmod +x etc/resources/windows/$1.sh
chmod +x etc/resources/osx/$1.sh
# 700
chmod 700 etc/resources/linux/$1.sh
chmod 700 etc/resources/windows/$1.sh
chmod 700 etc/resources/osx/$1.sh
# 777
chmod 777 etc/resources/linux/$1.sh
chmod 777 etc/resources/windows/$1.sh
chmod 777 etc/resources/osx/$1.sh
echo Done
