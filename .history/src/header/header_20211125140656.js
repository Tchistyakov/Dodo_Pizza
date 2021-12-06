import Logo from './logo/logo'

function Header() {
  return (
    <header class="main-header">
        <div class="main-header__static-menu">
            <div class="main-header__static-menu_column-1">
                <Logo
                <nav class="static-menu__navigation static-menu__navigation_small scrollbar">
                    <ul class="navigation-list">
                        <li class="navigation-list_element navigation-list_element_small"><a href="#pizza">Пицца</a></li>
                        <li class="navigation-list_element navigation-list_element_small"><a href="#kombo">Комбо</a></li>
                        <li class="navigation-list_element navigation-list_element_small"><a href="#snack">Закуски</a></li>
                        <li class="navigation-list_element navigation-list_element_small"><a href="#desert">Десерты</a></li>
                        <li class="navigation-list_element navigation-list_element_small"><a href="#beverage">Напитки</a></li>
                        <li class="navigation-list_element navigation-list_element_small"><a href="#">Другие товары</a></li>
                    </ul>
                </nav>
            </div>    
            <div class="main-header__static-menu_column-2">
                <div class="static-menu__contact-tel">
                    <p  class="contact-tel_number">8 800 302-00-60</p>
                    <p  class="contact-tel_text">Звонок бесплатный</p>
                </div>
                <div class="static-menu__cart"> 
                    <button class="button-cart"><p class="button-cart_text">Корзина</p></button>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Header;