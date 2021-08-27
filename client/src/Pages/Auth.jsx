import * as React from 'react';
import {Link, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../Utils/consts";

function Auth() {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  return (
      <div>
        <div>
          {
            isLogin ? 'Авторизация' : 'Регистрация'
          }
        </div>
        <form action="">
          <input type="text" placeholder={'Введите email'}/>
          <input type="text" placeholder={'Введите пароль'}/>
          <div>
            {
              isLogin ? (
                <div>
                  Нет аккаунта?
                  <Link to={REGISTRATION_ROUTE}>
                    Зарегистрируйтесь.
                  </Link>
                </div>
              ) : (
                <div>
                  Есть аккаунт?
                  <Link to={LOGIN_ROUTE}>
                    Войдите.
                  </Link>
                </div>
              )
            }
            <button>
              {
                isLogin ? ('Войти') : ('Регистрация')
              }
            </button>
          </div>
        </form>
      </div>
  );
}

export default Auth;
