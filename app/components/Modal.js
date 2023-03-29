export default function Modal() {
  <div
    className='modal fade'
    id='modal'
    tabindex='-1'
    aria-labelledby='ModalLabel'
    aria-hidden='true'
  >
    <div className='modal-dialog'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h5 className='modal-title' id='ModalLabel'>
            Create Listing
          </h5>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='modal'
            aria-label='Close'
          ></button>
        </div>
        <div className='modal-body'>
          <form
            action='/post/createPost'
            enctype='multipart/form-data'
            method='POST'
          >
            <div className='mb-3'>
              <label for='title' className='form-label'>
                Title
              </label>
              <input
                type='text'
                className='form-control'
                id='title'
                name='title'
              />
            </div>
            <div className='mb-3'>
              <label for='caption' className='form-label'>
                Description
              </label>
              <textarea
                className='form-control'
                id='description'
                name='description'
              ></textarea>
            </div>
            <div className='row'>
              {/* <div className="col mb-3 w-100">
                  <label for="country" className="form-label">Country</label>
                  <select name="country" id="country">
                    <% for(let i=0; i < countries.length; i++) {%>
                    <option value="<%= countries[i] %>">
                      <%= countries[i] %>
                    </option>
                    <% } %>
                  </select>
                </div> */}
              <div className='col mb-3'>
                <label for='city' className='form-label'>
                  City
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='city'
                  name='city'
                />
              </div>
            </div>
            <div className='mb-3'>
              <label for='petFriendly' className='form-label'>
                Pet Friendly?
              </label>
              <select name='petFriendly' id='petFriendly'>
                <option value='Pet-Friendly'>Pet Friendly</option>
                <option value='Not Pet-Friendly'>Not Pet Friendly</option>
              </select>
            </div>
            <div className='row'>
              <div className='col mb-3'>
                <label for='startDate' className='form-label'>
                  Start Date
                </label>
                <input
                  type='date'
                  className='form-control'
                  id='startDate'
                  name='startDate'
                />
              </div>
              <div className='col mb-3'>
                <label for='endDate' className='form-label'>
                  End Date
                </label>
                <input
                  type='date'
                  className='form-control'
                  id='endDate'
                  name='endDate'
                />
              </div>
            </div>
            <div className='mb-3'>
              <label for='imgUpload' className='form-label'>
                Image
              </label>
              <input
                type='file'
                className='form-control'
                id='imageUpload'
                name='file'
              />
            </div>
            <div className='container text-center'>
              <button type='submit' className='btn btn-primary' value='Upload'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>;
}
