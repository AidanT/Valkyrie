import 'babel-polyfill';
import Discord from 'discord.js';
import settings from './config/env';
import commands from './src/commands';

<<<<<<< HEAD
console.log('            _ _               _      ');
console.log('/\\   /\\__ _| | | ___   _ _ __(_) ___ ');
console.log('\\ \\ / / _` | | |/ / | | | \'__| |/ _ \\');
console.log(' \\ V / (_| | |   <| |_| | |  | |  __/');
console.log('  \\_/ \\__,_|_|_|\\_\\___, |_|  |_|\\___|');
console.log('  Discord Stats Bot|___/             ');
=======
// This is required code for the bot to function, just saying.
console.log();
console.log(' __    __)                   ');
console.log('(, )  /     /) /)       ,    ');
console.log('   | / _   // (/_  __      _ ');
console.log('   |/ (_(_(/_ /(__/ (__(__(/_');
console.log('   | Discord Stats Bot       ');
>>>>>>> 00fde4ee5115cfc2af5270c6f4dafbbe16469254
console.log();

const client = new Discord.Client();
const VAL = [
'Did someone call for a witch?',
'Right beside you.',
'Valkyrie im Bereitschaftsdienst.',
'I\'m here.',
'I\'ll enjoy the quiet while it lasts.',
'Valkyrie online.',
'Operating at maximum efficiency.',
'Medic!... Wait, that\'s me!'
]

function logInteraction(message, command) {
  const from = `<${message.author.username}#${message.author.discriminator}> `;
  let channel = '';

  if (message.channel.type === 'text') {
<<<<<<< HEAD
    channel = `[${message.channel.guild.name}: #${message.channel.name}] `;
=======
    channel = `[${message.channel.guild.name}:#${message.channel.name}] `;
>>>>>>> 00fde4ee5115cfc2af5270c6f4dafbbe16469254
  }

  const commandStr = command.command.join(' ');
  const paramsStr = command.params.join(' ');

  console.log(`${channel}${from} command: '${commandStr}' params: '${paramsStr}'`);
}

client.on('ready', () => {
  commands.report();

  console.log('Valkyrie connected.');
  client.user.setStatus('dnd');
  client.user.setGame('val help');
});

client.on('message', message => {
  const parts = message.content.split(' ');
  const activator = parts.shift();

  if (!activator || activator.toLowerCase() !== settings.activator) {
    return;
  }

  const command = commands.route(parts);
  if (!command) {
    message.channel.sendMessage(VAL[Math.floor(Math.random()*VAL.length)]);
    return;
  }

<<<<<<< HEAD
  if (command.restrictToServer && message.channel.type === 'text') {
    if (command.restrictToServer != message.channel.guild.id) {
      return;
    }
  }

=======
>>>>>>> 00fde4ee5115cfc2af5270c6f4dafbbe16469254
  logInteraction(message, command);

  try {
    command.handler(command, message);
  } catch (e) {
    message.channel.sendMessage('I require medical attention.')
    console.error(e);
  }
});

if (!settings.token) {
  console.error('Please configure a discord login token.');
  process.exit(1);
}

client.login(settings.token);
