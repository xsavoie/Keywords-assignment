import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

const FORM = 'FORM';
const CONFIRM = 'CONFIRM';

function FormStateProvider({ children }) {
  const [mode, setMode] = useState(FORM);
  const [confirmMessage, setConfirmMessage] = useState('');

  const handleModeChange = () => {
    // if (mode === FORM) {
    //   return setMode(CONFIRM);
    // }
    // return setMode(FORM);
    mode === FORM ? setMode(CONFIRM) : setMode(FORM);
  };

  return (
    <LocalStateProvider
      value={{
        mode,
        setMode,
        handleModeChange,
        confirmMessage,
        setConfirmMessage,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

function useFormState() {
  const all = useContext(LocalStateContext);
  return all;
}

export { FormStateProvider, useFormState };
