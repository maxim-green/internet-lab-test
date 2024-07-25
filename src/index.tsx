import {createRoot} from 'react-dom/client';
import {App} from './components/App.component';
import 'normalize.css';
import './styles/fonts.scss';
import './styles/global.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App/>);