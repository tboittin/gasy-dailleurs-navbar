import style from './navbar.module.scss'

export default function Navbar() {
  return(
    <>
      <div className={style.container}>
        <div className={style.logo}>
          <img src="./cropped-logo-2.jpg" alt="logo" />
          <p>Gasy D'Ailleurs</p>
        </div>
        <div className={style.mobile}>

        </div>
        <div className={style.desktop}>

        </div>
      </div>
    </>
  )
}