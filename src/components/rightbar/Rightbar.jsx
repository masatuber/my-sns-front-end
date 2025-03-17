import "./Rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import axios from "axios";
import { useState } from "react";

export default function Rightbar({ user }) {
  const PUBLIC_FOLDER = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;

  //ニュースAPIキー定義 https://newsapi.org/v2/everything?q=テクノロジー&apiKey=
  const API_KEY = import.meta.env.VITE_REACT_NEWS_API_KEY;
  //ニュースデータの保持用のステート定義
  const [newsData, setNewsData] = useState([]);

  // useEffect(() => {
  //   fetchNews();
  // }, []);
  const hendleGet = () => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything`, {
          params: {
            q: "朝日新聞", // 検索キーワード
            // 言語を日本語に指定language: "en",検索ワード日本語で取得可能
            pageSize: 20,
            //page: "5",qでは取得不可
            apiKey: API_KEY,
          },
        });
        //console.log(response.data);

        if (response.status === 200) {
          const articles = response.data.articles ?? [];
          setNewsData(articles);
        }
      } catch (error) {
        console.error("エラーが発生しました", error);
      }
    };
    fetchNews();
  };

  const HomeRightbar = () => {
    return (
      <>
        <div className="eventContainer">
          <button onClick={hendleGet} className="apiButton">
            {" "}
            最新ニュースを見る実装出来ない
          </button>
        </div>

        <h4 className="rightbarTitle">オンラインの友達</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online user={user} key={user.id} /> //Onlineコンポーネントにuserを渡し、JSのmap関数でUsersの配列を展開
          ))}
        </ul>

        {/* ニュースデータが存在する場合にレンダリング */}
        {newsData.length > 0 && (
          <div className="newsSection">
            <h4 className="rightbarTitle">最新ニュース</h4>
            <ol className="newsList">
              {newsData.map((article, index) => (
                <li key={index} className="newsItem">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title || article.description || "タイトルなし"}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        )}
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">ユーザー情報</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">出身:</span>
            <span className="rightbarInfoKey">○:</span>
          </div>
          <h4 className="rightbarTitle">あなたの友達</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img
                src={PUBLIC_FOLDER + "/person/1.jpeg"}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">○</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={PUBLIC_FOLDER + "/person/2.jpeg"}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">○</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={PUBLIC_FOLDER + "/person/3.jpeg"}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">○</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={PUBLIC_FOLDER + "/person/4.jpeg"}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">○</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  //条件分岐用のJSXで、ProfileがtrueならProfileRightbarを表示、そうでないならHomeRightbarを表示
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

// {Users.map(( ) => (
// <component プロップス={プロップス}
// key={user.id}/> キーがないとerrorになる
//          )  )  }
