import './LoginPage.css'
import fotoBag from './assets/school-bag.png'
import fotoPc from './assets/online-study.png'
import fotoFolha from './assets/blood-report.png'

function LoginPage() {

  return (
    <div>
      <div className='inputLogin'>
        <form action="">
          <h3 className='email'>E-mail</h3>
            <input type='email' id='email' pattern='.+@exemplo\.com' size="30" placeholder='Insira seu e-mail' className='inputEmail' required/>
          <h3 className='senha'>Senha</h3>
            <input type="password" name="" id="" className='inputSenha' placeholder='Insira sua senha' required/>

          </form>
      </div>
        <div className='container'>
          <img src={fotoBag} alt='Imagem de uma mochila' className='bag'/>
          <img src={fotoPc} alt="Imagem de um notebook" className='note' />
          <button type='submit' className='buttonLogin'>Login</button>
          <img src={fotoFolha} alt="Imagem de uma folha" className='folha'/>
        </div> 
    </div>
  )
}

export default LoginPage
