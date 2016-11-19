import CommandRouter from '../CommandRouter';

import HelpCommand from './HelpCommand';
import HelpStatsCommand from './HelpStatsCommand';
import HelpHelpCommand from './HelpHelpCommand';
import InviteCommand from './InviteCommand';
import StatsCommand from './StatsCommand';
import StoreCommand from './StoreCommand';
import HeroStatsCommand from './HeroStatsCommand';

const router = new CommandRouter();
router
  .add({
    command: ['help'],
    handler: HelpCommand,
  })
  .add({
    command: ['help', 'stats'],
    handler: HelpStatsCommand,
  })
  .add({
    command: ['help', 'help'],
    handler: HelpHelpCommand,
  })
  .add({
    command: ['invite'],
    handler: InviteCommand,
  })
  .add({
    command: ['stats'],
    handler: StatsCommand,
  })
  .add({
    command: ['store'],
    handler: StoreCommand,
  })
  .add({
    command: ['hero'],
    handler: HeroStatsCommand,
  })

export default router;
