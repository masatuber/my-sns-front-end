import CloseFriend from "../closeFriend/CloseFriend";
import "./Sidebar.css";
import { Users } from "../../dummyData";
import {
  Bookmark,
  Home,
  MessageRounded,
  Notifications,
  Person,
  Search,
  Settings,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../state/AuthContext";

export default function Sidebar() {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Home className="sidebarIcon" />
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <span className="sidebarListItemText">ホーム</span>
              </Link>
            </li>
            <li className="sidebarListItem">
              <Search className="sidebarIcon" />
              <span className="sidebarListItemText">検索</span>
            </li>
            <li className="sidebarListItem">
              <Notifications className="sidebarIcon" />
              <span className="sidebarListItemText">通知</span>
            </li>
            <li className="sidebarListItem">
              <MessageRounded className="sidebarIcon" />
              <span className="sidebarListItemText">メッセージ</span>
            </li>
            <li className="sidebarListItem">
              <Bookmark className="sidebarIcon" />
              <span className="sidebarListItemText">ブックマーク</span>
            </li>
            <li className="sidebarListItem">
              <Person className="sidebarIcon" />
              <Link
                to={`/profile/${user.username}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <span className="sidebarListItemText">プロフィール</span>
              </Link>
            </li>
            <li className="sidebarListItem">
              <Settings className="sidebarIcon" />
              <Link
                to="/setting"
                style={{ textDecoration: "none", color: "black" }}
              >
                <span className="sidebarListItemText">設定</span>
              </Link>
            </li>
            <hr className="sidebarHr" />
          </ul>
          <button onClick={(e) => handleSubmit(e)}>
            キャッシュを削除して新規登録に戻る
          </button>
          <ul className="sidebarFriendList">
            {Users.map((user) => (
              <CloseFriend user={user} key={user.id} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

// /profile/masaki"
