import ReactPaginate from 'react-paginate';
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import YearSelector from '../../sharedComponents/YearSelector';
import {
  generateDates,
  generateDummyData,
  generateMonthNames,
  getRandomNumber,
  OCCUPANCY_STATUS,
  statusDetails
} from "../../../utils/helper";

import './FrontDesk.css';

const FrontDesk = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPerPage, setPerPage] = useState(6);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [currentStatus, setCurrentStatus] = useState(OCCUPANCY_STATUS.BOOKINGS);
  const [months, setMonths] = useState([]);
  const [days, setDays] = useState([]);
  const [bookingDetails, setBookingDetails] = useState([]);
  const spansRef = useRef({});
  const randomColors = ['rgb(45 212 191)', "rgb(134 25 143)", "rgb(248 113 113)", "rgb(250 204 21)", "rgb(96 165 250)", "rgb(147 51 234)"];
  const randomBgColors = ['rgba(45, 212, 191, 0.1)', "rgba(134, 25, 143, 0.1)", "rgba(248, 113, 113, 0.1)", "rgba(250, 204, 21, 0.1)", "rgba(96, 165, 250, 0.1)", "rgba(147, 51, 234, 0.1)"];
  const perPageOptions = [6, 12, 18, 24, 30];

  const setRef = (roomNumber, index, el) => {
    const key = `${roomNumber}-${index}`;
    spansRef.current[key] = el;
  };

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    setSelectedYear(currentYear);
    setSelectedMonth(currentMonth);
    setMonths(generateMonthNames());
    setDays(generateDates(currentMonth, currentYear));
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('type', currentStatus);
    navigate({
      pathname: location.pathname,
      search: `?${queryParams.toString()}`,
    }, { replace: true });
  }, []);

  useEffect(() => {
    santizeDummyData();
  }, [selectedMonth, selectedYear, currentStatus, currentPage, currentPerPage])


  const santizeDummyData = () => {
    const bookingDummyData = generateDummyData(selectedYear, selectedMonth);
    const dummyData = bookingDummyData.map((data) => {
      return {
        ...data,
        bookings: data.bookings.map((bookingValue) => {
          const cloneBookingValue = {...bookingValue};
          cloneBookingValue.checkout = cloneBookingValue.checkin >= 28 ? 2 : cloneBookingValue.checkout;
          cloneBookingValue.checkout = cloneBookingValue.checkin > cloneBookingValue.checkout ? days[days.length - 1] : cloneBookingValue.checkout; 
          const getSelectedRefValue = getLineTopValue(data.roomNumber, cloneBookingValue.checkin, cloneBookingValue.checkout);
          const randomNumber = getRandomNumber();
          return {
            ...cloneBookingValue,
            color: randomColors[randomNumber],
            backgroundColor: randomBgColors[randomNumber],
            left: getSelectedRefValue?.left,
            width: getSelectedRefValue?.width
          }
        })
      }
    });
    setBookingDetails([...dummyData]);
  }



  const onClickMonth = (monthIndex) => {
    setSelectedMonth(monthIndex + 1);
    setDays(generateDates(monthIndex + 1, selectedYear));
  }

  const getLineTopValue = (roomNumber, checkIn, checkOut) => {
    const startIndex = checkIn - (currentStatus === OCCUPANCY_STATUS.CHECK_IN ? 1 : 0);
    const endIndex = checkOut + 1;
    const key = `${roomNumber}-${startIndex}`;
    const span = spansRef.current[key];
    if (span) {
          const leftPosition = span.getBoundingClientRect().left;
          return {
            left: `${leftPosition - 285}px`,
            width: `${(endIndex - startIndex - 1)*37}px`
          }
      }
  };

  const onClickStatus = (name) => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('type', name);
    navigate({
      pathname: location.pathname,
      search: `?${queryParams.toString()}`,
    }, { replace: true });
    setCurrentStatus(name);
  }

  const handlePageClick = ($event) => {
    setCurrentPage($event.selected);
  }


  return (
    <div className="date-container bg-white">
      <div className="year-container">
        <div className="me-5">{statusDetails.map((status, index) => (<button className={`${status.className} ${currentStatus === status.name ?  status.activeColor : '' }`} key={status.name + index} onClick={() => onClickStatus(status.name)}>{status.name}</button>))}</div>
        <label><b>Select Year: </b>&nbsp;&nbsp;</label>
        <YearSelector year={selectedYear} onChangeYear={($event) => setSelectedYear($event)} />
      </div>
      <div className="months-container">
        {months?.map((month, index) => (<div className={`month-content ${index + 1 === selectedMonth ? 'active' : ''}`} key={month + index} onClick={() => onClickMonth(index)}>{month}</div>))}
      </div>
      {/* DAYS-CONTAINER */}
      <div className="days-container">
        <table>
          <thead>
            <tr>
              <th className="room-header"></th>
              {days?.map((day, index) => (<th key={day+index+'th'}>{day}</th>))}
            </tr>
          </thead>
          <tbody>
            {bookingDetails.slice((Number(currentPage) * currentPerPage), (Number(currentPage) * currentPerPage) + currentPerPage).map((room) => {
              return(
                <tr key={room.id}>
                  { currentStatus === OCCUPANCY_STATUS.CHECK_IN && <td>{room.roomNumber}</td>}
                  {days?.map((day, index) => (
                    <td
                      key={day + index + 'td'}
                      className={ index === days.length - 1 ? 'last-child' : ''}
                      ref={(el) => setRef(room.roomNumber, index, el)}
                    ></td>
                  ))}
                  {room.bookings.map((bookingValue, index) => {
                    return (<div key={bookingValue.name + index} className="cover-div" style={{ left: bookingValue.left, width: bookingValue.width, color: bookingValue.color, backgroundColor: bookingValue.backgroundColor}} title={bookingValue?.name}>
                      { bookingValue.name }
                    </div>)
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {/* PAGINATION_CONTAINER */}
      <div className="pagination-container">
        <select className="per-page" value={currentPerPage} onChange={($event) => setPerPage($event.target.value)}>
            {perPageOptions.map((option, index) => (<option key={option + index} value={option}>{option}</option>))}
        </select>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={bookingDetails?.length}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          activeClassName="active"
          forcePage={currentPage}
        />
      </div>
      {/* <CustomModal /> */}
    </div>
  )
};

export default FrontDesk;