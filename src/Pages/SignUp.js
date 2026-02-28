export default function SignUp(){
    return(
        <>
          <section className="auth bg-base d-flex flex-wrap">  
  <div className="auth-left d-lg-block d-none">
    <div className="d-flex align-items-center flex-column h-100 justify-content-center">
      <img src="assets/images/auth/auth-img.png" alt />
    </div>
  </div>
  <div className="auth-right py-32 px-24 d-flex flex-column justify-content-center">
    <div className="max-w-464-px mx-auto w-100">
      <div>
        <a href="index.html" className="mb-40 max-w-400-px d-flex  align-items-center ">
          <img src="..\assets\images\pp.png" height="100px" width="100px" alt />
        <p className=" strong fs-3">Special Medi Plus</p>
        </a>
        <h4 className="mb-12">Sign Up to your Account</h4>
        <p className="mb-32 text-secondary-light text-lg">Welcome back! please enter your detail</p>
      </div>
      <form action="#">
        <div className="icon-field mb-16">
          <span className="icon top-50 translate-middle-y">
            <iconify-icon icon="f7:person" />
          </span>
          <input type="text" className="form-control h-56-px bg-neutral-50 radius-12" placeholder="Username" />
        </div>
        <div className="icon-field mb-16">
          <span className="icon top-50 translate-middle-y">
            <iconify-icon icon="mage:email" />
          </span>
          <input type="email" className="form-control h-56-px bg-neutral-50 radius-12" placeholder="Email" />
        </div>
        <div className="mb-20">
          <div className="position-relative ">
            <div className="icon-field">
              <span className="icon top-50 translate-middle-y">
                <iconify-icon icon="solar:lock-password-outline" />
              </span> 
              <input type="password" className="form-control h-56-px bg-neutral-50 radius-12" id="your-password" placeholder="Password" />
            </div>
            <span className="toggle-password ri-eye-line cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light" data-toggle="#your-password" />
          </div>
        </div>
         <div className="mb-20">
          <div className="position-relative ">
            <div className="icon-field">
              <span className="icon top-50 translate-middle-y">
                <iconify-icon icon="solar:lock-password-outline" />
              </span> 
              <input type="password" className="form-control h-56-px bg-neutral-50 radius-12" id="your-password" placeholder="Confirm Password" />
            </div>
            <span className="toggle-password ri-eye-line cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light" data-toggle="#your-password" />
          </div>
          <span className="mt-12 text-sm text-secondary-light">Your password must have at least 8 characters</span>
        </div>
        <div className>
          <div className="d-flex justify-content-between gap-2">
            <div className="form-check style-check d-flex align-items-start">
              <input className="form-check-input border border-neutral-300 mt-4" type="checkbox" defaultValue id="condition" />
              <label className="form-check-label text-sm" htmlFor="condition">
                By creating an account means you agree to the 
                <a href="javascript:void(0)" className="text-primary-600 fw-semibold">Terms &amp; Conditions</a> and our 
                <a href="javascript:void(0)" className="text-primary-600 fw-semibold">Privacy Policy</a>
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32"> Sign Up</button>
        <div className="mt-32 center-border-horizontal text-center">
          <span className="bg-base z-1 px-4">Or sign up with</span>
        </div>
        <div className="mt-32 d-flex align-items-center gap-3">
          <button type="button" className="fw-semibold text-primary-light py-16 px-24 w-50 border radius-12 text-md d-flex align-items-center justify-content-center gap-12 line-height-1 bg-hover-primary-50"> 
            <iconify-icon icon="ic:baseline-facebook" className="text-primary-600 text-xl line-height-1" />
            facebook
          </button>
          <button type="button" className="fw-semibold text-primary-light py-16 px-24 w-50 border radius-12 text-md d-flex align-items-center justify-content-center gap-12 line-height-1 bg-hover-primary-50"> 
            <iconify-icon icon="logos:google-icon" className="text-primary-600 text-xl line-height-1" />
            Google
          </button>
        </div>
        <div className="mt-32 text-center text-sm">
          <p className="mb-0">Already have an account? <a href="sign-in.html" className="text-primary-600 fw-semibold">Sign In</a></p>
        </div>
      </form>
    </div>
  </div>
</section>

        </>
    );
}