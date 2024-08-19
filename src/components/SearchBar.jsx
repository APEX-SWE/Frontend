import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { EventData } from "../data/EventData";
import Footer from "./Footer";

export default function SearchBar({ height, listTopMargin }) {
  const [showSearch, setShowSearch] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [searchList, setSearchList] = React.useState([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    if (searchValue) {
      const filteredData = EventData.filter((event) =>
        event.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSearchList(filteredData);
    } else {
      setSearchList([]);
    }
  }, [searchValue]);

  const handleSearchItemClick = (id) => {
    navigate(`/event/${id}`); // Navigate to event details page
  };

  return (
    <>
      <div
        className={`items-center p-1 flex justify-center border mt-4 rounded-full w-[60%] bg-white ${height}`}
      >
        <input
          className="w-full h-full rounded-full outline-none border-none pl-[30px] pr-2"
          placeholder="Search Events..."
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <div className="cursor-pointer h-[50px] w-[53px] rounded-full flex justify-center items-center bg-[#FFBC00]">
          <FontAwesomeIcon color="#fff" icon={faMagnifyingGlass} />
        </div>
      </div>
      <div
        className={`w-[60%] max-h-[300px] overflow-y-scroll bg-white fixed ${listTopMargin}`}
      >
        {searchList.length > 0
          ? searchList.map((event) => (
              <div
                key={event.id}
                className="flex justify-between items-center p-4 border-b-[1px] border-gray-200 hover:bg-[#F8F8F8] cursor-pointer"
                onClick={() => handleSearchItemClick(event.id)} // Add click handler
              >
                <div className="flex items-center gap-4">
                  <img
                    className="w-[80px] h-[50px] object-cover rounded-md"
                    src={event.image}
                    alt={event.name}
                  />
                  <h3>{event.name}</h3>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
}
