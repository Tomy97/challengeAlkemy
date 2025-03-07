import { DefinePlugin, EnvironmentPlugin } from '@rspack/core'
import dotenv from 'dotenv'

dotenv.config({ path: './src/.env' });

new EnvironmentPlugin(['RS_HERO_API_URL', 'RS_AUTH_API_URL', 'RS_HERO_API_KEY', 'RS_PORT']);
new DefinePlugin({
  'process.env.RS_HERO_API_URL': JSON.stringify(process.env.RS_HERO_API_URL), 
  'process.env.RS_AUTH_API_URL': JSON.stringify(process.env.RS_AUTH_API_URL),
  'process.env.RS_HERO_API_KEY': JSON.stringify(process.env.RS_HERO_API_KEY),
  'process.env.RS_PORT': JSON.stringify(process.env.RS_PORT), 
})