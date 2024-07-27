import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    ignores: [
 "!node_modules/",  // unignore `node_modules/` directory
 "node_modules/*", // ignore its content
 "!node_modules/mylibrary/"  // unignore node_modules/mylibrary` directory
         ]
     }     
];
