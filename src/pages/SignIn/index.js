import './index.css';

function SignIn() {
   return (
      <div class="form-container">
            <div class="image-container">
                <img src="https://inkythuatso.com/uploads/thumbnails/800/2022/05/1-anh-gai-xinh-2k4-inkythuatso-07-15-20-27.jpg" alt="Your Image"/>
            </div>
            <div class="form-wrapper">
                <div class="form-header">
                    <h1>UNIVERSE</h1>
                    <h2>Sign In To Universe</h2>
                </div>
                <div class="signin-options">
                    <button class="google-signin"><img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google Logo"/> Sign in with Google</button>
                    <button class="facebook-signin"><img src="https://i0.wp.com/ladolcevitasarasota.com/wp-content/uploads/2023/03/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png?fit=1000%2C1000&ssl=1&w=640" alt="Facebook Logo"/> Sign in with Facebook</button>
                </div>
                <p class="or">— OR —</p>
                <form>
                    <div class="input-container">
                        <input type="email" placeholder="Email Address" class="input-field"/>
                        <div class="underline"></div>
                    </div>
                    <div class="input-container">
                        <input type="password" placeholder="Password" class="input-field"/>
                        <div class="underline"></div>
                    </div>
                    <button type="submit" class="SignIn">Sign in</button>
                </form>
                <p class="register-link"><a href="#">Register Now</a></p>
                <p class="fgpassword-link"><a href="#">Forget Password?</a></p>
            </div>
        </div>
   );
}

export default SignIn;
