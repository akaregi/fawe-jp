## はじめに

これは **boy0001** 氏による **[FastAsyncWorldEdit](https://github.com/boy0001/FastAsyncWorldedit)** の説明書である。

内容の正しさについては一切保証しない。翻訳者はこの説明書の間違い・翻訳ミスによる事故の責任を負わない。

誤記の訂正や改善点の意見を歓迎する。[GitHub](https://github.com/akaregi/fawe-jp) の Issue / Pull request で受け付ける。

### 翻訳者

* HN: あかれぎ
* Minecraft ID: AkagiCrafter
* Twitter: [@akgmoegi](https://twitter.com/akgmoegi)
* Mastodon: [@akaregi](https://mstdn.jp/@akaregi)

### 謝辞

この説明書は[公式の Wiki のコマンドページ](https://github.com/boy0001/FastAsyncWorldedit/wiki/Commands)を参考にしている。FAWE の開発を行っているすべての人に感謝申し上げる。

スクリーンショットの一部に **Mizuno** 氏による [**Mizuno's 16 Craft**](http://forum.minecraftuser.jp/viewtopic.php?t=30945) を利用している。Mizuno 氏に素晴らしいテクスチャ制作への敬意を表する。

### 注意

対応バージョン： **18.5.11-fe17434-1112** (2018年5月11日)

* `<引数>` は必ず指定しなければならない。
* `[引数=3]` は指定しなくても良い。`=3` などとついている場合、引数を指定しなければその値になる。
* 時折出てくる `pattern` はブロックID、もしくはFAWEのパターン(`#pattern`)をそのまま当てはめられる。たとえば、`//set <pattern>` とあるなら `//set 1` でもよいし `//set #l3d[1,2,3]` としてもよい。

## カテゴリ外

### //cancel

```command
//cancel
```

現在行っている処理を中止する。

### /plot replaceall

```commmand
/plot replaceall
```

（情報収集中）
## WorldEdit

### /we threads

```command
/we threads
```

現在の WorldEdit のスレッド情報を書き出す。

### /we version

```command
/we version
```

WorldEdit と FAWE のバージョン情報を表示する。

### /we help

```command
/we help [<コマンド>]
```

FAWE のコマンドヘルプを参照する。

### /we reload

```command
/we reload
```

設定を再読込する。

### /we changelog

```command
/we changelog
```

FAWE のバージョン履歴を確認する。

### /we cui

```command
/we cui
```

CUI ハンドシェイクを完了する（内部用途）。

### /we debugpaste

```command
/we debugpaste
```

hastebin.com にデバッグ情報を書き出してアップロードする。

### /we tz

```command
/we tz [タイムゾーン]
```

スナップショット用にタイムゾーンを設定する。
## ユーティリティ

### /remove

```command
/remove <種類> <半径>

<種類>:
projectiles(矢など) items(アイテム) paintings(絵画)
boats(ボート) minecarts(トロッコ) tnt(TNT) xp(経験値)
```

半径内の指定した種類のエンティティをすべて削除する。

### /butcher

```command
/butcher [-p] [-n] [-g] [-a] [-b] [-t] [-f] [-r] [-l] [半径]

-p : ペットを含める
-n : NPCを含める
-g : ゴーレムを含める
-a : 動物を含める
-b : アンビエントなMobを含める
-f : 上記全てを含める
-r : 防具立てを含める
-l : 現在何の挙動も起こさない
```

近隣の Mob を殺す。半径を指定しなかったらデフォルトの設定が適用される。

### //fill

```command
//fill <pattern> <半径> [深さ]
```

穴を pattern で満たす。

### //fillr

```command
//fillr <pattern> <半径> [深さ]
```

再帰的に穴を pattern で満たす。

### //drain

```command
//drain <半径>
```

水溜まりや溶岩溜まりを吸い取る。

### //replacenear

```command
//replacenear <半径> <置換元ブロック|mask> <置換先ブロック|pattern>
```

近隣のブロックを置き換える。

### //removeabove

```command
//removeabove [半径] [高さ]
高さ >= 1
```

頭上のブロックを消す。

### //removebelow

```command
//removebelow [半径] [高さ]
高さ >= 1
```

足元のブロックを消す。

### //removenear

```command
//removenear <ブロック> [半径]
```

近隣のブロックを消す。

### //fixwater

```command
//fixwater <半径>
```

流れている水を静止させる。

### //fixlava

```command
//fixlava <半径>
```

流れている溶岩を静止させる。

### //snow

```command
//snow [半径=10]
```

半径内に雪を降らせる。

### //thaw

```command
//thaw [半径=10]
```

半径内の雪を融かす。

### //green

```command
//green [半径]
```

半径内を緑化する。

### //ex

```command
//ex [半径]
```

半径内の炎を消火する。

### //calc

```command
//calc <評価式>
```

与えられた数学の評価式を計算する。

### //help

```command
//help [<コマンド>]
```

与えられたコマンドのヘルプを参照する。

### //gui

```command
//gui
```

GUIを表示する。FAWE 18.5.11-fe17434-1112 では実装されていない。

### /masks

```command
/mask [ページ=1|検索|mask]
```

（与えられた）マスクのヘルプを参照する。

### /patterns

```command
/mask [ページ=1|検索|pattern]
```

（与えられた）パターンのヘルプを参照する。

### /tranforms

```command
/mask [ページ=1|検索|tranform]
```

（与えられた）トランスフォームのヘルプを参照する。

### /confirm

```command
/confirm
```

処理の実行を承認する。範囲が広い処理の続行などに使われる。

## 領域操作

### //set

```command
//set <pattern>
```

領域内の中すべてにブロックを設置する。

### //replace

```command
//replace [置換元ブロック|mask] <置換先ブロック|pattern>
//rep と略せる。
```

領域内のブロックを別のブロックに置き換える。
置換元ブロックを略した場合は空気以外のブロックすべてが置換先ブロックになる。

### //walls

```command
//walls <pattern>
```

領域の四方に壁を生成する。

### //lay

```command
//lay <pattern>
```

領域内の一番上のブロックを別のブロックにする。

### //overlay

```command
//overlay <pattern>
```

領域内の一番上のブロックの上にブロックを乗せる。

### //stack

```command
//stack [-s] [-a] [回数] [方角]

-s : 選択範囲も同時に移動する
-a : 空気ブロックを無視する
```

領域内のブロックを積み重ねる。
回数を略した場合は1回分重ねられる。
方角を略した場合は自分が向いている方向に積み重ねられる。

### //move

```command
//move [-s] [-b] [-e] [-a] [距離] [方角] [残すブロック]

-s : 選択範囲も同時に移動する
-b : バイオームを移動と同時にコピーする
-e : エンティティを無視する
-a : 空気ブロックを無視する
```

領域内のブロックを移動する。
残すブロックは移動した後の空白部分に埋められる。何も指定しなければ空気になる。

### //smooth

```command
//smooth [-n] [-s] [度合い]

-n : 自然発生したブロックのみを滑らかにする
-s : 雪のみを滑らかにする
```

領域内のブロックの傾きを滑らかにする。

### //regen

```command
//regen [バイオーム] [シード]
```

領域内のブロックを再生成する。
シードを略した場合はワールドのシード値に依存する。

### //naturalize

```command
//naturalize
```

領域内のブロックの上三段を土にし、それより下を石にする。

### //fall

```command
//fall [-m] [置換え]

-m : 領域内の一番下に落とす
```

領域内のブロックを地表に落とす。

### //forest

```command
//forest [種類] [密度]
```

領域内に森を生成する。

### //setskylight

```command
//setskylight <値>
値: 1-15
```

領域内の光度を設定する。

### //fixlighting

```command
//fixlighting
```

領域内の光度を直す。

### //line

```command
//line <pattern> [厚さ]

-h : 線の外枠のみを生成する。
```

第1座標から第2座標に向かってブロックの線を生成する。矩形選択でのみ実行できる。
FAWE 18.5.11-fe17434-1112 では厚さに 4 以上を指定すると例外(java.lang.UnsupportedOperationException)となる。

### //faces

```command
//faces <pattern>
他: //outline
```

領域内の壁、天井、床にブロックを生成する（＝箱状にブロックを生成する）。

### //hollow

```command
//hollow [<厚さ> [<pattern>]]
```

### //center

```command
//center <pattern>
```

領域内の中心にブロックを生成する。

### //nbtinfo

```command
//nbtinfo
```

照準を向けたブロックの NBT を表示する。

### //wea

```command
//wea
```

領域の編集制限を無視する。

### //wer

```command
//wer
```

現在許可されている領域を選択する。

### //deform

```command
//deform <評価式> [-r] [-o]
```

領域内のブロックを指定された評価式によって変形する。
評価式は各ブロックに対して実行され、変更されることになるブロックを指定するように変数 X, Y, Z を変更する。

## 領域選択

### //expand

```command
//expand <量> [反転量] [方角]
```

領域を広げる。
反転量も指定すると、指定した方角とは逆方向にも領域が広がる。

### //contract

```command
//contract <量> [反転量] [方角]
```

領域を狭める。
反転量も指定すると、指定した方角とは逆方向にも領域が狭まる。

### //shift

```command
//shift <量> [方角]
```

領域をずらす。

### //outset

```command
//outset <量>

-h : 水平方向のみ
-v : 垂直方向のみ
```

領域をひと回り大きくする。

### //inset

```command
//inset <量>

-h : 水平方向のみ
-v : 垂直方向のみ
```

領域をひと回り小さくする。

### //pos1

```command
//pos1 [座標]
```

領域の始点を設定する。

### //pos2

```command
//pos2 [座標]
```

領域の終点(第2座標以降)を設定する。

### //hpos1

```command
//hpos1
```

領域の始点を照準の先に設定する。

### //hpos2

```command
//hpos2
```

領域の終点(第2座標以降)を照準の先に設定する。

### //count

```command
//count <ブロック>
```

領域内のブロックを数える。

### //size

```command
//size

-c : クリップボードを参照する
```

領域またはクリップボードの大きさを取得する。

### //distr

```command
//distr

-c : クリップボードを参照する
-d : ブロックの勘定をデータ値ごとに分離する
```

領域内のブロックの成分を表示する。

### //wand

```command
//wand
```

領域を選択するための道具を取得する。

### //chunk

```command
//chunk [X,Z]

-s : 選択した領域を元にチャンクを選択する
-c : チャンクの座標を特定する
```

現在立っているチャンクを選択する。-s フラグを指定すると、選択した領域が含むチャンクすべてを選択する。

座標の直接指定を行うと、現在立っている座標ではなくその座標のチャンクが選択される。チャンク座標を指定するには -c フラグを指定する。そうでなければ完全な座標が暗黙的に指定される。

### /toggleeditwand

```command
/toggleditwand
```

領域選択を行う道具の機能性を切り替える。

## 履歴

### //undo

```command
//undo [回数] [プレイヤー]
```

最後の編集を巻き戻す。

### //redo

```command
//redo [回数] [プレイヤー]
```

巻き戻された編集をもう一度実行する。

### //clearhistory

```command
//clearhistory
```

自分の編集履歴を消去する。

### //frb

```command
//frb <プレイヤー=Empire92> <半径=5> <時間=3d4h>

時間 : s(秒) m(分) h(時) d(日) y(年)
```

特定の編集を巻き戻す。
## Schematic

/schematic は /schem と略せる。以後は略称を用いる。
/download を実行すると、現在のクリップボードの内容を Schematic ファイルに起こせる。

### /schem save

```command
/schem save [フォーマット] <ファイル名>
```

Schematic ファイル内のブロックをクリップボードに保存する。

### /schem delete

```command
/schem delete <ファイル名>
```

Schematic ファイルの一覧から指定したファイルを削除する。

### /schem show

```command
/schem show [globalmine|フィルター]
```

-r <フォーマット> : フォーマットを限定する

Schematic ディレクトリに存在するすべての Schematic ファイルを表示する。

### /schem list

```command
/schem [global|mine] [フィルター] [ページ=1]

-p <ページ>  : 要求したページを表示する
-f <フォーマット>  : フォーマットを限定する
```

Schematic ディレクトリに存在するすべての Schematic ファイルを表示する。

### /schem clear

```command
/schem clear
```

クリップボードを空にする。

### /schem load

```command
/schem load [フォーマット] <ファイル名>
```

Schematic ファイル内のブロックをクリップボードに読み込む。

### /schem loadall

```command
/schem loadall [フォーマット] <ファイル名|URL>

-r : ランダムに回転させる
```

複数の Schematic ファイルを読み込む。

### /schem unload

```command
/schem unload [ファイル名]
```

複数のクリップボードから特定のものを削除する。

### /schem remap

```command
/schem remap
```

MCPE/PC 間のデータを再マッピングする。

### /schem move

```command
/schem move <ディレクトリ>
```

現在読み込んでいる Schematic ファイルを移動する。

### /schem formats

```command
/schem formats
```

現在有効な Schematic ファイルのフォーマットの一覧を表示する。
## クリップボード

### //copy

```command
//copy [-e] [-m <mask>] [-b]

-e : エンティティを無視する
-m : ソースマスクを設定する(そのため空気ブロックは無視される)
-b : バイオームもコピーする
```

領域をコピーしクリップボードに保存する。
エンティティを貼り付けたとしても、それを //undo することはできない。

### //cut

```command
//cut [-e] [-m <mask>] [-b]

-e : エンティティを無視する
-m : ソースマスクを設定する(そのため空気ブロックは無視される)
-b : バイオームもコピーする
```

領域を切り取ってクリップボードに保存する。
エンティティを貼り付けたとしても、それを //undo することはできない。

### //paste

```command
//paste [-a] [-b] [-e] [-o] [-s]

-a : 空気ブロックを無視する
-b : バイオームのコピーを行わない
-e : エンティティのコピーを行わない
-o : コピーを行った範囲に貼り付ける
-s : 貼り付けた後、領域を新たに選択する
```

クリップボード内のブロックを貼り付ける。

### //lazycopy

```command
//lazycut [-e] [-m <mask>] [-b]

-e : エンティティを無視する
-m : ソースマスクを設定する(そのため空気ブロックは無視される)
-b : バイオームもコピーする
```

### //lazycut

```command
//lazycut  [-e] [-m <mask>] [-b]

-e : エンティティを無視する
-m : ソースマスクを設定する(そのため空気ブロックは無視される)
-b : バイオームもコピーする
```

領域をコピーしクリップボードに保存する。**//paste 実行後にはじめて領域が切り取られる**。
エンティティを貼り付けたとしても、それを //undo することはできない。

### //flip

```command
//flip [方角]
```

クリップボード内のブロックを、指定された方角に向かって線対称に反転させる。

### //rotate

```command
//rotate <y軸> [x軸] [z軸]
```

クリップボード内のブロックを回転させる。

#### 例

北方向を向いている。黄緑色がY軸。赤色がX軸。黄色がZ軸。
Y軸を指定すると円形に回転する。
X軸を指定すると奥の方にぐるんと回転する。
Z軸を指定すると横方向に回転する。

![rotate](https://i.imgur.com/LBKX54b.png)

### /download

```command
/download [フォーマット名]
```

Webインタフェースを通じてクリップボードから Schematic ファイルを生成しダウンロードする。

## 地形生成

### //sphere

```command
//sphere <pattern> <半径:X>[,<半径:Y>,<半径:Z>] [頭上生成?]
```

球体を生成する。楕円球を作ることもできる。

### //hsphere

```command
//hsphere <pattern> <半径:X>[,<半径:Y>,<半径:Z>] [頭上生成?]
```

中が空洞の球体を生成する。楕円球を作ることもできる。

### //cyl

```command
//cyl <半径:X>[,<半径:Z>] [高さ]
```

円柱を生成する。楕円にすることもできる。

### //hcyl

```command
//hcyl <半径:X>[,<半径:Z>] [高さ]
```

中が空洞の円柱を生成する。楕円にすることもできる。

### //pyramid

```command
//pyramid <pattern> <大きさ>
```

ピラミッドを生成する。

### //hpyramid

```command
//hpyramid <pattern> <大きさ>
```

中が空洞のピラミッドを生成する。

### //ore

```command
//ore <mask> <pattern> <大きさ> <頻度> <希少度> <最小Y> <最大Y>
```

鉱脈を生成する。

### //ores

```command
//ores <mask>
```

鉱石を生成する。

### //caves

```command
//caves [大きさ=8] [頻度=40] [希少度=7] [最小Y=8] [最大Y=127] [sys頻度=1] [sys希少度=25] [pocket希少度=0] [pocket最小=0] [pocketMax=3]
```

洞窟網を生成する。

### /forestgen

```command
/forestgen [大きさ] [種類] [密度]
```

森を生成する。

### /pumpkins

```command
/pumpkins [大きさ]
```

かぼちゃを生成する。

## バイオーム

### //setbiome

```command
//setbiome <バイオーム> [-p]

-p : 現在立っているブロックのバイオームを使う
```

選択された領域のバイオームを設定する。
標準では選択されたすべてのブロックに適用される。

### /biomeinfo

```command
/biomeinfo [ページ]
有効なバイオーム一覧を表示する。
```

### /biomelist

```command
/biomelist [-p] [-t]
-p : 現在立っているブロックの情報を表示する
-t : 照準先のブロックの情報を表示する
```

選択された領域のバイオームを表示する。
何も指定しなければ、選択されたブロックすべての情報が表示される。

## スーパーピッケル

`//` で無効にできる。

### /sp recur

```command
/sp recur <半径>
```

再帰的な(隣接したブロックのみ適用される)スーパーピッケルを有効にする。

### /sp area

```command
/sp area <半径>
```

半径内のブロックすべてに適用されるスーパーピッケルを有効にする。

### /sp single

```command
/sp single
```

単独のブロックのみ適用されるスーパーピッケルを有効にする（＝1つずつ壊す）。

## 移動

### /unstuck

/unstuck

ブロックの内側に埋まった状態から抜け出す。

### /thru

/thru

壁の向こう側に移動する。

### /jumpto

/jumpto [world,x,y,z]

指定された座標へ移動する。

### /up

/up <上昇数> [-f] [-g]
(公式リファレンス・ゲーム内ヘルプともにフラグの説明無し)

上昇する。

### /ascend

/ascend [#|段数]

上のフロアに上がる。

### /descend

/descend [#|フロア]

下のフロアに下がる。

### /ceil

/ceil [頭上の余裕] [-f] [-g]
(公式リファレンス・ゲーム内ヘルプともにフラグの説明無し)

頭上の天井の真下に移動する。






## ツール

### /br info

```command
/br info
```

ブロックの情報を表示するブラシに設定する。

### /br inspect

```command
/br inspect [半径]
```

ブロックのFAWEによる編集ログを表示するブラシに設定する。

### /br farwand

```command
/br farwand
```

遠くの座標を領域指定するブラシに設定する。

### /br cycler

```command
/br cycler
```

ブロックのメタ値を変える(例： 1 → 15)。
左クリックで順送り。右クリックで逆送り。

#### 向きが変わるもの

ピストン、かまど、ディスペンサー、ドロッパー
原木、チェスト(大小、トラップチェスト、エンダーチェストを含む)、看板
かぼちゃ(ジャック・オ・ランタンを含む)

#### 色が変わるもの

羊毛、カーペット、色付きガラス、色つき板ガラス

##### 種類が変わるもの

葉っぱ、苗木、花、二段重ねの半ブロック(ID: 43)、草(シダ)、土

##### 柄が変わるもの

砂岩、石レンガ、クォーツブロック

##### その他

大釜(水が貯まる)、雪(高さが変わる)、ケーキ(食べかけ度が変わる)

参考画像： 対応ブロック（FAWE のバージョン更新によって対応するブロックが増えるかもしれない）
![Supporting blocks for /br cycler](https://i.imgur.com/gMW5OJX.png)

### /br deltree

```command
/br deltree
```

浮かんでいる木を伐採する。

## ブラシ

`//brush` , `/brush` , `//br` , `/br` で実行できる。下記では `/br` と略する。

基本的に設置ができないアイテム(=ブロック以外)を手に持った状態で、コマンドを実行する。
同じアイテムに対して結び付けられるブラシは一種類のみである。

### /none

```command
/br none
他: /none
```

手に持っているブラシを消す。

### /br catenary

```command
/br catenary <pattern> [湾曲度=1.2] [大きさ=0]
他: /br cat /br gravityline /br saggedline
```

2つの点をつなぐぶら下がり線を描く。湾曲度は小数指定ができる。
湾曲度を大きくすると、よりV字状になってゆく。

#### 例

/br catenary 101 1.03
青色の支柱と黄色の支柱を点として指定している。
![br catenary 101 1.03](https://i.imgur.com/uWv1d85.png)

### /br circle

```command
/br circle <pattern> [半径=5]
```

照準先に円を生成する。

### /br cliff

```command
/br cliff [半径=5] [ファイル|#clipboard|imgur=NULL] [回転=0] [Y拡大=1.00] [-r] [-l] [-s]
他: /br flatcylinder

-r : ランダムな回転をする
-l : 雪の層のみに適用する
-s : 滑らかにしない
```

地形をならして崖を生成する。

### /br copypaste

```command
/br copypaste [-a] [-r] [半径=5]
他: /br cp /br copy /br paste /br copypasta

-a : 自分の向いている方向に合わせて滑らかな坂を作る
-r : ランダムな回転をする
```

左クリックで半径内のブロックをコピーして、右クリックで貼り付ける。
または、クリップボードにコピー(`//copy`)したブロックを貼り付ける。

#### 例

/br cp -a
自分の向きに合わせてブロックが貼り付けられている。![br cp -a](https://i.imgur.com/rikH7Mt.png)

### /br extinguish

```command
/br extinguish [半径=5]
他: /br ex
```

半径内を消火する。

### /br flatten

```command
/br flatten [半径=5] [file|#clipboard|imgur=NULL] [回転=0] [Y拡大=1.00] [-r] [-l] [-s]
他: /br flat /br flatmap

-r : ランダムな回転をする
-l : 雪の層のみに適用する
-s : 滑らかにしない
```

地形を平らにする。基準のブロック(照準先)の高さに合わせてなだらかになる。
よって高い部分のブロックを基準にすると、ブロックを全体的に持ち上げる挙動を起こす。

### /br pull

```command
/br pull [半径=5]
```

地形を自分の方へ寄せる。

### /br shatter

```command
/br shatter <pattern> [半径=10] [カウント]
他: /br split /br partition
```

地形を複数に分割する不均等な線を生成する。

#### 例

/br shatter 251:7,251:8,251:11 30 30
![shatter](https://i.imgur.com/PAIdKV1.png)

### /br smooth

```command
/br smooth [大きさ=2] [繰り返し=4] [-n]
-n : 自然に生成されたブロックと思われるものにのみ適用する
```

地形をなだらかにする。

### /br sphere

```command
/br sphere [-h] <pattern> [半径=2]
他: /br s

-h : 中を空洞にする
```

球体を生成する。

#### 例

/br sphere 251:7,251:8,251:11 10
![sphere](https://i.imgur.com/2obXWYY.png)

### /br splatter

```command
/br splatter <pattern> [半径=5] [生成数=1] [大きさ=5] [同材質=true]
他: /br splat
```

同材質が True の場合は1つの塊は同じブロックになる。
False の場合は1つの塊でも複数ブロックが混ざるようになる。

筆で水を跳ね飛ばすようにブロックを生成する。

#### 例

/br splatter 251:7,251:8,251:11 30 30
![splatter](https://i.imgur.com/0Tj9jP5.png)

### /br surface

```command
/br surface <pattern> [半径=5]
他: /br surf
```

地表にブロックを生成する。空気ブロックは置換えられない。

#### 例

/br surface 251,251:7,251:8,251:11 30 30
![br surface](https://i.imgur.com/j9UP3gm.png)

## マスク

**マスク**はブロックを配置することができるか判断する。
これにより、ブロックの編集範囲を限定することができる。

平たく言うと、「**//set で敷き詰めるブロックや、 /br sphere で生成するブロックの置く場所を制限する**」。

, か & でマスクを複数指定できる(即ち /mask 2,3 など)。
, はいずれかのマスクが該当すればブロックが編集されるが、&はすべてのマスクが該当されなければ編集されない。

/mask grass,cobblestone
: 編集範囲を草ブロックか丸石のみに限定する。

/mask ![stone]&![$river]
: 編集範囲を「石かつバイオームが川」**ではない**部分のみに限定する。

場合によっては、マスクを適量 `[]` で囲う必要がある。

### コマンド

```command
/mask <mask> /gmask <mask>
```

宛先ブロックに対して適用されるマスク。
前者はブラシ、後者は通常コマンド(//set)に適用される。

```command
/smask <mask> /gsmask <mask>
```

クリップボード内のブロックや選択した範囲に対して適用されるマスク。

### #existing

空気ブロック以外に限定する。

#### 例

```command
/br s #surfacespread[10][#existing] [半径]
```

半径内の既存のブロックすべてを周囲に散らばす。

### #surface

地表のみに限定する(空気に触れている固体ブロックのみ)。

#### 例

```command
/mask >#surface
```

編集範囲を地表の上のみに限定する。

### #id

IDのみに限定する。

### #data

データ値のみに限定する。

### #haslight

発光しているブロックか光が当たっているブロックのみに限定する。

### #nolight

(#haslight の逆)
発光しているブロックか光があたっていないブロック**以外**に限定する。

### #dregion

自分が範囲指定している領域内のみに限定する。

### >id

編集範囲を特定のブロックの上に限定する。

#### 例

```command
/mask >grass
```

**grass** (草ブロック)の上だけを書き換えるようになる。

### <id

編集範囲を特定のブロックの下に限定する。

#### 例

```command
/mask <water>
```

**water** (水ブロック)の下だけを書き換えるようになる。

### $biome

編集範囲を特定のバイオームに限定する。biome のリストは //biomelist で見られる。
また、バイオームを書き換える際に用いることもできる。

/br s $roofed_forest [半径]
「覆われた森」バイオームを「描く」要領で設定できる。

### !mask

マスクの編集範囲を反転する。

#### 例

```command
/mask !grass
```

編集範囲を草ブロック**以外**に限定する。

## パターン

**パターン**はどのようにブロックが配置されるかを決定する。

### 記法

```command
#pattern[引数1][引数2][引数3]
```

### #linear2d

```command
#l2d[pattern]
#linear2d は **#l2d** と略せる。
```

### #linear3d

```command
#l3d[pattern]
#linear3d は **#l3d** と略せる。
```

### #simplex

```command
#simplex[大きさ][pattern]
```

### #spread

```command
#spread[dx][dy][dz][pattern]
```

### #surfacespread

```command
#surfacespread[拡散範囲][pattern]
```

### #id

```command
#id[pattern]
```

**ID**のみ書き換える。

#### 例

(階段ブロックを範囲指定し) //rep #id[67] と実行すると、階段の向きはそのままで丸石の階段に置換えられる。

