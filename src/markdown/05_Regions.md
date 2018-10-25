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
