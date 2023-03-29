export default function Login() {
  // <% if (locals.messages.errors) { %> <% messages.errors.forEach( el => { %>
  //   <div class="alert alert-danger"><%= el.msg %></div>
  //   <% }) %> <% } %> <% if (locals.messages.info) { %> <%
  //   messages.info.forEach( el => { %>
  //   <div class="alert alert-info"><%= el.msg %></div>
  //   <% }) %> <% } %>
  return (
    <main class='container'>
      <div class='row justify-content-center'>
        <section class='col-6 mt-5'>
          <form action='/signup' method='POST'>
            <div class='mb-3'>
              <label for='userName' class='form-label'>
                User Name
              </label>
              <input
                type='text'
                class='form-control'
                id='userName'
                name='userName'
              />
            </div>
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
              <div id='emailHelp' class='form-text'>
                We will never share your email with anyone else.
              </div>
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
            <div class='mb-3'>
              <label for='confirmPassword' class='form-label'>
                Confirm Password
              </label>
              <input
                type='password'
                class='form-control'
                id='confirmPassword'
                name='confirmPassword'
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
