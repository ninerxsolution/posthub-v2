"use client";
import { useState } from "react";

export default function SignIn() {
  const [view, setView] = useState<"forgot" | "signin" | "signup">("signin");
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (view === "signup") {
      console.log("Sign up:", signUpData);
      return;
    }
    if (view === "signin") {
      console.log("Sign in:", signInData);
      return;
    }
    if (view === "forgot") {
      console.log("Request reset for:", forgotEmail);
      return;
    }
  };

  const handleSignInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };
  const [forgotEmail, setForgotEmail] = useState("");

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <section className="lg:col-span-7">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Join the conversation</h1>
          <p className="mt-3 max-w-xl text-sm text-neutral-600 dark:text-neutral-400">
            Share your ideas, connect with others, and grow your audience. Create posts,
            follow topics you love, and stay inspired every day.
          </p>
          <div className="mt-8 relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-amber-500/20 dark:border-neutral-700">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.25),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.25),transparent_45%),radial-gradient(circle_at_40%_80%,rgba(245,158,11,0.25),transparent_40%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-xl bg-white/60 px-4 py-2 text-sm font-medium text-neutral-700 backdrop-blur dark:bg-neutral-900/60 dark:text-neutral-200">
                Discover, Write, Share
              </div>
            </div>
          </div>
        </section>

        <section className="lg:col-span-5">
          <div className="w-full space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="mt-2 text-2xl font-semibold text-neutral-900 dark:text-white">
                {view === "signup" ? "Create your account" : view === "forgot" ? "Reset your password" : "Welcome back"}
              </h2>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                {view === "signup"
                  ? "Sign up to get started with Posthub"
                  : view === "forgot"
                  ? "We'll email you a password reset link"
                  : "Sign in to your account to continue"}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <div
                className={`flex w-[300%] transition-transform duration-500 ease-in-out ${
                  view === "signin"
                    ? "translate-x-[-33.333333%]"
                    : view === "signup"
                    ? "translate-x-[-66.666666%]"
                    : "translate-x-0"
                }`}
              >
                {/* Forgot Password Panel (left) */}
                <div className="w-1/3 px-2">
                  <div className="bg-white dark:bg-neutral-900 py-8 px-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="forgot-email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          Email address
                        </label>
                        <div className="mt-1">
                          <input
                            id="forgot-email"
                            name="forgot-email"
                            type="email"
                            autoComplete="email"
                            required
                            value={forgotEmail}
                            onChange={(e) => setForgotEmail(e.target.value)}
                            className="appearance-none relative block w-full px-3 py-3 border border-neutral-300 dark:border-neutral-600 placeholder-neutral-500 dark:placeholder-neutral-400 text-neutral-900 dark:text-white bg-white dark:bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-background bg-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
                        >
                          Send reset link
                        </button>
                      </div>

                      <div className="mt-6 text-center">
                        <button
                          type="button"
                          onClick={() => setView("signin")}
                          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                          Back to sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Sign In Panel (center) */}
                <div className="w-1/3 px-2">
                  <div className="bg-white dark:bg-neutral-900 py-8 px-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          Email address
                        </label>
                        <div className="mt-1">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={signInData.email}
                            onChange={handleSignInChange}
                            className="appearance-none relative block w-full px-3 py-3 border border-neutral-300 dark:border-neutral-600 placeholder-neutral-500 dark:placeholder-neutral-400 text-neutral-900 dark:text-white bg-white dark:bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          Password
                        </label>
                        <div className="mt-1">
                          <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={signInData.password}
                            onChange={handleSignInChange}
                            className="appearance-none relative block w-full px-3 py-3 border border-neutral-300 dark:border-neutral-600 placeholder-neutral-500 dark:placeholder-neutral-400 text-neutral-900 dark:text-white bg-white dark:bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                            placeholder="Enter your password"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-primary focus:ring-primary border-neutral-300 dark:border-neutral-600 rounded"
                          />
                          <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral-700 dark:text-neutral-300">
                            Remember me
                          </label>
                        </div>

                        <div className="text-sm">
                          <button
                            type="button"
                            onClick={() => setView("forgot")}
                            className="font-medium text-primary hover:text-primary/80 transition-colors"
                          >
                            Forgot your password?
                          </button>
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-background bg-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
                        >
                          Sign in
                        </button>
                      </div>

                      <div className="mt-6 text-center">
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                          Don&apos;t have an account?{" "}
                          <button
                            type="button"
                            onClick={() => setView("signup")}
                            className="font-medium text-primary hover:text-primary/80 transition-colors"
                          >
                            Sign up here
                          </button>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Sign Up Panel (right) */}
                <div className="w-1/3 px-2">
                  <div className="bg-white dark:bg-neutral-900 py-8 px-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          Name
                        </label>
                        <div className="mt-1">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={signUpData.name}
                            onChange={handleSignUpChange}
                            className="appearance-none relative block w-full px-3 py-3 border border-neutral-300 dark:border-neutral-600 placeholder-neutral-500 dark:placeholder-neutral-400 text-neutral-900 dark:text-white bg-white dark:bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                            placeholder="Enter your name"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          Email address
                        </label>
                        <div className="mt-1">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={signUpData.email}
                            onChange={handleSignUpChange}
                            className="appearance-none relative block w-full px-3 py-3 border border-neutral-300 dark:border-neutral-600 placeholder-neutral-500 dark:placeholder-neutral-400 text-neutral-900 dark:text-white bg-white dark:bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          Password
                        </label>
                        <div className="mt-1">
                          <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            required
                            value={signUpData.password}
                            onChange={handleSignUpChange}
                            className="appearance-none relative block w-full px-3 py-3 border border-neutral-300 dark:border-neutral-600 placeholder-neutral-500 dark:placeholder-neutral-400 text-neutral-900 dark:text-white bg-white dark:bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                            placeholder="Create a password"
                          />
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-background bg-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
                        >
                          Create account
                        </button>
                      </div>

                      <div className="mt-6 text-center">
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                          Already have an account?{" "}
                          <button
                            type="button"
                            onClick={() => setView("signin")}
                            className="font-medium text-primary hover:text-primary/80 transition-colors"
                          >
                            Sign in instead
                          </button>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
