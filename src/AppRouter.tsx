import React from 'react';
import {Route, Routes} from "react-router";
import {Navigate} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import EventFetcher from "./pages/event/EventFetcher";
import ExploreBonds from "./pages/ExploreBonds";
import CreatePage from "./pages/create/CreatePage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/explore"/>}/>
            <Route path="event" element={<EventFetcher/>}/>
            <Route path="create" element={<CreatePage/>}/>
            <Route path="explore" element={<ExploreBonds/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    );
};

export default AppRouter;
