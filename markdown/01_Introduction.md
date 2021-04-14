----

## 警告

**このドキュメントは最終更新から3年以上経過しており内容が旧式化している**。よってこのドキュメントを引き続き参照することは推奨されない。しかし有志によるドキュメントの更新は [GitHub](https://github.com/akaregi/fawe-jp) 上で受け付けている。

[FAWE First Guide](https://book.azure.icu/fastasyncworldedit/fawe-first-guide) は筆者の新しく書いた簡便な後継ドキュメントである。すべてを網羅はしていないもののこちらのほうが見やすく参照しやすいと思われる。

----

## はじめに

これは **IntellectualSites** による **[FastAsyncWorldEdit](https://github.com/IntellectualSites/FastAsyncWorldEdit)** の説明書である。

内容の正しさについては一切保証しない。翻訳者はこの説明書の間違い・翻訳ミスによる事故の責任を負わない。

誤記の訂正や改善点の意見を歓迎する。[GitHub](https://github.com/akaregi/fawe-jp) の Issue / Pull request で受け付ける。

### 翻訳者

* 名前：あかれぎ
* Minecraft ID: AkagiCrafter
* Fediverse: [@red_resolution@social.azure.icu](https://social.azure.icu/red_resolution)

### 謝辞

この説明書は[公式の Wiki のコマンドページ](https://github.com/boy0001/FastAsyncWorldedit/wiki/Commands)を参考にしている。FAWE の開発を行っているすべての人に感謝申し上げる。

スクリーンショットの一部に **Mizuno** 氏による [**Mizuno's 16 Craft**](http://forum.minecraftuser.jp/viewtopic.php?t=30945) を利用している。Mizuno 氏に素晴らしいテクスチャ制作への敬意を表する。

### 注意

対応バージョン： **18.5.11-fe17434-1112** (2018年5月11日)

* `<引数>` は必ず指定しなければならない。
* `[引数=3]` は指定しなくても良い。`=3` などとついている場合、引数を指定しなければその値になる。
* 時折出てくる `pattern` はブロックID、もしくはFAWEのパターン(`#pattern`)をそのまま当てはめられる。たとえば、`//set <pattern>` とあるなら `//set 1` でもよいし `//set #l3d[1,2,3]` としてもよい。
