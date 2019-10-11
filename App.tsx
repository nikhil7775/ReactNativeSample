import React from 'react';
import {Router, Scene, Stack} from "react-native-router-flux";
import Page2 from "./src/Page2";
import Page3 from "./src/Page3";
import HomeLayout from "./src/Home/HomeLayout";
import HomeContainer from "./src/Home/HomeContainer";
import Page1Container from "./src/Page1/Page1Container";
import Page1Layout from "./src/Page1/Page1Layout";

export default function App() {
  return (
      <Router>
        <Stack key="root">
            <Scene key="home" component={HomeContainer} Layout={HomeLayout}/>
          <Scene key="page1" component={Page1Container} Layout={Page1Layout} title="Page1"/>
          <Scene key="page2" component={Page2} title="Page2"/>
          <Scene key="page3" component={Page3} title="Page3"/>
        </Stack>
      </Router>
  );
}


