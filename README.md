# userJS

Firefox のアドオンである <a href="https://addons.mozilla.org/ja/firefox/addon/greasemonkey/" title="Greasemonkey :: Add-ons for Firefox">Greasemonkey</a> や <a href="https://addons.mozilla.org/ja/firefox/addon/scriptish/" title="Scriptish :: Add-ons for Firefox">Scriptish</a> で利用できる User JavaScript です。たぶん、Opera などでも使える──はず。

自分は Firefox 4 + Scriptish という環境で開発しています。

## 各ファイルの説明

### pixiv-original-image-link.user.js

<a href="http://www.pixiv.net/" title="[pixiv]">pixiv</a> のイラストページに、オリジナル画像へのリンクを追加する。

画像をクリックすると標準でも原寸大のイラストは表示されるけれど、そこから先が使いにくい！ イラストをクリックすると閉じてしまう……。

そこで、このスクリプトを作りました。

イラストページで各ソーシャル・サイトのボタンが並んでいる末尾に、[Original Image: (width)x(height)] というリンクを追加します。これをクリックすれば、JPEG や PNG・GIF の画像そのものが表示されるため、クリックによる拡大・縮小ができる。