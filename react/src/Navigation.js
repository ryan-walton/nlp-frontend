import React from 'react'
import { Nav, initializeIcons } from '@fluentui/react';

const links = [
  {
    links: [
      {
        name: 'Dashboard',
        url: '/',
        key: 'key1',
        iconProps: {
          iconName: 'News',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            }
          }
        }
      },
      {
        name: 'Train',
        url: '/',
        key: 'key2',
        iconProps: {
          iconName: 'ReportDocument',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            }
          }
        }
      },
      {
        name: 'Settings',
        url: '/',
        key: 'key3',
        iconProps: {
          iconName: 'Settings',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe'
            }
          }
        }
      }
    ]
  }
]

const navigationStyles = {
  root: {
    height: '100vh',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
    paddingTop: '10vh',
  }

}

const Navigation = () => {
  initializeIcons();
  return(
    <Nav
      groups={links}
      selectedKey="key1"
      styles={navigationStyles}
    />
  );
}

export default Navigation;
