FROM jakhu/nodejs:latest
RUN sudo chown -R jakhu /runner
COPY .jakhu/def/tub_config.yml ~/.jakhu/tub_config.yml
VOLUME . /app
RUN mkdir ~/.jakhu
ADD .jakhu/def/tub_config.yml /home/jakhu/.jakhu/tub_config.yml
RUN sudo git clone https://github.com/Gum-Joe/jakhu-runner ~/.jakhu/runner
CMD bash -c "sudo chmod 777 ~/.jakhu/runner && source /home/jakhu/.rvm/scripts/rvm && rvm use ruby-head && ruby ~/.jakhu/runner/bin/jakhurun start"
