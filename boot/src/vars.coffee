# Sets vars for JAKHU-OS
fs = require('fs');
cli = require('cli-color');

vars = () ->
  # body...
  # Set vars
  # Open File
  @expor = (args) ->
    # body...
    return 'export '+args+'="'
  file = 'vars'
  shome = process.env.HOME || process.env.HOMEPATH
  end = '"\n'
  pwd = process.env.PWD
  fs.openSync(file, 'w');
  console.log cli.cyanBright('[info]')+' Setting enviroment varibles...'
  # She bang
  @shebang = "#!/usr/bin/bash\necho Setting enviroment varibles...\n"
  fs.appendFileSync(file, @shebang);
  @home = 'export JAKHU_HOME="'+process.env.PWD+'"\n';
  fs.appendFileSync(file, @home);
  @whome = expor('JAKHU_USER_HOME')+shome+'/.jakhu'+end
  fs.appendFileSync(file, @whome);
  @usr = expor('JAKHU_USR_DIR')+pwd+'/usr'+end
  fs.appendFileSync(file, @usr);
  @etc = expor('JAKHU_ETC_DIR')+pwd+'/etc'+end
  fs.appendFileSync(file, @etc);
  @in = expor('JAKHU_INSTANCES_DIR')+pwd+'/etc'+end
  fs.appendFileSync(file, @in);
  @in = expor('JAKHU_PROVIDER')+'vagrant'+end
  fs.appendFileSync(file, @in);
vars();
