import Image from "next/image";
import styles from "./page.module.css";
import { useSockets } from "../context/socket.context";

import RoomsContainer from "../containers/Rooms";
import MesagesContainer from "../containers/Messages";


export default function Home() {
  const { socket } = useSockets();
  return  <div>

    <RoomsContainer />
    <MesagesContainer />
  </div>
  ;
}
