// const errMsg = {
//   if (locals.messages.errors) {
//     return messages.errors.forEach( el => <div class="alert alert-danger">el.msg</div>
//   )}
//   if (locals.messages.info) {
//     return messages.info.forEach( el => <div class="alert alert-info">el.msg</div>
//   )}
// }

export default function Login() {
  return (
    <main class='container'>
      <div class='row justify-content-center'>
        <section class='col-6 mt-5'>
          {/* {errMsg} */}
          <form action='/login' method='POST'>
            <div class='mb-3'>
              <label for='email' class='form-label'>
                Email address
              </label>
              <input
                type='email'
                class='form-control'
                id='email'
                aria-describedby='emailHelp'
                name='email'
              />
            </div>
            <div class='mb-3'>
              <label for='password' class='form-label'>
                Password
              </label>
              <input
                type='password'
                class='form-control'
                id='password'
                name='password'
              />
            </div>
            <button type='submit' class='btn btn-primary mb-3'>
              Submit
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
