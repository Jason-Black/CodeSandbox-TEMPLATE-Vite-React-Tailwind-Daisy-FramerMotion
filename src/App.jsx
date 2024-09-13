import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ThemeSwitcher2 from "./components/ThemeSwitcher2";
import ThemeSwitcher3 from "./components/ThemeSwitcher3";

function App() {
  const [state, setState] = useState(false);

  // Navigation paths still using javascript:void(0)
  const navigation = [
    { title: "Features", path: "javascript:void(0)" },
    { title: "Integrations", path: "javascript:void(0)" },
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Pricing", path: "javascript:void(0)" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block">
      <a href="javascript:void(0)">
        <img
          src="https://www.floatui.com/logo.svg"
          width={120}
          height={50}
          alt="Float UI logo"
        />
      </a>
      <div className="md:hidden">
        <button
          className="menu-btn text-gray-500 hover:text-gray-800"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="bg-slate-400 flex flex-col items-center gap-y-5 gap-x-6">
        Teal
        <button className="bg-yellow-600">I am button</button>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
        <button className="btn btn-primary">Button</button>
        <div className="carousel carousel-vertical rounded-box h-96">
          <div className="carousel-item h-full">
            <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" />
          </div>
        </div>
        <button className="btn btn-primary">One</button>
        <div className="avatar">
          <div className="w-24 rounded">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <label className="swap swap-flip  text-teal-300 text-9xl">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          <div className="swap-on">😈</div>
          <div className="swap-off">😇</div>
        </label>
        <button className="btn btn-secondary">Two</button>
        <button className="btn btn-accent btn-outline">Three</button>
        <ThemeSwitcher />
        <button class="btn rounded-full">One</button>
        <ThemeSwitcher2 />
        <button class="btn rounded-none px-16">Two</button>
        <ThemeSwitcher3 />
      </div>

      <main className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-teal-600 md:px-8">
          <div className="max-w-lg mx-auto space-y-3 sm:text-center">
            <h3 className="text-indigo-600 font-semibold">Contact</h3>
            <p className="text-yellow-400 text-3xl font-semibold sm:text-4xl">
              Get in touch
            </p>
            <p>We’d love to hear from you! Please fill out the form below.</p>
          </div>

          <div className="mt-12 max-w-lg mx-auto">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                <div>
                  <label className="font-medium">First name</label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Last name</label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-red-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Phone number</label>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                    <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                      <option>US</option>
                      <option>ES</option>
                      <option>MR</option>
                    </select>
                  </div>
                  <input
                    type="number"
                    placeholder="+1 (555) 000-000"
                    required
                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                ></textarea>
              </div>
              <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>

      <div>
        <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
          <Brand />
        </div>
        <nav
          className={`pb-5 md:text-sm ${
            state
              ? "absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent"
              : ""
          }`}
        >
          <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
            <Brand />
            <div
              className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                state ? "block" : "hidden"
              } `}
            >
              <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                {navigation.map((item, idx) => (
                  <li key={idx} className="text-gray-700 hover:text-gray-900">
                    <a href={item.path} className="block">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
                <a
                  href="javascript:void(0)"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                >
                  Sign in
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <section className="relative overflow-hidden py-28 px-4 bg-gray-900 md:px-8">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10"></div>
        <div className="max-w-xl mx-auto text-center relative">
          <div className="py-4">
            <h3 className="text-3xl text-gray-200 font-semibold md:text-4xl">
              Get Unlimited Access To All Templates
            </h3>
            <p className="text-gray-300 leading-relaxed mt-3">
              Nam erat risus, sodales sit amet lobortis ut, finibus eget metus.
              Cras aliquam ante ut tortor posuere feugiat. Duis sodales nisi id
              porta lacinia.
            </p>
          </div>
          <div className="mt-5 items-center justify-center gap-3 sm:flex">
            <a
              href="javascript:void()"
              className="block w-full mt-2 py-2.5 px-8 text-gray-700 bg-white rounded-md duration-150 hover:bg-gray-100 sm:w-auto"
            >
              Try It Out
            </a>
            <a
              href="javascript:void()"
              className="block w-full mt-2 py-2.5 px-8 text-gray-300 bg-gray-700 rounded-md duration-150 hover:bg-gray-800 sm:w-auto"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
