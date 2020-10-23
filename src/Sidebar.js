import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/PlayCircleFilled";
import { useDataLayerValue } from "./DataLayer";

function Sidebar({ spotify }) {
  const [{ playlists }, dispatch] = useDataLayerValue();

  const setCurrentPlaylist = (id) => {
    return function () {
      spotify.getPlaylist(id).then((response) => {
        dispatch({
          type: "SET_CURRENT_PLAYLIST",
          currentPlaylist: response,
        });
      });
    };
  };

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      <SidebarOptions Icon={HomeIcon} title="Home" />
      <SidebarOptions Icon={SearchIcon} title="Search" />
      <SidebarOptions Icon={LibraryMusicIcon} title="Your Library" />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <div onClick={setCurrentPlaylist(playlist.id)}>
          <SidebarOptions title={playlist.name} />
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
