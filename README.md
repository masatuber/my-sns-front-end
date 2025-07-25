*  React + Vite
# 【音楽ながらSNSの目的】
<br>
自作の SNS を構築した段階では news API を使用し常に情報収集が可能で、news について語って欲しいと思いました。<br>
しかしながら、news API 無料ではクロスオリジンエラーで本番環境に移行出来ずにいました。<br>
そこで、将来的にはSpotify の API では無料枠でも使用出来ると調査で判明したので今後は実装したいと思います。
<br>

# 【アプリ全体の構成】
<br>
フロントエンド： React.js + Vite + API通信 +  useContextでグローバル状態管理
<br>
バックエンド： Express.js + MongoDB

[アプリURLはこちら](https://news-nagara-sns.onrender.com/)

# 使用ライブラリピックアップ
<br>


```

@emotion/react: "^11.14.0",
@emotion/styled: "^11.14.0",
@mui/icons-material: "^6.4.3",
@mui/material: "^6.4.3",
@mui/styled-engine-sc: "^6.4.3",
axios: "^1.7.9",
prop-types: "^15.8.1",
react: "^18.3.1",
react-dom: "^18.3.1",
react-router-dom: "^7.2.0",
styled-components: "^6.1.14",
timeago.js: "^4.0.2"

```

# ハンズオン以外の実装
<br>
投稿削除UI,削除API,ユーザー設定画面, ユーザー登録削除API, レスポンシブ対応

# ホスティングの場所
<br>
フロントエンド、バックエンドともにrender.com を選定
<br>
バックエンド側の遅延問題があるが、APIを自分で叩くエンドポイントを実装済
<br>
今後はユーザーが使用する際に不便ないように、エンドポイントを自動呼出しを検討します。


# 【苦労した点】
<br>
バックエンド側のAPI通信は200 OKで一見問題ないように思いましたが、フロントエンド側の呼び出しでundefined
<br>
が暫く返っている状態が続き、useEffect依存配列に渡す値と、actionCalls.js内の
<br>
エラーで、原因はuserを取得しresponse.dataで全体のJSON取得出来るのを記述していなためで、抜け出せずにいました。

```
useEffect(() => {
  const fetchPosts = async () => {
      try {
       //バックエンド側処理など
      } catch (error) {
        console.error("エラーメッセージ", error);
      }
    };
    fetchPosts();
  }, [username, user]);
//依存配列に全体のグローバルuserを監視するように変更
```

# 【モンゴDB削除防止用URL】

https://my-sns-backend.onrender.com/ping/db
<br>
renderスリーブ用URL
<br>
https://my-sns-backend.onrender.com/ping/

## プロジェクト階層
<br>

```
my-sns
├─public
│  └─assets
└─src
    ├─components
    │  ├─closeFriend
    │  ├─online
    │  ├─post
    │  ├─rightbar
    │  ├─share
    │  ├─sidebar
    │  ├─timeline
    │  └─topbar
    ├─pages
    │  ├─home
    │  ├─login
    │  ├─profile
    │  ├─register
    │  └─setting
    └─state
```