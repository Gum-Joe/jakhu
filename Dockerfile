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
RUN cd /home; mkdir -v -p /home/Projects/Jakhu
RUN cd /home/Projects/Jakhu
RUN ls
RUN git clone https://github.com/Gum-Joe/Jakhu.git /home/Projects/Jakhu -b a1
# Install app dependencies
RUN cd /home/Projects/Jakhu; npm install
# Should be bundle install
RUN cd /home/Projects/Jakhu; gem install sass
# Install mocha and bower and coffee and less and nodemon and grunt
RUN npm install -g bower mocha less coffee-script nodemon grunt-cli
# env
RUN export NODE_ENV="dev"
RUN export WOS_DEV="true"
RUN export WOS_TEST_DIR="../Jakhu-tests"
# Create logs
RUN cd /home/Projects/Jakhu; mkdir logs; echo "-------------Jakhu logs-----------------" >> ./logs/wos.log
# Install bootstrap
RUN cd /home/Projects/Jakhu; bower install --allow-root
# Compile stuff
RUN cd /home/Projects/Jakhu; grunt
# Expose the port
EXPOSE  8080
# Run
CMD cd /home/Projects/Jakhu; npm run docker-start
