<h1 class=''><a class='tc-tiddlylink tc-tiddlylink-resolves' href='#HelloThere'>HelloThere</a></h1><p>This is searchNreplace plugin for TiddlyWiki.
It provides an additional controls bar on the default tiddler&#39;s editor. Currently it only allows you to search and replace text.</p><h2 class=''>Basic usage</h2><ol><li>Put what you want to replace in the first field. This is the <strong>search string</strong>.</li><li>Put what you want to put in place of the search string in the second field.</li><li>Select if you want to do want replace all occurrences by checking the global checkbox.</li><li>Click the replace button.</li></ol><h2 class=''>Using regular expressions</h2><p>Since version 1.2 you are able to use reuglar expressions. To do so just check the <code>Use regex</code> checkbox. This allows you to powerfull search and replacements.</p><p>You can also use references on your replace string. Use <code>$1</code>...<code>$N</code> notation to reference capturing groups.</p><p>For example, if you have a list like this</p><pre><code>A 10
B 02
C 20
D 35</code></pre><p>and you want to invert the values, use the following parameters:
* <strong>search</strong>: <code>(\w) (\d+)</code>
* <strong>replace</strong>: <code>$2 $1</code>
This will put what you have captured in the second <strong>capturing group</strong> first and the first one in the second place.</p><p>The regular expressions should be valid javascript regular expressions.</p><h2 class=''>Requirements</h2><p>It <strong>requires</strong> at least TW5 core to 5.1.4 or newer.
</p>