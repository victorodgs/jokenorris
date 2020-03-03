/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {
  FaSpider,
  FaRoute,
  FaGlassCheers,
  FaGlasses,
  FaEyeSlash,
  FaTeethOpen,
  FaHamburger,
  FaBook,
  FaMoneyBill,
  FaFilm,
  FaMusic,
  FaFlagUsa,
  FaPray,
  FaUserAstronaut,
  FaFootballBall,
  FaRoad,
  FaSpinner,
} from 'react-icons/fa';

import {JokesContext} from '../../context/JokesContext';
import If from '../../helpers/If';

export default props => {
  const {jokesContext} = useContext(JokesContext);
  const categories = props.categories || jokesContext.categories;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (jokesContext) {
      jokesContext.getCategories();
      setIsLoading(false);
    }
  }, []);

  const reloadCategories = () => {
    setIsLoading(true);
    jokesContext.getCategories();
    setIsLoading(false);
  };

  return (
    <div className="categories">
      <h4 className="categories-title">Categories (Choose Wisely)</h4>
      <div className="categories-list">
        <div className="row">
          <If test={!isLoading && categories[0] !== 'error'}>
            {jokesContext && categories.length > 0
              ? categories.map((el, i) => {
                  let categoryIcon = null;

                  switch (el) {
                    case 'animal':
                      categoryIcon = <FaSpider />;
                      break;
                    case 'career':
                      categoryIcon = <FaRoute />;
                      break;
                    case 'celebrity':
                      categoryIcon = <FaGlassCheers />;
                      break;
                    case 'dev':
                      categoryIcon = <FaGlasses />;
                      break;
                    case 'explicit':
                      categoryIcon = <FaEyeSlash />;
                      break;
                    case 'fashion':
                      categoryIcon = <FaTeethOpen />;
                      break;
                    case 'food':
                      categoryIcon = <FaHamburger />;
                      break;
                    case 'history':
                      categoryIcon = <FaBook />;
                      break;
                    case 'money':
                      categoryIcon = <FaMoneyBill />;
                      break;
                    case 'movie':
                      categoryIcon = <FaFilm />;
                      break;
                    case 'music':
                      categoryIcon = <FaMusic />;
                      break;
                    case 'political':
                      categoryIcon = <FaFlagUsa />;
                      break;
                    case 'religion':
                      categoryIcon = <FaPray />;
                      break;
                    case 'science':
                      categoryIcon = <FaUserAstronaut />;
                      break;
                    case 'sport':
                      categoryIcon = <FaFootballBall />;
                      break;
                    case 'travel':
                      categoryIcon = <FaRoad />;
                      break;
                    default:
                      break;
                  }
                  return (
                    <Link
                      className="category col-lg-4 col-md-4 col-sm-6"
                      key={i}
                      aria-label={`Link to ${el} category joke`}
                      to={`/joke/${el}`}
                    >
                      <span
                        className="category-icon"
                        aria-label={`${el} category icon`}
                      >
                        {categoryIcon}
                      </span>
                      <span className="category-name">{el}</span>
                    </Link>
                  );
                })
              : false}
          </If>

          <If test={!isLoading && categories[0] === 'error'}>
            <h3 className="empty">No Categories Available</h3>
            <button onClick={reloadCategories} className="reload">
              Try Again
            </button>
          </If>

          <If test={!isLoading && categories.length === 0}>
            <h3 className="empty">No Categories Available</h3>
          </If>

          <If test={isLoading}>
            <FaSpinner className="loading" />
          </If>
        </div>
      </div>
    </div>
  );
};
