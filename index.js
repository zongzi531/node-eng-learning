const chalk = require('chalk')
const ora = require('ora')
const signale = require('signale')
const dotenv = require('dotenv')

console.log(chalk.yellow('假装准备加载'))

const spinner = ora('假装加载中……').start()

setTimeout(() => {
  spinner.stop()
  console.log(chalk.bgRed('假装加载完毕'))
  console.log(chalk.bgWhite(JSON.stringify(dotenv.config())))
  
}, 3000)

signale.fatal(new Error('报错咯!'))
