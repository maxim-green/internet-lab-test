import {createRoot} from 'react-dom/client';
import {App} from './components/App.component';
import './global.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App/>);