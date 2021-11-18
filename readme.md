## Start 
- install packages: `yarn`  
- build files: `yarn build`  
- run develop: `yarn start`  
  
## Info  
- webpack config files: `/Scripts`
- entry points are defined in: `/scripts/config.js`
- createEntries() is just a helper function for easier adoption to my projects later and will be extended
- getPath() is just another helper function (replaces `__THEME_DIR__` and `__PLUGIN_DIR__` with the directories of the config file, options for absolute path and removing the leading dash)

- the output with the css / font is under `site/themes/custom-theme/build`