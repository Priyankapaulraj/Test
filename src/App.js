import { ColorModeContext, useMode } from './theme';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import Dashboard from './scenes/dashboard';
import Sidebar from './components/Sidebar';
// import Attendance from './scenes/attendance';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Sidebar />
          <main className='content'>
            <Header />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              {/* <Route path='/attendance' element={<Attendance />} /> */}

              <Route />
              <Route />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
