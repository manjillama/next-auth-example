"use client";
import { Alert, Spinner } from "@/components/ui";
import { post } from "@/utils/api";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SignInForm() {
  const router = useRouter();
  const [formProps, setFormProps] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, type, checked } = event.currentTarget;
    let { value } = event.currentTarget;
    if (type === "checkbox") value = checked as any;

    setFormProps({
      ...formProps,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    post("/api/signup", formProps)
      .then((data) => {
        console.log("Success", data.errors);
        setErrors(data.errors);
      })
      .catch((err) => console.error("Failed", err))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="container max-w-xs mx-auto mt-[10%]">
      <h1 className="text-3xl font-bold">Sign up</h1>
      <form onSubmit={handleSubmit} className="space-y-4 my-4">
        {errors.length ? (
          <Alert>
            <ul className="pl-4 list-disc">
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </Alert>
        ) : null}
        <div>
          <label className="space-y-2">
            <span>Your full name</span>
            <input
              className="border border-neutral-300 w-full rounded-lg p-3"
              name="name"
              type="text"
              value={formProps.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label className="space-y-2">
            <span>Email</span>
            <input
              className="border border-neutral-300 w-full rounded-lg p-3"
              name="email"
              type="email"
              value={formProps.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label className="space-y-2">
            <span>Password</span>
            <input
              className="border border-neutral-300 w-full rounded-lg p-3"
              name="password"
              type="password"
              value={formProps.password}
              onChange={handleChange}
            />
          </label>
        </div>

        <button
          disabled={isSubmitting}
          style={{
            opacity: isSubmitting ? 0.6 : 1,
          }}
          className="bg-black h-14 text-white w-full rounded-lg p-3 relative"
          type="submit"
        >
          {isSubmitting && (
            <div className="text-left absolute">
              <Spinner />
            </div>
          )}
          Sign up
        </button>
      </form>
    </div>
  );
}
