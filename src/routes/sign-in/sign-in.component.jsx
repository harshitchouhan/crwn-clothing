import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "./../../utlis/firebase/firebase.utlis";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(user);
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sing in with Google</button>
    </div>
  );
};

export default SignIn;
