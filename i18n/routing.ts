import { createTranslator, createNavigator } from 'next-intl';

import routing from '../i18n';

export const { Link, redirect, usePathname, useRouter } =
  createNavigator(routing);
