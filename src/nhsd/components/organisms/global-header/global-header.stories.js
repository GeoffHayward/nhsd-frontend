import { storiesOf } from '@storybook/html';
import { useEffect } from '@storybook/client-api';

import NHSDGlobalHeader from './global-header';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Global header';
const componentPath = `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.organisms} / ${componentName}`;
const sourceCode = `// Sass import \n@use "nhsd/components/organisms/global-header";

// HTML`;

// Component template
const Template = (args) => template.render({ params: { ...args } });

const LabComponent = Template.bind({});
LabComponent.args = {
  logoLink: {
    classes: 'nhsd-o-global-header__logo',
    label: 'NHS Digital home',
    href: '/',
    id: 'nhsd-global-header__logo',
  },
  menuBar: {
    links: [
      {
        label: 'Coronavirus',
        classes: 'js-active',
      }, {
        label: 'Data',
      }, {
        label: 'Services',
      }, {
        label: 'Cyber',
      }, {
        label: 'Developer',
      }, {
        label: 'News',
      }, {
        label: 'About us',
      },
    ],
  },
  buttonNav: {
    classes: 'nhsd-m-button-nav--condensed nhsd-m-button-nav--non-responsive nhsd-o-global-header__button-nav',
    buttons: [
    {
      el: 'a',
      id: 'nhsd-global-header__search-button',
      href: '/search',
      aria: {
        label: 'Open search',
        controls: 'nhsd-global-header__search',
        expanded: false,
      },
      classes: 'nhsd-a-button--circle',
      icon: {
        id: 'search',
        classes: 'nhsd-a-icon--size-s',
      },
    }, {
      el: 'button',
      id: 'nhsd-global-header__menu-button',
      label: 'Menu',
      aria: {
        controls: 'nhsd-global-header__menu',
        expanded: false,
      },
      classes: 'nhsd-o-global-header__menu-button',
      icon: {
        id: 'burger',
        classes: 'nhsd-a-icon--size-s',
      },
    }],
  },
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

storiesOf(componentPath, module).add(sbConfig.title.lab, () => {
  useEffect(() => {
    /* eslint-disable no-unused-vars */
    const globalHeader = new NHSDGlobalHeader();
    /* eslint-enable no-unused-vars */
  }, []);
  return LabComponent(LabComponent.args);
});
