import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AppLocale from './languageProvider';
import { IntlProvider } from 'react-intl';

import config, {
    getCurrentLanguage
} from './LanguageSwitcher/config';

const currentAppLocale =
    AppLocale[getCurrentLanguage(config.defaultLanguage || 'english').locale];


ReactDOM.render(<LocaleProvider locale={currentAppLocale.antd}>
    <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
    >
        <App />
    </IntlProvider>
</LocaleProvider>, document.getElementById('root'));
registerServiceWorker();
