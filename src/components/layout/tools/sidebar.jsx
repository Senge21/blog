import { useState } from "react";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSideBar, setshowSideBar] = useState(false);

  const handleOpen = () => {
    setShowMenu(!showMenu);

    setTimeout(() => {
      setshowSideBar(!showSideBar);
    }, 10);
  };

  const handleClose = () => {
    setshowSideBar(!showSideBar);
    setTimeout(() => {
      setShowMenu(!showMenu);
    }, 400);
  };

  return (
    <>
      <div className=" h-[100vh] p-3 flex justify-between relative">
        <div>Pine cone </div>
        <button
          onClick={handleOpen}
          className="h-[40px] w-[70px] border-red-300 rounded-md border-[2px]"
        >
          Open
        </button>
      </div>
      {showMenu && (
        <div>
          <div
            onClick={handleClose}
            className={` ${
              showSideBar && "bg-black"
            }  bg-opacity-30 w-[100vw] h-[100vh] absolute left-0 top-0 transition-all duration-300  ease-in-out`}
          ></div>

          {/* Side barnii tsagaan contenttei heseg */}
          <div className="absolute top-0 right-0 overflow-hidden w-[70vw] h-[100vh]">
            <div
              className={`bg-white h-[100vh] w-[100%] p-5 absolute top-0 right-0 ${
                showSideBar ? "translate-x-0" : "translate-x-[100vw]"
              } transition-all duration-300  ease-in-out`}
            >
              <div className="flex justify-between">
                <h2>Pinecone</h2>
                <button
                  onClick={handleClose}
                  className="h-[40px] w-[40px] border-red-300 rounded-md border-[2px]"
                >
                  X
                </button>
              </div>
              <div>
                <h4>Hello</h4>
                <h4>Pinecone</h4>
                <h4>Admin</h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://randomuser.me/api/?results={count}");
      setData(await res.json());
    }
    fetchData();
  }, [count]);

  return (
    <div>
      <div>
        <button
          className=" border-[2px] rounded-md border-red-400 w-[200px] h-[50px]"
          onClick={() => setCount(count + 1)}
        >
          Add
        </button>
      </div>

      <h1>{count}</h1>
    </div>
  );
};

export default Sidebar;
