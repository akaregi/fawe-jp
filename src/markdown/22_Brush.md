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
