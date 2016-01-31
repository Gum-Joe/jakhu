FROM jakhu/nodejs:latest
RUN sudo chown -R jakhu /runner
COPY tub_config.yml ~/.jakhu/tub_config.yml
RUN sudo git clone https://github.com/Gum-Joe/jakhu-runner /runner2
CMD bash -c "sudo chmod 777 /runner2/bin/jakhurun && source /home/jakhu/.rvm/scripts/rvm && rvm use ruby-head && /runner2/bin/jakhurun start"
