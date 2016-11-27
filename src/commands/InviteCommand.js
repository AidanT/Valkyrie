import settings from '../../config/env';
import { marginColour } from '../utils/colour';

export default {
  command: ['invite'],

  handler(context, message) {
    let embed = {
      color: marginColour('default'),
      title: `Support has arrived.`,
      url: `https://discordapp.com/oauth2/authorize?client_id=${settings.clientId}&scope=bot&permissions=67128384`,
      footer: { text: settings.footer }
    }
    message.channel.sendMessage('', { embed });
  }
};
