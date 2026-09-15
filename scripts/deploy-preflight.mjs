// Direct production uploads must not replace newer Git publications.
import {execFileSync} from 'node:child_process';
const git = (...args) => execFileSync('git', args, {encoding:'utf8'}).trim();
try {
  if (git('branch','--show-current') !== 'main') throw new Error('Production requires main.');
  git('fetch','--quiet','origin','main');
  if (git('rev-parse','HEAD') !== git('rev-parse','origin/main')) {
    throw new Error('Production checkout differs from origin/main. Merge/rebase, resolve conflicts, test and push first.');
  }
  if (git('status','--porcelain','--untracked-files=all')) {
    throw new Error('Production checkout has uncommitted files. Commit and push the intended changes before deploying.');
  }
  console.log('deploy-preflight: clean, current origin/main verified');
} catch (error) {
  console.error(`Production deployment stopped: ${error.message}`);
  process.exit(1);
}
