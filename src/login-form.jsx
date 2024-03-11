import Inputs from './inputs'
import Btn from './button'

let isRegistered = true;




function LoginForm() {
  return(
  <div className='w-3/12  h-80 border mt-28 mx-auto shadow-lg px-5 text-center'>
      <h3 className='font-bold text-3xl mt-12 text-blue-400'>Welcome</h3>
      <div className='flex flex-col space-y-3 mt-8'>
      <Inputs uses="text" placeholderText=" Username"/>
      <Inputs uses="password" placeholderText="Password"/>
      { isRegistered ? null : <Inputs uses="password" placeholderText="Confirm Password"/>}
        <Btn what= {isRegistered ? "Submit" : "Sign Up"} />
      </div>
      </div>
  )
  }


export default LoginForm;
