pubg-bulezone-predictor
====

本ツールは PLAYERUNKNOWN'S BATTLEGROUNDS の安置予測を練習することを目的として作られたWebアプリケーションです。

[こちら](https://kagijpn.github.io/pubg-bulezone-predictor/top.html)
から本ツールを利用することが出来ます。

また、初めてお使いの方は下記の[利用方法](#利用方法)をご一読ください。

## 利用方法

本ツールは**あらかじめ用意されている試合データを使って利用する**ことも可能ですが、**自分自身で練習用の試合データを作る**ことも可能です。

- [あらかじめ用意されている試合データを使う](#あらかじめ用意されている試合データを使って利用する場合)
- [自分自身で練習用の試合データを作る](#自分自身で練習用の試合データを作る場合)

### あらかじめ用意されている試合データを使って利用する場合
本ツールであらかじめ用意している試合データはいくつかあります。

[こちら](https://github.com/KagiJPN/pubg-bulezone-predictor/tree/master/bule-zone-predictor-core/app/resource)のページに飛ぶと、_〇〇.json_ をいう名前のリンクがあると思います。

そのリンクにカーソルを合わせて右クリックをして、名前を付けて保存をして頂くと　_〇〇.json_　という形式でファイルを保存することができます。

その json ファイルを[トップページ](https://kagijpn.github.io/pubg-bulezone-predictor/top.html)で読み込ませることで、ツールを利用することが出来ます。

安置読み練習ツールの利用方法は[こちら](#安置読み練習ツールの利用方法)でご確認ください。

### 自分自身で練習用の試合データを作る場合

本ツールでは、自分自身で試合データを作る事が可能です。

大きく分けて3つの手順を踏む必要があります。

1. [PUBG Developer Portal](https://developer.pubg.com/)で _API Key_ を発行する。詳細は[こちら](#APIKeyの発行方法)
2. [試合検索ページ](https://kagijpn.github.io/pubg-bulezone-predictor/bule-zone-predictor-core/app/html/players.html)にて、_API Key_ 、 _Platform_ 、_PUBG NAME_ を入力して、自身がプレイした試合一覧を表示する。詳細は[こちら](#試合検索ページの使い方)
3. 試合一覧ページで表示されるデータをコピーして、json ファイルを作成する。詳細は[こちら](#試合一覧ページの使い方)

#### APIKEYの発行方法
[PUBG Developer Portal](https://developer.pubg.com/)で API Key を取得します。

 **GET YOUR OWN API KEY**というところを押して、言われた通りに進めていき、会員登録(無料)をします。最終的に、下記のようなページにいくので、**API KEY** と書かれているところの文字列をコピーしておいてください。 

![pubg-apikey](https://raw.githubusercontent.com/KagiJPN/pubg-bulezone-predictor/master/docs/resource/img/pubg-apikey.JPG)

#### 試合検索ページの使い方
[試合検索ページ](https://kagijpn.github.io/pubg-bulezone-predictor/bule-zone-predictor-core/app/html/players.html)に飛ぶとこの様な画面が出てきます。
![search-page](https://raw.githubusercontent.com/KagiJPN/pubg-bulezone-predictor/master/docs/resource/img/search-page.JPG)

- API KEY というところに、先ほどコピーしておいた文字列をペーストして、右側の**ADD**ボタンを押下してください。
- 正常に追加されると、画像のように追加した API KEY が表示されます。
- 後は、プラットフォームと検索を掛けたい PUBG NAME を入力して、右側の**SEARCH**を押下してください。

押下したら、[試合一覧ページ](#試合一覧ページの使い方)に遷移します。

#### 試合一覧ページの使い方
正常な値で遷移されたら、このような画面に飛びます。
![matches-page](https://raw.githubusercontent.com/KagiJPN/pubg-bulezone-predictor/master/docs/resource/img/matches-page.JPG)

ここでは、実際に試合データを作るページとなります。

追加したい試合の右側の**ADD**ボタンを押下してください。押下すると、右側のテキストエリアに試合データが追加されていきます。

追加したい試合をすべてADDし終わったら、テキストエリアをクリックしてください。
自動的にコピーされた状態になります。

そうしたら試合データの整形に入ります。

- まずはメモ帳などのテキストを編集できるエディタを開いてください。(jsonをフォーマットできるエディタだと便利)
- まず初めに、```[]```を記入してください。
- ```[]``` を記入したら、その中にコピーされた試合データをペーストしてください。
- 最後に、ペーストされた試合データの一番最後の , (カンマ)を削除してください。
- 最終的に下記のような形になったら保存してください。保存したファイルは拡張子が ```.json``` になるようにファイル名を保存・編集してください。
```
[
    {"createdAt":"2/17 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"2/16 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"2/15 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"2/14 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"2/13 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"2/12 20:48" ~~~ "radius":126.09056640625}]}
]
```

##### tips
json データですが、生成されたものを足し合わせて一つのファイルにすることも可能です。
その場合は

```
[
    {"createdAt":"1/17 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"1/16 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"1/15 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"1/14 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"1/13 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"1/12 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"2/17 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"2/16 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"2/15 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"2/14 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"2/13 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"2/12 20:48" ~~~ "radius":126.09056640625}]}
]
```
のような形になるように、自身で整形を行ってください。

つまり、一度データを保存しておけば、月日が経つににつれて、どんどん試合データが増えていくということになります。

※一番最後に **,** (カンマ)があると json として正しい形式ならないので注意してください。

安置読み練習ツールの利用方法は[こちら](#安置読み練習ツールの利用方法)でご確認ください。

## 安置読み練習ツールの利用方法

1. 

![pubg-apikey](https://raw.githubusercontent.com/KagiJPN/pubg-bulezone-predictor/feature/add_readme/docs/resource/img/pubg-predictor1.JPG)


![pubg-apikey](https://raw.githubusercontent.com/KagiJPN/pubg-bulezone-predictor/feature/add_readme/docs/resource/img/pubg-predictor2.JPG)

## さいごに
本ツールは、Github Pages を使い、外部依存のフレームワークも使っていないため pure で 
ecology で fabulous なものとなっています。

改善案や提案などは、随時受け付けております。
より良いツールにアップデートするためにも、ぜひともご協力のほどよろしくお願い申し上げます。
