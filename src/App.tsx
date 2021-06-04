import React from "react";
import Header from "./components/Header";

const App: React.FC = ({children}) => {

  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default App;
