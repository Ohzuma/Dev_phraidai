import React, { useEffect, useState } from "react";
import { data } from "../data";

const JobCard = () => {
  const [filterValue, setFilterValue] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [Jobs, setJobs] = useState([]);
  const [filterNav, setFilterNav] = useState(false);

  useEffect(() => {
    setJobs(data);
  }, []);

  useEffect(() => {
    doFilter();
  }, [filterValue]);

  useEffect(() => {
    setFilteredJobs(Jobs);
  }, [Jobs]);

  const filter = (el) => {
    !filterValue.includes(el) && setFilterValue((filter) => [...filter, el]);
  };

  const doFilter = () => {
    setFilteredJobs(
      Jobs.filter((item) =>
        filterValue.every((filter) => {
          return [
            item.role,
            item.level,
            ...item.languages,
            ...item.tools,
          ].includes(filter);
        })
      )
    );
  };
  useEffect(() => {
    checkFilter();
  });

  const checkFilter = () => {
    if (filterValue.length > 0) {
      setFilterNav(true);
    }
  };

  const clear = () => {
    setFilterValue([]);
    setFilterNav(false);
    setFilteredJobs(Jobs);
  };

  const remove = (el) => {
    setFilterValue((filters) => {
      filters.filter((elem) => {
        return elem !== el;
      });
    });
  };

  return (
    <div className="relative flex gap-[5rem]">
      <div
        className={`absolute -top-[4rem] rounded-md nav gap-4  h-[5rem] w-full bg-white shadow-md items-center justify-between flex-wrap px-12  ${
          filterNav ? "flex" : "hidden"
        }`}
      >
        <div className="flex items-center gap-4">
          {filterValue.length > 0
            ? filterValue.map((el, i) => {
                return (
                  <span key={i}>
                    <button className="filtered">{el}</button>{" "}
                    <button
                      className="clear"
                      onClick={(e) => {
                        remove(el);
                      }}
                    >
                      X
                    </button>
                  </span>
                );
              })
            : null}

          {/* {filterValue.map((el) => {
            return (
              <span>
                <button className="filtered">{el}</button>{" "}
                <button
                  className="clear"
                  onClick={(e) => {
                    remove(el);
                  }}
                >
                  X
                </button>
              </span>
            );
          })} */}
        </div>
        <button
          onClick={clear}
          className="text-DesaturatedDarkCyan underline underline-offset-4 font-[700] cursor-pointer text-[15px] hover:text-VeryDarkGrayishCyan"
        >
          Clear
        </button>
      </div>

      <article className="flex flex-col gap-12 w-full mt-[3rem]">
        {filteredJobs.map((item, i) => {
          return (
            <section
              key={i}
              className="flex px-5 md:px-10 py-5 md:py-7 h-[100%] md:h-[10rem] bg-white shadow-DesaturatedDarkCyan/30 shadow-lg justify-center md:items-center md:justify-between rounded-md w-full flex-col md:flex-row"
            >
              <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-5 md:gap-[2rem]">
                <img src={item.logo} alt={item.company} />
                <article className="flex flex-col gap-2">
                  <div className="flex gap-[1rem]">
                    <span className="font-[700] text-[15px] text-DesaturatedDarkCyan">
                      {item.company}
                    </span>
                    <span
                      className={`${
                        item.new === true
                          ? "bg-DesaturatedDarkCyan text-LightGrayishCyan rounded-full text-[15px] px-3 py-1 font-[700] h-7 text-center flex-col justify-center items-center uppercase "
                          : null
                      }`}
                    >
                      {item.new !== false ? "New!" : null}
                    </span>
                    <span
                      // className="bg- px-3 py-1 font-bold text-white rounded-full"
                      className={`${
                        item.featured === true
                          ? "bg-VeryDarkGrayishCyan text-white text-[15px] rounded-full px-3 py-1 font-[700] h-7 text-center flex-col justify-center items-center uppercase  "
                          : null
                      }`}
                    >
                      {item.featured !== false ? "Featured" : null}
                    </span>
                  </div>
                  <h1 className="font-[700] text-VeryDarkGrayishCyan text-xl hover:text-DesaturatedDarkCyan cursor-pointer">
                    {item.position}
                  </h1>
                  <div className="flex gap-5 items-center font-[500] text-DarkGrayishCyan text-lg">
                    <span>{item.postedAt} </span> .<span>{item.contract} </span>{" "}
                    .<span>{item.location}</span>
                  </div>
                </article>
              </div>
              <hr className="my-7 md:hidden" />
              <div className="flex flex-wrap gap-5 text-[1.2rem] text-DesaturatedDarkCyan font-[700] btn">
                <button
                  onClick={() => {
                    filter(item.role);
                  }}
                >
                  {item.role}
                </button>
                <button
                  onClick={() => {
                    filter(item.level);
                  }}
                >
                  {item.level}
                </button>
                {item.languages.map((data, i) => {
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        filter(data);
                      }}
                    >
                      {data}
                    </button>
                  );
                })}

                {item.tools.length >= 1
                  ? item.tools.map((data, i) => {
                      return (
                        <button
                          key={i}
                          onClick={() => {
                            filter(data);
                          }}
                        >
                          {data}
                        </button>
                      );
                    })
                  : ""}
              </div>
            </section>
          );
        })}
      </article>
    </div>
  );
};

export default JobCard;
