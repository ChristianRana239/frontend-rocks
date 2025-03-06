import { BrowserRouter, Route, Routes } from "react-router";
import { RootRoute } from "../../routes/root/index.tsx";
import { DetailRoute } from "../../routes/detail/index.tsx";

export const AppRouter = () => {
    return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element = {<RootRoute />} />
        <Route path = "/dettaglio/:id" element={<DetailRoute />} />
     </Routes>
    </BrowserRouter>
    )
}