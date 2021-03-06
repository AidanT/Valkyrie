import settings from '../../config/env'
import moment from 'moment'
import discordJsPackageInfo from 'discord.js/package'

export default {
  command: ['info'],
  helpShort: `Information and statistics about ${settings.name}.`,

  async handler (context, message, client) {
    message.embed()
      .author(settings.name, 'https://github.com/aidant/valkyrie')
      .fields('Uptime', moment.duration(process.uptime(), 'seconds').humanize())
      .fields('Node Version', process.version)
      .fields('Discord library', `${discordJsPackageInfo.name.charAt(0).toUpperCase() + discordJsPackageInfo.name.slice(1)} ${discordJsPackageInfo.version}`)
      .fields('API', '[Infra-Sight](https://github.com/aidant/infra-sight)')
      .fields('Guilds', client.guilds.size)
      .fields('Users', client.users.size)
      .footer()
      .send()
  }
}
