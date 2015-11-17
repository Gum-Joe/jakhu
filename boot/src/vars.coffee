# Sets vars for BOSS-OS
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
  @home = 'export BOSS_HOME="'+process.env.PWD+'"\n';
  fs.appendFileSync(file, @home);
  @whome = expor('BOSS_USER_HOME')+shome+'/.boss'+end
  fs.appendFileSync(file, @whome);
  @usr = expor('BOSS_USR_DIR')+pwd+'/usr'+end
  fs.appendFileSync(file, @usr);
  @etc = expor('BOSS_ETC_DIR')+pwd+'/etc'+end
  fs.appendFileSync(file, @etc);
  @in = expor('BOSS_INSTANCES_DIR')+pwd+'/etc'+end
  fs.appendFileSync(file, @in);
  @in = expor('BOSS_PROVIDER')+'vagrant'+end
  fs.appendFileSync(file, @in);
vars();
