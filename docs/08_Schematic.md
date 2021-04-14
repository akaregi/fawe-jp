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