FROM jakhu/nodejs:latest
RUN sudo chown -R jakhu /runner
COPY tub_config.yml ~/.jakhu/tub_config.yml
RUN mkdir ~/.jakhu
ADD tub_config.yml /home/jakhu/.jakhu/tub_config.yml
RUN sudo git clone https://github.com/Gum-Joe/jakhu-runner ~/.jakhu/runner
VOLUME ../.. /app
CMD bash -c "sudo chmod 777 ~/.jakhu/runner && source /home/jakhu/.rvm/scripts/rvm && rvm use ruby-head && ruby ~/.jakhu/runner/bin/jakhurun start"
