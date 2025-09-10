export default function SignIn() {
  const comeIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputUsername = e.currentTarget.username.value;
    const inputPassword = e.currentTarget.password.value;

    if (inputUsername.trim() === "" || inputPassword.trim() === "") {
      return window.alert("You didn't enter anything!");
    }

    try {
      const res = await fetch(`http://localhost:3003/linkodkod/users/${inputUsername}`);
      
      const user = await res.json();
  
      if (user) {
        if (user.username === inputUsername || user.password === inputPassword) {
          window.alert("The details are correct.!\nYou are moving to another page.")
          window.location.href = "/home";
        }
      } else {
        window.alert("Failed to register player!");
      }
    } catch (err) {
      console.error("Error posting player:", err);
      window.alert("Server error!");
    }
  }
  
  return (
    <>
        <section className="page">
        <h1>היכנס</h1>
        <br />
        <form onSubmit={comeIn}>
            <span style={{ color: 'red' }}>*  </span>
            <label htmlFor="username">הכנס את שם המשתמש:</label>
            <br />
            <input className="input-btn"type="text" name="username" placeholder="לדוגמה: ישראל ישראלי" required/>
            <br />
            <br />
            <span style={{ color: 'red' }}>*  </span>
            <label htmlFor="password">הכנס סיסמה:</label>
            <br />
            <input className="input-btn" type="text" name="password" placeholder="לדוגמה: 1234" required/>
            <br />
            <br />
            <button type="submit">היכנס</button>
        </form>
        </section>
    </>
  )
}
