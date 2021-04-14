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