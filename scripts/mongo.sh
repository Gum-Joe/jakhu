rm -rf ./db/storage
mkdir -p ./db/storage ./api/storage
packages/mongo/mongo*/bin/mongod --dbpath ./db/storage
