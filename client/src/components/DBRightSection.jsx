import { Route, Routes } from "react-router-dom";
import { DBHeader, DBHome, DBItems, DBOrders, DBUsers } from "../components";
import DBNewItems from "./DBNewItems";

const DBRightSection = () => {
  return (
    <div className="flex flex-col py-12 px-10 flex-1 h-full">
        <DBHeader />
        <div className="flex flex-col flex-1 overflow-y-scroll scrollbar-none ">
            <Routes>
                <Route path="/home" element={<DBHome />} />
                <Route path="/orders" element={<DBOrders />} />
                <Route path="/items" element={<DBItems />} />
                <Route path="/newItems" element={<DBNewItems />} />
                <Route path="/users" element={<DBUsers />} />

            </Routes>
        </div>
    </div>
  )
}

export default DBRightSection