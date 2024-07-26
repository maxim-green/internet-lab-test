import classes from './Icon.module.scss';

const ICONS = {
  'check': <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 6.51041L5.4791 12L16 1.48947L14.4896 -9.53674e-05L5.4791 8.9999L1.48953 5.01036L0 6.51041Z" fill="currentColor"/>
  </svg>
} as const;

interface IconProps {
  iconId: keyof typeof ICONS,
}

export const Icon = (
  {
    iconId
  }: IconProps
) => {
  return ICONS[iconId];
};