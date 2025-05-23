import "./CloseFriend.css";
export default function CloseFriend({ user }) {
  const PUBLIC_FOLDER = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <li className="sidebarFriend">
        <img
          src={PUBLIC_FOLDER + user.profilePicture}
          alt=""
          className="sidebarFriendImg"
        />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </>
  );
}
