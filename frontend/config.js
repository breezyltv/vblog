import getConfig from 'next/config';

const {publicRuntimeConfig} = getConfig();

export const API = publicRuntimeConfig.PRODUCTION ? 'https://mydomain.me' : 'http://localhost:8080'

export const APP_NAME = publicRuntimeConfig.APP_NAME