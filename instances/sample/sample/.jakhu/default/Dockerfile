FROM jakhu/nodejs:latest
RUN sudo chown -R jakhu /runner
RUN mkdir ~/.jakhu
ADD tub_config.yml /home/jakhu/.jakhu/tub_config.yml
RUN sudo git clone https://github.com/Gum-Joe/jakhu-runner /runner2
CMD bash -c "sudo chmod 777 /runner2/bin/jakhurun && source /home/jakhu/.rvm/scripts/rvm && ls ~/.jakhu && rvm use ruby-head && ruby /runner2/bin/jakhurun start"
