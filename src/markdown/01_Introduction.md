## はじめに

これは **boy0001** 氏による **[FastAsyncWorldEdit](https://github.com/boy0001/FastAsyncWorldedit)** の日本語リファレンスである。

著者はあかれぎ(Minecraft ID:AkagiCrafter, Mastodon: @SUBLIMATION@mstdn.jp)である。誤記や改善についての意見を歓迎する。

内容の正しさについては一切保証しない。著者はこのリファレンスの間違いによる事故の責任を負わない。

このリファレンスは[公式のWikiのコマンドページ](https://github.com/boy0001/FastAsyncWorldedit/wiki/Commands)を参考にしている。
スクリーンショットの一部に **Mizuno** 氏による **Mizuno's 16 Craft** を利用している。

対応バージョン: **18.5.11-fe17434-1112** (2018年5月11日)

* `<引数>` は必ず指定しなければならない。
* `[引数=3]` は指定しなくても良い。`=3` などとついている場合、引数を指定しなければその値になる。
* 時折出てくる `pattern` はブロックID、もしくはFAWEのパターン(`#pattern`)をそのまま当てはめられる。例えば、`//set <pattern>` とあるなら `//set 1` でもよいし `//set #l3d[1,2,3]` としてもよい。