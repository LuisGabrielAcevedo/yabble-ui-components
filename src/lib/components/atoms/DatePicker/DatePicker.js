import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { PrimaryButtonRectangle, SubtleButton } from "../Buttons/Buttons";
import { DatePickerInput } from "../Inputs/Inputs";
import { Select } from "../Select/Select";
import {
  weekDays,
  month,
  years,
  compareDates,
  getCalendar,
  addMonth,
  filterYears,
  getDate,
  dayjsDate,
  subtractMonth,
  isLessThanTheMinimum,
  startMonthsFilters,
  isGreaterThanMaximun,
  isTheSameMonth,
} from "./data";
import "./DatePicker.scss";
import errorIcon from "../../../assets/icons/svg/error.svg";

const getDatesBetweenDates = (startDate, endDate) => {
  let dates = [];
  let _startDate = dayjs(startDate);
  const _endDate = dayjs(endDate);
  while (_startDate.isBefore(_endDate)) {
    dates = [...dates, _startDate.format("YYYY-MM-DD")];
    _startDate = _startDate.add(1, "day");
  }
  dates = [...dates, _endDate.format("YYYY-MM-DD")];
  return dates;
};

const getDateParams = (date) => {
  const splitDate = date.split("-");
  return {
    day: +splitDate[2],
    month: +splitDate[1],
    year: +splitDate[0],
  };
};

export const Calendar = (props) => {
  const {
    intervalDate,
    setIntervalDate,
    monthList,
    yearList,
    startDateSelected,
    endDateSelected,
    setDateSelectedAction,
    isValid,
    hoverDate,
    setHoverDate,
    max,
    disabled,
    type,
  } = props;
  const [calendar, setCalendar] = useState([]);
  const _intervalDate = getDateParams(intervalDate);
  const { month: _month, year: _year } = _intervalDate;
  const _startDateSelected = dayjs(startDateSelected);
  const _endDateSelected = dayjs(endDateSelected);
  const _max = dayjs(max);
  const _hoverDate = dayjs(hoverDate);
  const _hoverDateDiff = Math.abs(
    _startDateSelected.diff(hoverDate, "day", false)
  );

  const hanldeHoverDate = (day) => {
    if (day) setHoverDate(getDate(_year, _month, day));
  };

  useEffect(() => {
    setCalendar(getCalendar(+_year, +_month - 1));
  }, [_year, _month]);

  const handleIntervalMonth = (monthValue) =>
    setIntervalDate(getDate(_year, monthValue, 1));
  const handleIntervalYear = (yearValue) =>
    setIntervalDate(getDate(yearValue, _month, 1));
  const _isValid = (day) => isValid(getDate(_year, _month, day));

  const handleDaySelected = (day) => {
    if (day && _isValid(day))
      setDateSelectedAction(getDate(_year, _month, day), type);
  };

  // Color claro cuando esta en el intervalo seleccionado
  const isIntervalSelectedDay = (day) =>
    compareDates(
      startDateSelected,
      endDateSelected,
      getDate(_year, _month, day)
    );

  const calMainCircleBackground = (day) => {
    const currentDate = dayjsDate(_year, _month, day);

    // Color claro cuando el dia esta entre startDateSelected y el hover y no existe endDateSelected
    const isIntervalHoverDay = (day) => {
      if (hoverDate && !endDateSelected) {
        return compareDates(
          startDateSelected,
          hoverDate,
          getDate(_year, _month, day)
        );
      }
      return false;
    };

    return day &&
      _isValid(day) &&
      (isIntervalSelectedDay(day) ||
        isIntervalHoverDay(day) ||
        _startDateSelected.isSame(currentDate))
      ? "#E6EDFD"
      : "white";
  };

  const getMainCircleStyle = (day, index, week) => {
    const currentDate = dayjsDate(_year, _month, day);
    const lastDay = currentDate.daysInMonth();
    let _styles = {
      width: 40,
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: calMainCircleBackground(day),
    };

    if (
      // Primer dia del mes
      day === 1 ||
      // Primer dia de fila
      index === 0 ||
      // startDateSelected es igual al currentDate
      _startDateSelected.isSame(currentDate)
    ) {
      _styles = {
        ..._styles,
        borderBottomLeftRadius: "25px",
        borderTopLeftRadius: "25px",
      };
    }

    if (
      // Ultimo dia de mes
      lastDay === day ||
      // Ultimo dia de fila
      week.length - 1 === index ||
      // endDateSelected es igual al currentDate
      _endDateSelected.isSame(currentDate) ||
      //
      (!endDateSelected &&
        ((currentDate.isAfter(_startDateSelected) &&
          currentDate.isSame(_hoverDate)) ||
          _hoverDate.isBefore(_startDateSelected) ||
          (_hoverDateDiff === 0 && currentDate.isSame(_hoverDate)))) ||
      (_hoverDate.isAfter(_max) && _max.isSame(currentDate)) ||
      (startDateSelected && !hoverDate && !endDateSelected)
    ) {
      _styles = {
        ..._styles,
        borderBottomRightRadius: "25px",
        borderTopRightRadius: "25px",
      };
    }
    return _styles;
  };

  const calSecondaryCircleBackground = (day) => {
    const currentDate = dayjsDate(_year, _month, day);
    let _styles = {};
    if (day) {
      if (!_isValid(day)) {
        _styles = {
          backgroundColor: "white",
          color: "#dddddd",
        };
      }

      if (
        _isValid(day) &&
        (currentDate.isSame(_startDateSelected) ||
          currentDate.isSame(_endDateSelected) ||
          (currentDate.isAfter(_startDateSelected) &&
            currentDate.isSame(_hoverDate) &&
            !endDateSelected))
      ) {
        _styles = {
          backgroundColor: "#2c6ced",
          color: "white",
        };
      }
    }

    return _styles;
  };

  const hoverClassSelected = (day) => {
    if (day) {
      return day && isIntervalSelectedDay(day)
        ? "calendar-week-day-text-interval"
        : "calendar-week-day-text";
    }
  };

  const getSecondaryCircleStyle = (day) => {
    let _styles = {
      width: 32,
      height: 32,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      ...calSecondaryCircleBackground(day),
    };
    return _styles;
  };

  let disabledMoth = [];
  let disabledYear = [];
  if (disabled) {
    const _disabled = getDateParams(disabled);
    const { month: _dmonth, year: _dyear } = _disabled;
    disabledMoth = month().filter((m) => m.value === _month);
    disabledYear = [
      {
        value: +_dyear,
        label: +_dyear,
      },
    ];
  }

  const onMouseLeaveCalendar = () => setHoverDate(null);

  return (
    <div className="date-picker-calendar">
      <div className="date-picker-calendar-inputs">
        <div style={{ marginRight: "6px" }}>
          <Select
            options={disabled ? disabledMoth : monthList}
            value={_month}
            onChange={(e) => {
              handleIntervalMonth(e.target.value);
            }}
            disabled={!!disabled}
            style={{ width: "130px" }}
          />
        </div>
        <Select
          options={disabled ? disabledYear : yearList}
          value={_year}
          onChange={(e) => {
            handleIntervalYear(e.target.value);
          }}
          disabled={!!disabled}
          style={{ width: "80px" }}
        />
      </div>
      <div className="date-picker-calendar-content">
        <div className="calendar-header">
          {weekDays().map((d, i) => (
            <div key={i} className="calendar-header-day">
              <span className="calendar-header-day-text">{d.shortLabel}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="calendar-week" onMouseLeave={onMouseLeaveCalendar}>
        {calendar.map((week, j) => (
          <div key={j} className="calendar-week-days">
            {week.map((day, k) => (
              <div
                key={k}
                data-testid={`calendar-day-${type}-${day}`}
                className="calendar-week-day-content"
                onClick={() => handleDaySelected(day)}
              >
                <div
                  data-testid={`day-${type}-${day}`}
                  style={getMainCircleStyle(day, k, week)}
                  onMouseOver={() => {
                    hanldeHoverDate(day);
                  }}
                >
                  <div
                    style={getSecondaryCircleStyle(day)}
                    className={hoverClassSelected(day)}
                  >
                    <span className="calendar-text">{day || ""}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const DatePicker = (props) => {
  const {
    handleChangeDate,
    startValue,
    endValue,
    max,
    min,
    disabled,
    filters,
    id,
    setDisabled,
  } = props;
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);
  const [startIntervalDate, setStartIntervalDate] = useState(
    dayjs(new Date()).format("YYYY-MM-DD")
  );
  const [endIntervalDate, setEndIntervalDate] = useState(
    dayjs(new Date()).format("YYYY-MM-DD")
  );
  const [startDateSelected, setStartDateSelected] = useState(null);
  const [endDateSelected, setEndDateSelected] = useState(null);
  const [endMonths, setEndMonths] = useState(month());
  const [endYears, setEndYears] = useState(years());
  const [startMonths, setStartMonths] = useState(month());
  const [startYears, setStartYears] = useState(years());

  const [startDisabled, setStartDisabled] = useState("");
  const [endDisabled, setEndDisabled] = useState("");

  const _min = dayjs(min).format("YYYY-MM-DD");
  const _max = dayjs(max).format("YYYY-MM-DD");

  useEffect(() => {
    if (startDateSelected && endDateSelected) {
      const _filters = filters.filter((f) => f.id !== id);
      let invalidDate = null;
      const selectedDates = getDatesBetweenDates(
        startDateSelected,
        endDateSelected
      );
      selectedDates.forEach((date) => {
        _filters.forEach((filter) => {
          const valid = compareDates(
            filter.values.startDate,
            filter.values.endDate,
            date
          );
          if (valid) invalidDate = { ...filter.values };
        });
      });
      setError(invalidDate);
    }
  }, [filters, startDateSelected, endDateSelected]);

  useEffect(() => {
    setDisabled(showModal);
    if (showModal) {
      const _years = filterYears(_min, _max);
      setStartYears(_years);
      setEndYears(_years);
      setStartIntervalDate(_min);
      const endInterval = addMonth(_min);
      setEndIntervalDate(endInterval);
      const _months = startMonthsFilters(_min, _max, _min);
      setStartMonths(_months);
      const _endMonths = startMonthsFilters(_min, _max, endInterval);
      setEndMonths(_endMonths);
      // Update selection
      if (startValue && endValue) {
        const _fomattedStart = dayjs(startValue);
        const _formattedEnd = dayjs(endValue);
        const _startMonth = _fomattedStart.month() + 1;
        const _startYear = _fomattedStart.year();
        const _endMonth = _formattedEnd.month() + 1;
        const _endYear = _formattedEnd.year();
        if (_startMonth === _endMonth && _startYear === _endYear) {
          const _start = getDate(_startYear, _startMonth, 1);
          setStartIntervalDate(_start);
          const _end = addMonth(_start);
          setEndIntervalDate(_end);
          const _months = startMonthsFilters(_min, _max, _start);
          setStartMonths(_months);
          const _endMonths = startMonthsFilters(_min, _max, _end);
          setEndMonths(_endMonths);
        } else {
          const _start = getDate(_startYear, _startMonth, 1);
          const _end = getDate(_endYear, _endMonth, 1);
          setStartIntervalDate(_start);
          setEndIntervalDate(_end);
          const _months = startMonthsFilters(_min, _max, _start);
          setStartMonths(_months);
          const _endMonths = startMonthsFilters(_min, _max, _end);
          setEndMonths(_endMonths);
        }
        setStartDateSelected(_fomattedStart.format("YYYY-MM-DD"));
        setEndDateSelected(_formattedEnd.format("YYYY-MM-DD"));
      }
    }
  }, [showModal]);

  const setDateSelectedAction = (date, type) => {
    const _date = dayjs(date);
    const _start = dayjs(startDateSelected);
    const _end = dayjs(endDateSelected);
    if (type === "from") {
      if (!startDateSelected) {
        setStartDateSelected(date);
        setEndDateSelected(null);
      } else {
        if (_date.isBefore(_start)) {
          setStartDateSelected(date);
        } else {
          if (!endDateSelected) {
            setEndDateSelected(date);
          } else {
            if (_date.isBefore(_end)) {
              setEndDateSelected(date);
            } else {
              setStartDateSelected(date);
              setEndDateSelected(null);
            }
          }
        }
      }
    }

    if (type === "to") {
      if (!startDateSelected) {
        setStartDateSelected(date);
        setEndDateSelected(null);
      } else {
        if (_date.isBefore(_start)) {
          setStartDateSelected(date);
        } else {
          setEndDateSelected(date);
        }
      }
    }
  };

  useEffect(() => {
    let _startIntervalDate = dayjs(startIntervalDate);
    _startIntervalDate = dayjs(
      getDate(_startIntervalDate.year(), _startIntervalDate.month() + 1, 1)
    );
    let _endIntervalDate = dayjs(endIntervalDate);
    _endIntervalDate = dayjs(
      getDate(_endIntervalDate.year(), _endIntervalDate.month() + 1, 1)
    );
    let formattedMin = dayjs(_min);
    formattedMin = dayjs(
      getDate(formattedMin.year(), formattedMin.month() + 1, 1)
    );
    let formattedMax = dayjs(_max);
    formattedMax = dayjs(
      getDate(formattedMax.year(), formattedMax.month() + 1, 1)
    );

    if (_startIntervalDate.isBefore(formattedMin)) {
      setStartDisabled(_startIntervalDate.format("YYYY-MM-DD"));
    } else {
      setStartDisabled("");
    }
    if (_endIntervalDate.isAfter(formattedMax)) {
      setEndDisabled(_endIntervalDate.format("YYYY-MM-DD"));
    } else {
      setEndDisabled("");
    }
  }, [startIntervalDate, endIntervalDate]);

  const setIntervalDates = (start, end) => {
    setStartIntervalDate(start);
    setEndIntervalDate(end);
    const _startMonths = startMonthsFilters(_min, _max, start);
    setStartMonths(_startMonths);
    const _endMonths = startMonthsFilters(_min, _max, end);
    setEndMonths(_endMonths);
  };

  const setStartIntervalDateAction = (date) => {
    let _date = isLessThanTheMinimum(_min, date) ? _min : date;
    _date = isGreaterThanMaximun(_max, _date) ? _max : _date;
    let start = _date;
    let end = endIntervalDate;
    if (isTheSameMonth(_max, start)) {
      start = subtractMonth(end);
      end = _max;
    }
    // In the from date section, if a user selects a month / year that is AFTER the to date, then the to date should default to the month after the from date.
    if (isGreaterThanMaximun(end, start) || isTheSameMonth(end, start)) {
      end = addMonth(start);
    }
    setIntervalDates(start, end);
  };

  const setEndIntervalDateAction = (date) => {
    let _date = isLessThanTheMinimum(_min, date) ? _min : date;
    _date = isGreaterThanMaximun(_max, _date) ? _max : _date;
    let start = startIntervalDate;
    let end = _date;
    if (isTheSameMonth(_min, end)) {
      start = _min;
      end = addMonth(start);
    }
    // In the to date section, if a user selects a month / year that is before the from date, then the from date section should be updated to be the month previous to the selected to date.
    if (isGreaterThanMaximun(end, start) || isTheSameMonth(end, start)) {
      start = subtractMonth(end);
    }
    setIntervalDates(start, end);
  };

  useEffect(() => {
    window.addEventListener("click", handleCancel);
    return () => {
      window.removeEventListener("click", handleCancel);
    };
  });

  const iconClick = (e) => {
    if (showModal) e.stopPropagation();
    else setShowModal(true);
  };

  const apply = () => {
    handleChangeDate({
      startDate: startDateSelected,
      endDate: endDateSelected,
    });
    setShowModal(false);
  };

  const handleChangeDatePicker = () => {};

  const isValid = (date) => compareDates(min, max, date);

  const formatInputDate = (date) =>
    date ? dayjs(date).format("DD/MM/YYYY") : "";

  const handleCancel = () => {
    if (showModal) {
      setShowModal(false);
      setStartDateSelected(null);
      setEndDateSelected(null);
      setError(null);
    }
  };

  return (
    <div className="date-picker">
      <div className="date-picker-inputs">
        <div className="date-picker-select">
          <DatePickerInput
            label="From"
            onChange={handleChangeDatePicker}
            value={formatInputDate(startValue)}
            placeholder="dd/mm/yyyy"
            width="160px"
            onClick={iconClick}
            {...{ iconClick, disabled }}
            style={{ marginRight: "6px" }}
          />
        </div>
        <DatePickerInput
          value={formatInputDate(endValue)}
          onChange={handleChangeDatePicker}
          label="To"
          placeholder="dd/mm/yyyy"
          width="160px"
          onClick={iconClick}
          {...{ iconClick, disabled }}
        />
        {showModal && (
          <div
            className="date-picker-menu"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="date-picker-section-2">
              <div className="date-picker-section-2-1">
                <Calendar
                  type="from"
                  intervalDate={startIntervalDate}
                  setIntervalDate={setStartIntervalDateAction}
                  monthList={startMonths}
                  yearList={startYears}
                  disabled={startDisabled}
                  {...{
                    startDateSelected,
                    endDateSelected,
                    setDateSelectedAction,
                    isValid,
                    hoverDate,
                    setHoverDate,
                    max,
                  }}
                />
                <Calendar
                  type="to"
                  intervalDate={endIntervalDate}
                  setIntervalDate={setEndIntervalDateAction}
                  monthList={endMonths}
                  yearList={endYears}
                  disabled={endDisabled}
                  {...{
                    startDateSelected,
                    endDateSelected,
                    setDateSelectedAction,
                    isValid,
                    hoverDate,
                    setHoverDate,
                    max,
                  }}
                />
              </div>
              {error && (
                <div className="date-picker-error">
                  <img src={errorIcon} className="date-picker-error-image" />
                  <div>
                    <span className="date-picker-error-text">
                      {`Your selection conflicts with the date range filter ${formatInputDate(
                        error.startDate
                      )}
                    - ${formatInputDate(
                      error.endDate
                    )} already applied. To apply mutiple filters, dates
                    must not overlap.`}
                    </span>
                  </div>
                </div>
              )}
              <div className="date-picker-footer">
                <SubtleButton onClick={handleCancel} label="Cancel" />
                <PrimaryButtonRectangle
                  label="Apply"
                  onClick={apply}
                  style={{ marginLeft: "8px" }}
                  disabled={!!error}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
