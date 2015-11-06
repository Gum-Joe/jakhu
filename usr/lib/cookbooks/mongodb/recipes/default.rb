#
# Cookbook Name:: mongodb
# Recipe:: default
#
# The MIT License (MIT)
#
# Copyright (c) 2015 Gum-Joe
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.


# Add key
include_recipe 'mongodb::repo'

# Install
apt_package ['mongodb-org']  do
  action :upgrade
end

# Start
service 'mongodb' do
  action[:start]
end

# source ENV
bash 'env' do
  cwd ::File.dirname(src_filepath)
  code <<-EOH
    source /vagrant/vars
    EOH
  not_if { ::File.exists?(extract_path) }
end

# Set user + password
bash 'user' do
  cwd ::File.dirname(src_filepath)
  code <<-EOH
    mongo --eval 'use webos'
    mongo web-os --eval 'db.addUser(#{ENV['MONGO_USER']}, #{ENV['MONGO_PASS']});'
    EOH
  not_if { ::File.exists?(extract_path) }
end

# Done!
