import logo from '../../pictures/';

function Logo() {
    return (
        <>
            <figure class="static-menu__logotype">
                <img src={logo} alt="logotype" />
            </figure>
            <figure class="static-menu__logotype_small">
                <img src="pictures/logo_small.jpg" alt="logotype" />
            </figure>
        </>
    )
}