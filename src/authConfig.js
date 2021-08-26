export const msalConfig = {
  auth: {
    clientId: '9c66e170-dac3-4676-962b-744abe1819a0',
    authority: 'https://login.microsoftonline.com/bcf069b7-3819-4dbc-937c-dbc8cc1c7ffb',
    redirectUri: window.location.origin,
    postLogoutRedirectUri: window.location.href,
  },
  cache: {
    localStorage: true,
  },
}

export const loginRequest = {
  scopes: ['User.Read'],
}
