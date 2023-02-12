import React from 'react';
import { Link } from 'react-router-dom';
import { Page404Props } from './types';

const Page404 = (props: Page404Props) => {
  return (
    <div className="error">
      <h2 className="error__heading">{props.heading}</h2>
      <Link className="link error__link" to="/">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default Page404;
