FROM ubuntu:latest
# Update database
RUN apt-get update
# Install curl
RUN apt-get install -y curl
# Install ruby for gemfile
RUN apt-get install -y ruby-full
RUN gem install bundle
# Install Node.js and npm
RUN curl --silent --location https://deb.nodesource.com/setup_0.12 | sudo bash -
RUN apt-get install -y nodejs
# Install git
RUN apt-get install -y git-core
# Get source
RUN ls /home
RUN cd /home; mkdir -v -p /home/Projects/Web-OS
RUN cd /home/Projects/Web-OS
RUN ls
RUN git clone https://github.com/Gum-Joe/Web-OS.git /home/Projects/Web-OS -b a1
# Install app dependencies
RUN cd /home/Projects/Web-OS; npm install
# Should be bundle install
RUN cd /home/Projects/Web-OS; gem install sass
# Install mocha and bower and coffee and less and nodemon and grunt
RUN npm install -g bower mocha less coffee-script nodemon grunt-cli
# env
RUN export NODE_ENV="dev"
RUN export WOS_DEV="true"
RUN export WOS_TEST_DIR="../Web-OS-tests"
# Create logs
RUN cd /home/Projects/Web-OS; mkdir logs; echo "-------------Web-OS logs-----------------" >> ./logs/wos.log
# Install bootstrap
bower install
# Compile stuff
RUN cd /home/Projects/Web-OS; grunt
# Expose the port
EXPOSE  8080
# Run
CMD cd /home/Projects/Web-OS; npm run docker-start
