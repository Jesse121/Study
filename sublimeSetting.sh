#!/bin/bash
cd ~/AppData/Roaming/'Sublime Text 3'/Packages/User/

echo ==========Auto set start==========

rm ./Preferences.sublime-settings

touch Preferences.sublime-settings

# 我的sublime配置
mySettingFile='{
    "auto_indent": true,
    "auto_match_enabled": true,
    "color_scheme": "Packages/User/SublimeLinter/Monokai (SL).tmTheme",
    "default_line_ending": "unix",
    "fold_buttons": true,
    "font_size": 12,
    "gutter": true,
    "highlight_line": true,
    "highlight_modified_tabs": true,
    "ignored_packages":
    [
        "Vintage"
    ],
    "match_brackets_square": true,
    "match_tags": true,
    "show_definitions": false,
    "show_encoding": true,
    "spell_check": false,
    "tab_size": 4,
    "theme": "Adaptive.sublime-theme",
    "translate_tabs_to_spaces": false,
    "update_check": false,
    "use_tab_stops": true,
    "word_wrap": "true"
}'

echo $mySettingFile > Preferences.sublime-settings

echo ==========Done!==========