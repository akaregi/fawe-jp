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
