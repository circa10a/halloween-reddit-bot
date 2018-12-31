const moment = require('moment');
const daysUntilHalloween = require('../lib/days-until-halloween');
const randomEmoji = require('../lib/emojis');

/* The second counter is necessary for this cron scheduler
   because if just a minute is specified, the job is run for
   the entire minute. Therefore posting to reddit for 60 seconds
   until the ratelimit is reached.
   This is another option but I prefer cron syntax
   https://github.com/node-schedule/node-schedule#date-based-scheduling
*/

const botMsg = '*I am a bot and this was an autogenerated message*.  \n\n Bot source: http://github.com/circa10a/halloween-reddit-bot';
const jobs = [
  {
    // Monday at 01:01
    schedule: ' 1 37 8 * * *',
    // Prevent immutabiltiy by using direct function call instead of storing in variable
    title: `${randomEmoji()} ${daysUntilHalloween(moment().year())} days until Halloween! ${randomEmoji()}`,
    text: botMsg,
  },
  {
    // Halloween at 01:01
    schedule: '1 * 1 31 09 *',
    title: '🎃 HAPPY HALLOWEEN 🎃',
    text: botMsg,
  },
];

module.exports = jobs;
