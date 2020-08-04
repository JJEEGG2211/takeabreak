import HomePage from "../pages/home/HomePage";
import RoomPage from "../pages/room/RoomPage";

export default [
  { path: "/", component: HomePage },
  { path: "/room/:roomId", component: RoomPage },
];
