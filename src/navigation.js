import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { locales } from './config'

export const localePrefix = 'as-needed'

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix })
