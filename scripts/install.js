const cp = require('child_process')
let spawn = cp.spawn, execSync = cp.execSync

let useYarn = false

try {
  useYarn = !!execSync('yarn --version')
} catch (e) {
  // use npm instead :-(
}

const installer = useYarn ? 'yarn' : 'npm'

console.log('\n📦  Installing dependencies via `' + installer + ' install`')

spawn(installer, ['install'], {stdio: 'inherit'})
