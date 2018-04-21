#!/bin/bash
cd ~/AppData/Roaming/'Sublime Text 3'/Packages


# 以下是自动安装的插件列表

echo ========== install Alignment ==========
# 如果当前插件没安装过，则下载安装
if [ ! -d "./Alignment" ];
then
    git clone https://github.com/kemayo/sublime-text-git.git "Alignment"
fi

echo ========== install AutoFileName ==========
rm -rf "AutoFileName"
git clone https://github.com/kemayo/sublime-text-git.git "AutoFileName"

echo ========== install BracketHighlighter ==========
rm -rf "BracketHighlighter"
git clone https://github.com/kemayo/sublime-text-git.git "BracketHighlighter"

echo ========== install ConvertToUTF8 ==========
rm -rf "ConvertToUTF8"
git clone https://github.com/kemayo/sublime-text-git.git "ConvertToUTF8"

echo ========== install DeleteBlankLines ==========
rm -rf "DeleteBlankLines"
git clone https://github.com/kemayo/sublime-text-git.git "DeleteBlankLines"

echo ========== install DocBlockr ==========
rm -rf "DocBlockr"
git clone https://github.com/kemayo/sublime-text-git.git "DocBlockr"

echo ========== install Emmet ==========
rm -rf "Emmet"
git clone https://github.com/kemayo/sublime-text-git.git "Emmet"

echo ========== install HTML-CSS-JS Prettify ==========
rm -rf "HTML-CSS-JS Prettify"
git clone https://github.com/kemayo/sublime-text-git.git "HTML-CSS-JS Prettify"

echo ========== install LESS ==========
rm -rf "LESS"
git clone https://github.com/kemayo/sublime-text-git.git "LESS"

echo ========== install SideBarEnhancements ==========
rm -rf "SideBarEnhancements"
git clone https://github.com/kemayo/sublime-text-git.git "SideBarEnhancements"

echo ========== install sublime tmpl ==========
rm -rf "sublime tmpl"
git clone https://github.com/kemayo/sublime-text-git.git "sublime tmpl"

echo ========== install Terminal ==========
rm -rf "Terminal"
git clone https://github.com/kemayo/sublime-text-git.git "Terminal"

echo ========== install View In Browser ==========
rm -rf "View In Browser"
git clone https://github.com/kemayo/sublime-text-git.git "View In Browser"

echo ========== install MarkdownEditing ==========
rm -rf "MarkdownEditing"
git clone https://github.com/kemayo/sublime-text-git.git "MarkdownEditing"

echo ========== install OmniMarkupPreviewer ==========
rm -rf "OmniMarkupPreviewer"
git clone https://github.com/kemayo/sublime-text-git.git "OmniMarkupPreviewer"

echo ========== install EditorConfig ==========
rm -rf "EditorConfig"
git clone https://github.com/kemayo/sublime-text-git.git "EditorConfig"

echo ========== install SublimeLinter ==========
rm -rf "SublimeLinter"
git clone https://github.com/kemayo/sublime-text-git.git "SublimeLinter"

echo ========== install SublimeCodeInte ==========
rm -rf "SublimeCodeInte"
git clone https://github.com/kemayo/sublime-text-git.git "SublimeCodeInte"








echo Done!