import { List } from "@mui/material";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Chat } from "./chat";

export const ChatList = () => {
    const [chatList] = useState(["room1", "room2", "room3"]);
    const { roomId } = useParams();

    return (
        <List component="nav">
            {chatList.map((chat) => (
                <Link to={`/chat/${chat}`} key={chat}>
                    <Chat
                        title={chat}
                        selected={chat === roomId}
                    />
                </Link>
            ))}
        </List>
    );
};