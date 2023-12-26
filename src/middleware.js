import createMiddleware from 'next-intl/middleware'
import { locales, localePrefix } from './config'

export default createMiddleware({
  locales,
  defaultLocale: 'uk',
  localePrefix,
})

export const config = {
  matcher: ['/', '/(uk|ro)/:path*'],
}
