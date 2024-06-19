import { useEffect, useRef } from "react";
import EVENTS from "../config/events";
import { useSockets } from "../context/socket.context";
import styles from "../styles/Messages.module.css";

function MesagesContainer(){
/**     const { socket, messages, roomId, username, setMessages } = useSockets();
    const newMessageRef = useRef(null);
    const messageEndRef = useRef(null);

    function handleSendMessage(){
        const message = newMessageRef.current.value;

        if(!String(message).trim()){
            return;
        }
    }
        */
       return <p>Messages</p>
}
export default MesagesContainer;