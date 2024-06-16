import Image from "next/image";
import styles from "./page.module.css";
import { useSockets } from "../context/socket.context";

export default function Home() {
  const { socket } = useSockets();
  return <div>{socket.id}</div>;
}
