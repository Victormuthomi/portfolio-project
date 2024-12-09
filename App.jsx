import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import IndexPage from "./src/pages/IndexPage";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<IndexPage />}></Route>)
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
