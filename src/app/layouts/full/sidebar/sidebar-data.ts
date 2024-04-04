import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    displayName: 'Home',
    iconName: 'layout-dashboard',
    route: '/',
  },
  {
    displayName: 'People',
    iconName: 'users',
    route: '/people',
  },
  {
    displayName: 'Films',
    iconName: 'movie',
    route: '/films',
  },
  {
    displayName: 'Starships',
    iconName: 'speedboat',
    route: '/starships',
  },
  {
    displayName: 'Vehicles',
    iconName: 'car',
    route: '/vehicles',
  },
  {
    displayName: 'Planets',
    iconName: 'planet',
    route: '/planets',
  },
  {
    displayName: 'Species',
    iconName: 'friends',
    route: '/species',
  },
];
