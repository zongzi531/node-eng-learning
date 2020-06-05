const chalk = require('chalk')
const ora = require('ora')

console.log(chalk.yellow('假装准备加载'))

const spinner = ora('假装加载中……').start()

setTimeout(() => {
  spinner.stop()
  console.log(chalk.bgRed('假装加载完毕'))
}, 3000)
