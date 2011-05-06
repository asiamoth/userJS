// ==UserScript==
// @id             pixiv-original-image-link
// @name           pixiv original image link
// @namespace      http://asiamoth.com/
// @description    pixiv のイラストページにオリジナル画像へのリンクを追加
// @include        http://www.pixiv.net/member_illust.php*
// ==/UserScript==

// このスクリプト用のオブジェクトと、XPath を取得する関数を作成
var POILink = {};
POILink.getXpath = function (xpath) {
  return document.evaluate(xpath, document, null, 9, null).singleNodeValue;
};

// イラスト・ページにある画像の img 要素を取得
POILink.image = POILink.getXpath('//div[@class="works_display"]/a/img');

// マンガのページであれば、動作させずに終了
if (POILink.image.parentNode.href.match('mode=manga')) {
  return;
}

// 画像のサイズを取得する（ここの処理がダサい？）
POILink.data = POILink.getXpath('//div[@class="works_data"]/p');
POILink.data.list = POILink.data.textContent.split('｜');
POILink.data.size = POILink.data.list[1];
POILink.text = '[Original Image: ' + POILink.data.size + ']';

// 原寸大画像のデータへと加工し、リンクを作成
POILink.anchor = document.createElement('a');
POILink.anchor.href = POILink.image.src.replace(/_m\.(gif|jpg|png)/, '.$1');
POILink.anchor.target = '_blank';
POILink.anchor.appendChild(document.createTextNode(POILink.text));

// リンクをくるむ li 要素を作る
POILink.item = document.createElement('li');
POILink.item.className = 'original-image';
POILink.item.appendChild(POILink.anchor);

// ソーシャル・ボタンの列に追加して、完成！
POILink.buttons = POILink.getXpath('//ul[@class="social-button"]');
POILink.buttons.appendChild(POILink.item);
