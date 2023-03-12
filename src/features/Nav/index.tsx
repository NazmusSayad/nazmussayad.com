import { ButtonBlank, ButtonText } from '$components/Button'
import { RootWrapper } from '$layouts/Layouts'
import css from './index.module.scss'

const NavLink = ({ to, children, ...props }) => {
  return (
    <li>
      <ButtonText {...props} nav to={to}>
        {children}
      </ButtonText>
    </li>
  )
}

const index = () => {
  return (
    <div className={css.Nav}>
      <RootWrapper className={css.wrapper}>
        <nav className={css.nav}>
          <div className={css.logo}>
            <img src="/og-image.jpg" alt="NazmusSayad" draggable={false} />
          </div>

          <section>
            <ul className={css.listContainer}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </ul>
          </section>
        </nav>
      </RootWrapper>
    </div>
  )
}

export default index
