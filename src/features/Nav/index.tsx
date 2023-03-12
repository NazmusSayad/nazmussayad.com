import { ButtonBlank } from '$components/Button'
import { RootWrapper } from '$layouts/Layouts'
import css from './index.module.scss'

const index = () => {
  return (
    <div>
      <RootWrapper>
        <nav>
          <ButtonBlank className={css.logo}>
            <img src="/og-image.jpg" alt="NazmusSayad" />
          </ButtonBlank>

          <section>{/* <img src="/og-image.jpg" alt="" /> */}</section>
        </nav>
      </RootWrapper>
    </div>
  )
}

export default index
