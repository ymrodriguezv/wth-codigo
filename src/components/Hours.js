import React from "react";

const Hours = () => {
  const shelterHours = [
    { day: "Monday", open: "11:00", close: "16:00" },
    { day: "Tuesday", open: "10:00", close: "16:00" },
    { day: "Wednesday", open: "10:00", close: "16:00" },
    { day: "Thursday", open: "10:00", close: "16:00" },
    { day: "Friday", open: "10:00", close: "16:00" },
    { day: "Saturday", open: "9:00", close: "20:00" },
    { day: "Sunday", open: "9:00", close: "20:00"   
 },
  ];

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  // Find today's hours
  const todayHours = shelterHours.find((day) => day.day === today);

  // Filter the days from Monday to Sunday, excluding today
  const filteredHours = shelterHours.filter((day) => day.day !== today);

  return (
    <div id="hours">
      <h2>Today's Hours</h2>
      <p>
        {todayHours.day} {todayHours.open} - {todayHours.close}
      </p>
      <h2>Upcoming Hours</h2>
      {filteredHours.map((day) => (
        <p key={day.day}>
          {day.day} {day.open} - {day.close}
        </p>
      ))}
    </div>
  );
};

export default Hours;