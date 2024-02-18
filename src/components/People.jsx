import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "./partials/Searchbar";
import Dropdown from "./partials/Dropdown";
import Card from "./partials/Card";
import axios from "../../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
function People() {
  document.title = "People";
  const navigate = useNavigate();
  const [people, setPeople] = useState([]);
  const [category, setcategory] = useState("popular");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getPeople = async () => {
    const { data } = await axios.get(`person/popular?page=${page}`);
    if (data.results.length > 0) {
      setPeople((prev) => [...prev, ...data.results]);
      setPage((prev) => prev + 1);
    } else {
      setHasMore(false);
    }
  };

  const fetchMorePage = () => {
    if (people.length === 0) {
      getPeople();
    } else {
      setPage(page + 1);
      setPeople([]);
      getPeople();
    }
  };

  useEffect(() => {
    fetchMorePage();
  }, [category]);
  return (
    <div className="bg-[#1F1E24] w-full">
      <div className="flex w-full items-center justify-between px-6 py-4 ">
        <h1 className="text-2xl text-white">
          <i
            onClick={() => navigate(-1)}
            className="mr-2 cursor-pointer ri-arrow-left-line"
          ></i>
          People
        </h1>
        <div className="w-screen ">
          <Searchbar />
        </div>
        <div>
        </div>
      </div>
      <div className="w-screen">
        <InfiniteScroll
          dataLength={people.length}
          next={getPeople}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <div className="flex items-start justify-center flex-wrap gap-10 ">
            {people.map((item, index) => {
              return (
                <div key={index}>
                  <Card item={item} />
                  <div className="text-white font-bold text-xl pt-2 w-[15vw]">
                    {item.name ||
                      item.original_title ||
                      item.title ||
                      item.original_name}
                  </div>
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default People;
