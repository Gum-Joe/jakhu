FROM jakhu/nodejs:latest
RUN sudo chown -R jakhu /runner
COPY tub_config.yml ~/.jakhu/tub_config.yml
CMD bash -c "sudo chmod 777 /runner/bin/jakhurun && source /home/jakhu/.rvm/scripts/rvm && rvm use ruby-head && /runner/bin/jakhurun start"
