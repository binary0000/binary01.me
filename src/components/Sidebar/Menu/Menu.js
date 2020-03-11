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

  let idx;
  let all = 0;

  for (const category of categories) {
    idx = menu.findIndex((item) => item.label === category.fieldValue);
    if (idx > -1) menu[idx].count = category.totalCount;

    all += category.totalCount;
  }

  menu[menu.findIndex((item) => item.label === 'ALL')].count = all;

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
