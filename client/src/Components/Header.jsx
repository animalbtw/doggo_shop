import * as React from 'react';
import {Context} from "../index";
import {Link} from "react-router-dom";
import {SHOP_ROUTE} from "../Utils/consts";
import {observer} from "mobx-react-lite";

const Header = observer(() => {
  const {user} = React.useContext(Context)
  return (
    <div>
      <Link to={SHOP_ROUTE}>
        <div>
          bDoggo
        </div>
      </Link>
      {
        user.isAuth ? (
          <nav>
            <button>Админ панель</button>
            <button>Войти</button>
          </nav>
        ) : (
          <nav>
            <button onClick={() => user.setIsAuth(true)}>Авторизация</button>
          </nav>
        )
      }
    </div>
  );
})

export default Header;