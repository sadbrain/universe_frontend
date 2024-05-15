import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layouts';
import { useGlobalState } from '~/components/GlobalState';

function App() {
   const [state, dispatch] = useGlobalState();
   console.log(state);
   return (
      <Router>
         <div className="App">
            <Routes>
               {publicRoutes.map((r, i) => {
                  let Layout = DefaultLayout;
                  if (r.layout) Layout = r.layout;
                  else if (r.layout === null) Layout = Fragment;
                  const Page = r.component;
                  return (
                     <Route
                        key={i}
                        path={r.path}
                        element={
                           <Layout>
                              <Page />
                           </Layout>
                        }
                     ></Route>
                  );
               })}
            </Routes>
         </div>
      </Router>
   );
}

export default App;
