import { FormEvent, useState } from "react";
import styles from "./Contact.module.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [errors, setErrors] =
    useState<FormErrors>({});

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [isSubmitted, setIsSubmitted] =
    useState(false);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: undefined,
    }));

    setIsSubmitted(false);
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message =
        "Please enter a message.";
    } else if (
      formData.message.trim().length < 10
    ) {
      newErrors.message =
        "Your message should be at least 10 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\n\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoUrl =
      `mailto:gbandedesmondkator@gmail.com` +
      `?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData(initialFormData);
    }, 500);
  };

  return (
    <section
      id="contact"
      className={styles.contact}
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className={styles.layout}>

          {/* =================================
              INTRODUCTION
          ================================= */}

          <div className={styles.introduction}>
            <p className={styles.eyebrow}>
              CONTACT
            </p>

            <h2 id="contact-title">
              Let's build something useful.
            </h2>

            <p className={styles.description}>
              Have a project, opportunity, or idea you'd
              like to discuss? Send me a message and I'll
              get back to you.
            </p>

            <a
              href="mailto:gbandedesmondkator@gmail.com"
              className={styles.email}
            >
              gbandedesmondkator@gmail.com
            </a>
          </div>


          {/* =================================
              CONTACT FORM
          ================================= */}

          <form
            className={styles.form}
            onSubmit={handleSubmit}
            noValidate
          >

            {/* NAME */}

            <div className={styles.field}>
              <label htmlFor="name">
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={
                  errors.name
                    ? "name-error"
                    : undefined
                }
                placeholder="Your name"
              />

              {errors.name && (
                <p
                  id="name-error"
                  className={styles.error}
                  role="alert"
                >
                  {errors.name}
                </p>
              )}
            </div>


            {/* EMAIL */}

            <div className={styles.field}>
              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email
                    ? "email-error"
                    : undefined
                }
                placeholder="Your email address"
              />

              {errors.email && (
                <p
                  id="email-error"
                  className={styles.error}
                  role="alert"
                >
                  {errors.email}
                </p>
              )}
            </div>


            {/* MESSAGE */}

            <div className={styles.field}>
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message
                    ? "message-error"
                    : undefined
                }
                placeholder="Tell me about your project..."
              />

              {errors.message && (
                <p
                  id="message-error"
                  className={styles.error}
                  role="alert"
                >
                  {errors.message}
                </p>
              )}
            </div>


            {/* SUBMIT */}

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Opening email..."
                : "Send Message"}
            </button>


            {/* SUCCESS */}

            {isSubmitted && (
              <p
                className={styles.success}
                role="status"
              >
                Your email client should now be open.
                Thank you for reaching out.
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;