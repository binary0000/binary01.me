/* eslint-disable no-restricted-syntax */
// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

type Props = {
  menu: {
    label: string,
    path: string,
  }[],
  categories: {
    fieldValue: string,
    totalCount: number
  }[]
};

const menuCountMatch = (menu, categories) => {
  let all = 0;

  for (const item of menu) {
    for (const field of categories) {
      if (item.label === field.fieldValue) {
        item.count = field.totalCount;
        all += item.count;
      }
    }
  }

  const isALL = (element) => element.label === 'ALL';
  menu[menu.findIndex(isALL)].count = all;
};

const Menu = ({ menu, categories }: Props) => {

  menuCountMatch(menu, categories);

  return (
    <nav className={styles['menu']}>
      <ul className={styles['menu__list']}>
        {menu.map((item) => (
          <li className={styles['menu__list-item']} key={item.path}>
            <Link
              to={item.path}
              className={styles['menu__list-item-link']}
              activeClassName={styles['menu__list-item-link--active']}
            >
              {item.label} {item.count ? `(${item.count})` : null}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
