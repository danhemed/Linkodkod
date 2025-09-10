export default function SignUp() {
  const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputUsername = e.currentTarget.username.value;
    const inputPassword = e.currentTarget.password.value;

    console.log(`input`, inputUsername);
    console.log(`input`, inputPassword);

    if (inputUsername.trim() === "" || inputPassword.trim() === "") {
      return window.alert("You didn't enter anything!");
    }

    const newPlayer = { username: inputUsername, password: inputPassword }
    
    try {
      const res = await fetch(`http://localhost:3003/linkodkod/users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newPlayer),
        });
      if (res.ok) {
        window.alert("User created successfully!\nYou are moving to another page.")
        window.location.href = "/home";
      } else {
        window.alert("Failed to register user!");
      }
    } catch (err) {
      console.error("Error posting user:", err);
      window.alert("Server error!");
    }
  };


  return (
    <>
      <section className="page">
        <h1>Sign Up</h1>
        <br />
        <form onSubmit={createUser}>
          <span style={{ color: 'red' }}>*  </span>
          <label htmlFor="username">Enter User Name:</label>
          <br />
          <input className="input-btn" type="text" name="username" placeholder="example: israel israeli" required />
          <br />
          <br />
          <span style={{ color: 'red' }}>*  </span>
          <label htmlFor="password">Enter Password:</label>
          <br />
          <input className="input-btn" type="text" name="password" placeholder="example: 1234" required />
          <br />
          <br />
          <button type="submit">Register</button>
        </form>
      </section>
    </>
  )
}
