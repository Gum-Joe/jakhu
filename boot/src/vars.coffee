# Sets vars for Web-OS
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
  @home = 'export WEB_HOME="'+process.env.PWD+'"\n';
  fs.appendFileSync(file, @home);
  @whome = expor('WEB_USER_HOME')+shome+'/.web'+end
  fs.appendFileSync(file, @whome);
  @usr = expor('WEB_USR_DIR')+pwd+'/usr'+end
  fs.appendFileSync(file, @usr);
  @etc = expor('WEB_ETC_DIR')+pwd+'/etc'+end
  fs.appendFileSync(file, @etc);
  @in = expor('WEB_INSTANCES_DIR')+pwd+'/etc'+end
  fs.appendFileSync(file, @in);
  @in = expor('WEB_PROVIDER')+'vagrant'+end
  fs.appendFileSync(file, @in);
vars();
