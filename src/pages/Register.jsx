import { useState } from "react";

const initialForm = {
  name: "",
  collegeName: "",
  courseName: "",
  phone: "",
  specialization: "",
  email: "",
  heardFrom: "",
};

export default function Register() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const scriptUrl = "https://script.google.com/macros/s/AKfycbw6Uvgj_njYXIW8fSYGtcHNupST9I8eORKHHs9usUTkrVH-CX2FQDZFBQ-X7hEW6lAM/exec";

  const updateField = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const validate = () => {
    const { name, collegeName, courseName, phone, specialization, email, heardFrom } = form;
    if (!name || !collegeName || !courseName || !phone || !specialization || !email || !heardFrom) return "All fields are required.";
    if (!/^[6-9]\d{9}$/.test(phone)) return "Enter a valid 10-digit phone number.";
    if (!email.includes("@") || !email.includes(".")) return "Enter a valid email address.";
    return null;
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const error = validate();
    if (error) {
      alert(error);
      return;
    }
    setSubmitting(true);
    await fetch(scriptUrl, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setMessage("Registration submitted successfully!");
    setTimeout(() => setMessage(""), 3000);
    setForm(initialForm);
    setSubmitting(false);
  };

  return (
    <div className="registration_page_wrapper">
      {message && <div className="popup success-popup animate-popup">{message}</div>}
      <div className="glass-form animate-form">
        <img src="/animations/students_19011419.gif" className="form-logo" alt="Students" />
        <h2 className="form-title">Student Registration</h2>
        <form onSubmit={submitForm}>
          {[
            ["ti-user", "text", "name", "Full Name"],
            ["ti-home", "text", "collegeName", "College Name"],
            ["ti-book", "text", "courseName", "Course Name"],
            ["ti-mobile", "text", "phone", "Phone Number"],
            ["ti-target", "text", "specialization", "Specialization Interested"],
            ["ti-email", "email", "email", "Email"],
            ["ti-announcement", "text", "heardFrom", "How did you hear about Alpha IT?"],
          ].map(([icon, type, name, placeholder]) => (
            <div className="input-group" key={name}>
              <i className={icon} />
              <input type={type} name={name} placeholder={placeholder} className="input-field" value={form[name]} onChange={updateField} />
            </div>
          ))}
          <button type="submit" className="submit-btn" disabled={submitting}>
            {submitting ? <div className="loader" /> : "Submit Registration"}
          </button>
        </form>
      </div>
    </div>
  );
}
