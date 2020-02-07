/**
 * @prettier
 */

import * as React from 'react';
import isURL from 'validator/lib/isURL';

import { RouterLink } from '~/helpers/router';

import styles from './styles';

export interface Props {
  children?: React.ReactNode;
  download?: string | boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  params?: Record<string, any>;
  style?: React.CSSProperties;
  target?: string;
  to: string;
  variant?: 'text';
}

const Link: React.FC<Props> = ({
  children,
  download,
  onClick,
  params,
  style,
  target,
  to,
  variant,
  ...props
}: Props): React.ReactElement<Props> => {
  const isExternalUrl = isURL(to);
  const className = variant === 'text' ? 'textLink' : '';

  return (
    <>
      <style jsx>{styles}</style>

      {isExternalUrl && (
        <a
          className={className}
          download={download}
          href={to}
          onClick={onClick}
          style={style}
          target={target}
          {...props}
        >
          {children || null}
        </a>
      )}

      {!isExternalUrl && (
        <RouterLink params={params} route={to} {...props}>
          {/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events, jsx-a11y/anchor-is-valid */}
          <a
            className={className}
            onClick={onClick}
            style={style}
            target={target}
          >
            {children || null}
          </a>
          {/* eslint-enable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events, jsx-a11y/anchor-is-valid */}
        </RouterLink>
      )}
    </>
  );
};

export default Link;
