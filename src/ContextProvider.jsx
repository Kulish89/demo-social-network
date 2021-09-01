import React from 'react';
import { useContext } from 'react';

const Context = React.Context();

const { Provider } = Context;

const DataProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  setCount(1);

  return (
    <Provider
      value={{
        count
      }}
    >
      { children }
    </Provider>
  )
}

const DisplayCount = () => {
  const { count } = useContext(Context);

  return (
    <p>{ count }</p>
  );
}

const App = () => {
  <DataProvider>
    <DisplayCount />
  </DataProvider>
};