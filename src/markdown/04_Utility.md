## ユーティリティ

### /remove

```command
/remove <種類> <半径>

<種類> : projectiles(矢など), items(アイテム), paintings(絵画), boats(ボート), minecarts(トロッコ), tnt(TNT), xp(経験値)
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