import React from 'react';
import {Route, Routes} from "react-router";
import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import EventPage from "./pages/event/EventPage";
import EventFetcher from "./pages/event/EventFetcher";
import ExploreBonds from "./pages/ExploreBonds";

const AppRouter = () => {
    return (
        <Routes>

            {/* LandingPage & auth block*/}
            <Route path="/" element={<LandingPage/>}/>
            {/*<Route path="logout" element={<Logout/>}/>*/}

            {/* Nfts block */}
            <Route path="event" element={<EventFetcher/>}/>
            <Route path="explore" element={<ExploreBonds/>}/>
            {/*<Route path="nfts/:contractId/:tokenId" element={<PreviewNftPage/>}/>*/}

            {/*/!* Collections block *!/*/}
            {/*<Route path="collections" element={<ExploreCollectionsPage/>}/>*/}
            {/*<Route path="collections/:contractId/:collectionId/:filterTab" element={<PreviewCollectionPage/>}/>*/}

            {/*/!* Creation block *!/*/}
            {/*<Route path="create-nft" element={<CreateNftPage/>}/>*/}
            {/*<Route path="create-collection" element={<CreateCollectionPage/>}/>*/}

            {/*/!* Profile block *!/*/}
            {/*<Route path="profile/nfts" element={<ProfileNftsPage/>}/>*/}
            {/*<Route path="profile/collections" element={<ProfileCollectionsPage/>}/>*/}

            {/* Not found block */}
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    );
};

export default AppRouter;
