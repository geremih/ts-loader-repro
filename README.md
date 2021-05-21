# ts-loader-repro

## Repro steps
- Install dependencies by running `yarn`
- Start webpack watcher by running `yarn run watch`
- Rename `a` in `src/index.ts` to `b`. 
  - Webpack watcher will show an error saying that `src/dir/file.ts` fails compilation.
- Fix import in `src/dir/file.ts`.
- Edit `src/index.ts` to trigger recompilation, the error will show stale contents of `src/dir/file.ts` 
