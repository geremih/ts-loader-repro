# ts-loader-repro

## Repro steps
- Install dependencies by running `yarn`
- Start webpack watcher by running `yarn run watch`
- Rename `nestedVar1` in `src/index.ts` to `nestedVar2`. 
  - Webpack watcher will show an error saying that `src/dir/nestedFile.ts` fails compilation.
- Fix import in `src/dir/nestedFile.ts`.
- Edit `src/index.ts` to trigger recompilation, the error will show stale contents of `src/dir/nestedFile.ts`
- Doing the same with `src/file.ts` by renaming `var1` will however recompile `src/file.ts` correctly
