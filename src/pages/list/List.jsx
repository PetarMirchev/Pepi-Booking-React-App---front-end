// HOTELS LIST

import React, { useState } from 'react';
import './list.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { useLocation } from 'react-router-dom';
import { format } from "date-fns";
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';


const List = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [options, setOptions] = useState(location.state.options);

    const [openDate, setOpenDate] = useState(false);
    console.log(location);

    return (
        <div>
            <Navbar />

            {/* when render "Header" we pass check to  see  we ar not in Home page! & chenge the CSS className rendered styles (by type="list")  */}
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label className="">Destination</label>
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className="lsItem">
                            <label>Check-in Date</label>

                            <span onClick={() => setOpenDate(!openDate)}>
                                {`${format(
                                    date[0].startDate,
                                    "MM/dd/yyyy"
                                )} to ${format(date[0].endDate, "MM/dd/yyyy")}`} </span>

                            {openDate && (
                                <DateRange onChange={(item) => setDate([item.selections])}
                                    minDate={new Date()}
                                    ranges={date} />
                            )}
                        </div>
                        <div className="lsItem">
                            <label>Options</label>
                            <div className="lsOptions">

                                <div className="lsOptionItem">
                                    <span className="isOptionText">Min price <small>per night</small></span>
                                    <input type="number" className="lsOptionInput" />
                                </div>

                                <div className="lsOptionItem">
                                    <span className="isOptionText">Max price <small>per night</small></span>
                                    <input type="number" className="lsOptionInput" />
                                </div>

                                <div className="lsOptionItem">
                                    <span className="isOptionText">Adult </span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
                                </div>

                                <div className="lsOptionItem">
                                    <span className="isOptionText">Children </span>
                                    <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
                                </div>

                                <div className="lsOptionItem">
                                    <span className="isOptionText">Room </span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
                                </div>

                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="listResult">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List;