import {AuthConfig} from 'angular-oauth2-oidc';



export const authConfig: AuthConfig = {
  issuer: 'http://localhost:8180/realms/ioecg-realm',
  redirectUri: window.location.origin,
  clientId: 'ioecg-client',
  responseType: 'code',
  strictDiscoveryDocumentValidation: false,
  scope: 'openid profile email offline_access',
}
