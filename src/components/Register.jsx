import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    await setDoc(
        doc(db, "users", user.uid)
    )
}

const Register = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>
        <p style={styles.subtitle}>Sign up to get started</p>

        <input type="text" placeholder="Full Name" style={styles.input} />
        <input type="email" placeholder="Email" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />

        <button style={styles.primaryBtn}>Register</button>

        <div style={styles.divider}>
          <span>OR</span>
        </div>

        <button style={styles.googleBtn}>
          <FcGoogle size={20} />
          Sign up with Google
        </button>

        <p style={styles.footerText}>
          Already have an account? <Link to={'/login'}><span style={styles.link}>Login</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f8fafc",
  },

  card: {
    width: "360px",
    padding: "30px",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    textAlign: "center",
  },

  title: {
    marginBottom: "5px",
  },

  subtitle: {
    marginBottom: "20px",
    color: "#64748b",
    fontSize: "14px",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #cbd5e1",
    outline: "none",
  },

  primaryBtn: {
    width: "100%",
    padding: "10px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  },

  divider: {
    margin: "18px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    color: "#94a3b8",
    fontSize: "12px",
  },

  googleBtn: {
    width: "100%",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    background: "#fff",
    cursor: "pointer",
    fontWeight: "500",
  },

  footerText: {
    marginTop: "15px",
    fontSize: "13px",
    color: "#475569",
  },

  link: {
    color: "#2563eb",
    cursor: "pointer",
    fontWeight: "500",
  },
};
