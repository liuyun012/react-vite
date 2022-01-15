/*
 * @Author: Qzx
 * @Date: 2021-11-24 22:26:32
 * @LastEditTime: 2022-01-15 18:28:24
 * @LastEditors: Qzx
 * @Description:
 */
import defaultSettings from '../settings.json';

const defaultTheme = localStorage.getItem('arco-theme') || 'light';

function changeTheme(newTheme?: 'string') {
  if ((newTheme || defaultTheme) === 'dark') {
    document.body.setAttribute('arco-theme', 'dark');
  } else {
    document.body.removeAttribute('arco-theme');
  }
}

// init page theme
changeTheme();

export interface GlobalState {
  theme?: string;
  settings?: typeof defaultSettings;
  userInfo?: {
    name?: string;
    avatar?: string;
    job?: string;
    organization?: string;
    location?: string;
    email?: string;
  };
}

const initialState: GlobalState = {
  theme: defaultTheme,
  settings: defaultSettings,
  userInfo: {
    name: 'qzx',
    avatar: 'https://lf1-xgcdn-tos.pstatp.com/obj/vcloud/vadmin/start.8e0e4855ee346a46ccff8ff3e24db27b.png'
  }
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case 'toggle-theme': {
      const { theme } = action.payload;
      if (theme === 'light' || theme === 'dark') {
        localStorage.setItem('arco-theme', theme);
        changeTheme(theme);
      }

      return {
        ...state,
        theme
      };
    }
    case 'update-settings': {
      const { settings } = action.payload;
      return {
        ...state,
        settings
      };
    }
    case 'update-userInfo': {
      const { userInfo } = action.payload;
      return {
        ...state,
        userInfo
      };
    }
    default:
      return state;
  }
}
