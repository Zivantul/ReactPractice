import { MessageList, Layout, Header, ChatList } from "../components";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const ChatPage = () => {
    const navigation = useNavigate();

    useEffect(() => {
        document.addEventListener("keydown", ({ code }) => {
            if (code === "Escape") {
                navigation("/chat")
            }
        })
    }, [navigation])

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout
                        messages={<div style={{ color: '#fff' }}>Выберите чат</div>}
                        chats={<ChatList />}
                    />
                } />
            <Route
                path=":roomId"
                element={
                    <Layout
                        messages={<MessageList />}
                        chats={<ChatList />}
                    />
                } />
        </Routes>
    )
}
